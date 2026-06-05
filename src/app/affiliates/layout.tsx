import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Affiliates — Earn With GSG Brands',
  description:
    'Join the GSG Brands Ghana affiliate programme and earn commissions promoting trusted services. Get marketing support, growth opportunities and a partner network across Ghana.',
  path: '/affiliates',
  keywords: [
    'GSG Brands affiliates',
    'affiliate programme Ghana',
    'earn money online Ghana',
    'referral programme Ghana',
    'partner with GSG',
  ],
});

export default function AffiliatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
