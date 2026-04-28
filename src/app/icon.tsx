import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #6b21a8 0%, #4c1d95 100%)',
          borderRadius: 8,
          color: 'white',
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: -0.5,
        }}
      >
        G
      </div>
    ),
    { ...size },
  );
}
