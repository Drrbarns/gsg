import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GSG Brands Services & Business Units',
  description:
    'Explore every GSG Brands Ghana service in one place: Convenience Goods & More, Personal Shopper, Sell-Safe Buy-Safe escrow marketplace, StreetCuisine, Courier delivery, Affiliates and GSG-AID.',
  path: '/gsg-brands',
  keywords: [
    'GSG Brands services',
    'GSG business units',
    'convenience goods Ghana',
    'personal shopper',
    'Sell-Safe Buy-Safe',
    'courier Ghana',
  ],
});

export default function GsgBrandsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
