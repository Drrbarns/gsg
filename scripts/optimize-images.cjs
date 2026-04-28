/* eslint-disable */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processFolder(dir, opts) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isFile() && /\.png$/i.test(entry.name)) {
      const stat = fs.statSync(fullPath);
      const before = stat.size;

      const optimizedPng = path.join(dir, entry.name.replace(/\.png$/i, '.opt.png'));
      const webpPath = path.join(dir, entry.name.replace(/\.png$/i, '.webp'));

      await sharp(fullPath)
        .resize({ width: opts.maxWidth, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(optimizedPng);

      await sharp(fullPath)
        .resize({ width: opts.maxWidth, withoutEnlargement: true })
        .webp({ quality: opts.webpQuality })
        .toFile(webpPath);

      // Replace original PNG with optimized one
      fs.renameSync(optimizedPng, fullPath);
      const afterPng = fs.statSync(fullPath).size;
      const afterWebp = fs.statSync(webpPath).size;
      console.log(
        `${path.relative(process.cwd(), fullPath)}: ${(before / 1024 / 1024).toFixed(2)}MB → PNG ${(afterPng / 1024 / 1024).toFixed(2)}MB | WEBP ${(afterWebp / 1024 / 1024).toFixed(2)}MB`
      );
    } else if (entry.isDirectory()) {
      await processFolder(fullPath, opts);
    }
  }
}

(async () => {
  await processFolder(path.join(process.cwd(), 'public/images'), { maxWidth: 2000, webpQuality: 80 });
  await processFolder(path.join(process.cwd(), 'public/news'), { maxWidth: 1600, webpQuality: 78 });
  console.log('Done.');
})();
