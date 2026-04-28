import { ImageResponse } from 'next/og';

export const alt = 'GSG Brands — Convenience, shopping, delivery & support in Ghana';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          background: 'linear-gradient(145deg, #1a0b2e 0%, #581c87 42%, #0f172a 100%)',
          padding: 56,
          position: 'relative',
        }}
      >
        {/* Decorative orb */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 520,
            height: 520,
            display: 'flex',
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.42) 0%, transparent 58%)',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            GSG
          </div>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 22, fontWeight: 600 }}>Brands</span>
        </div>

        {/* Headline block */}
        <div
          style={{
            marginTop: 56,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            zIndex: 1,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              color: 'rgba(196,181,253,0.95)',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            Ghana · Connected services
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: -2,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span style={{ display: 'flex' }}>Time & money saver</span>
            <span style={{ color: '#e9d5ff', display: 'flex' }}>for everyday value</span>
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: 780,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Convenience goods, personal shopping, marketplace, StreetCuisine, courier and delivery — Accra-first,
            Ghana-wide ambition.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: 48,
            zIndex: 1,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18, display: 'flex' }}>gsgbrands.com.gh</span>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18, display: 'flex' }}>en-GH · Business</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
