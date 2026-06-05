import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'StreetCuisine — Ghanaian Food Delivery',
  description:
    'StreetCuisine by GSG Brands delivers authentic Ghanaian street food — waakye, kelewele, jollof and more — fresh from trusted local vendors with hygiene standards and fast delivery across Ghana.',
  path: '/street-cuisine',
  keywords: [
    'StreetCuisine',
    'Ghanaian food delivery',
    'street food Accra',
    'waakye delivery',
    'jollof delivery Ghana',
    'local food delivery Ghana',
  ],
});

export default function StreetCuisineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
