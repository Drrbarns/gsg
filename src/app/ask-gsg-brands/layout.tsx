import type { Metadata } from 'next';
import AskStructuredData from './AskStructuredData';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Ask GSG Brands — FAQs & Contact',
  description:
    'Answers about GSG Brands Ghana services, delivery areas, payments, Sell-Safe Buy-Safe, Personal Shopper and courier. Still stuck? Submit a question and our team will respond.',
  path: '/ask-gsg-brands',
  keywords: [
    'GSG Brands FAQ',
    'GSG Brands help',
    'GSG Ghana support',
    'GSG delivery areas',
    'Sell-Safe Buy-Safe',
    'personal shopper Ghana',
    'GSG affiliate',
  ],
});

export default function AskGsgBrandsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AskStructuredData />
      {children}
    </>
  );
}
