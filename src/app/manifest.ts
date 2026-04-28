import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GSG Brands',
    short_name: 'GSG',
    description:
      'Convenience goods, personal shopping, marketplace, StreetCuisine, courier and customer support across Ghana.',
    id: '/',
    start_url: '/',
    display: 'browser',
    background_color: '#fafafa',
    theme_color: '#5b21b6',
    lang: 'en-GH',
    dir: 'ltr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
