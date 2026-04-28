import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const alt = 'GSG Brands';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logoBase64 = readFileSync(join(process.cwd(), 'public/brand/gsg-logo.png')).toString('base64');
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            alt="GSG"
            width={460}
            height={232}
            style={{ display: 'block' }}
          />
          <span
            style={{
              color: '#0a0a0a',
              fontSize: 140,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              display: 'flex',
            }}
          >
            Brands
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
