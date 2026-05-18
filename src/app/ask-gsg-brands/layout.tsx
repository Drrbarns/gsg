import type { Metadata } from 'next';
import AskStructuredData from './AskStructuredData';

const canonical = 'https://gsgbrands.com.gh/ask-gsg-brands';

export const metadata: Metadata = {
  title: 'Ask GSG Brands — FAQs & contact',
  description:
    'Answers about GSG services, delivery, payments, Sell-Safe Buy-Safe, Personal Shopper, and courier. Still stuck? Submit a question for the team.',
  keywords: [
    'GSG Brands help',
    'GSG Ghana support',
    'GSG delivery areas',
    'Sell-Safe Buy-Safe',
    'personal shopper Ghana',
    'GSG affiliate',
  ],
  alternates: { canonical },
  openGraph: {
    title: 'Ask GSG Brands — FAQs & contact',
    description:
      'Browse common answers about our ecosystem, or send a question. Chat, phone, and email supported.',
    url: canonical,
    type: 'website',
    locale: 'en_GH',
    siteName: 'GSG Brands Ghana',
    images: [
      {
        url: 'https://gsgbrands.com.gh/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'GSG Brands — Ask us anything',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ask GSG Brands',
    description: 'FAQs and a direct line to our team — Ghana.',
    images: ['https://gsgbrands.com.gh/opengraph-image'],
  },
  robots: { index: true, follow: true },
};

export default function AskGsgBrandsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AskStructuredData />
      {children}
    </>
  );
}
