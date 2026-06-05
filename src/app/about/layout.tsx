import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Meet GSG Brands Ghana — the team and mission behind a connected ecosystem of convenience goods, personal shopping, the Sell-Safe Buy-Safe marketplace, StreetCuisine, courier and community programmes built to save Ghanaians time and money.',
  path: '/about',
  keywords: [
    'about GSG Brands',
    'GSG Brands Ghana company',
    'GSG Brands mission',
    'Ghana services company',
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
