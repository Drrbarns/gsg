import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Customer Experience & Support',
  description:
    'Reach the GSG Brands Ghana Customer Experience team by phone, WhatsApp, Telegram or email. Get help with orders, deliveries, payments, the Sell-Safe Buy-Safe marketplace and every GSG service.',
  path: '/customer-experience',
  keywords: [
    'GSG Brands support',
    'GSG Brands contact',
    'customer service Ghana',
    'GSG help',
    'GSG WhatsApp',
  ],
});

export default function CustomerExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
