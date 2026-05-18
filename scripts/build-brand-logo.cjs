/* eslint-disable */
// Build optimized brand logo assets from public/brand/gsg-brands-logo-source.png
//
// Outputs:
//   public/brand/gsg-brands-logo.webp        (color version for light backgrounds)
//   public/brand/gsg-brands-logo.png         (color PNG fallback)
//   public/brand/gsg-brands-logo-light.webp  (dark text -> white, for dark backgrounds)
//   public/brand/gsg-brands-logo-light.png   (light PNG fallback)

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(process.cwd(), 'public/brand/gsg-brands-logo-source.png');
const OUT_DIR = path.join(process.cwd(), 'public/brand');

// Match the source's intrinsic aspect ratio; cap width for crisp rendering at 2x.
const TARGET_WIDTH = 940;

async function makeColorVariant() {
  const optimized = await sharp(SRC)
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, 'gsg-brands-logo.png'), optimized);

  const webp = await sharp(SRC)
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, 'gsg-brands-logo.webp'), webp);
}

// Re-color dark grayscale pixels to white while preserving purple capsule + transparency.
async function makeLightVariant() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels; // 4 (RGBA)
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a === 0) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isGrayscale = max - min < 35; // not very saturated -> likely text/stroke
    const isDark = max < 130;

    if (isGrayscale && isDark) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }

  const recolored = sharp(data, {
    raw: { width: info.width, height: info.height, channels },
  });

  const pngBuf = await recolored
    .clone()
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, 'gsg-brands-logo-light.png'), pngBuf);

  const webpBuf = await recolored
    .clone()
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, 'gsg-brands-logo-light.webp'), webpBuf);
}

(async () => {
  await makeColorVariant();
  await makeLightVariant();

  const files = [
    'gsg-brands-logo.png',
    'gsg-brands-logo.webp',
    'gsg-brands-logo-light.png',
    'gsg-brands-logo-light.webp',
  ];
  for (const f of files) {
    const s = fs.statSync(path.join(OUT_DIR, f));
    console.log(`  ${f}: ${(s.size / 1024).toFixed(1)} KB`);
  }
  console.log('Done.');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
