import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ServiceBar from '@/components/ServiceBar';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

const site = 'https://gsgbrands.com.gh';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'GSG Brands — Time & money saver for everyday value',
    template: '%s | GSG Brands',
  },
  applicationName: 'GSG Brands',
  description:
    'GSG Brands connects convenience shopping, personal shopping, Sell-Safe marketplace, StreetCuisine, courier delivery and support across Ghana.',
  keywords: [
    'GSG Brands',
    'Ghana',
    'Accra',
    'convenience goods',
    'personal shopper',
    'marketplace Ghana',
    'courier Ghana',
    'StreetCuisine',
    'mobile money',
  ],
  authors: [{ name: 'GSG Brands', url: site }],
  creator: 'GSG Brands',
  publisher: 'GSG Brands',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'business',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: site,
    siteName: 'GSG Brands',
    title: 'GSG Brands — Time & money saver for everyday value',
    description:
      'Your hub for convenience goods, personal shopping, marketplace trust, food, courier and customer support in Ghana.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'GSG Brands — Ghana connected services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSG Brands — Time & money saver for everyday value',
    description:
      'Convenience shopping, personal shopper, marketplace, StreetCuisine & courier — built for Ghana.',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: site,
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GH">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <ServiceBar />
        <MainHeader />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
