import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #5b21b6 0%, #4c1d95 55%, #1e1b4b 100%)',
          borderRadius: 40,
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          GSG
        </div>
        <div
          style={{
            marginTop: 8,
            color: 'rgba(255,255,255,0.75)',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Brands
        </div>
      </div>
    ),
    { ...size },
  );
}
