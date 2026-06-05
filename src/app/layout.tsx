import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ServiceBar from '@/components/ServiceBar';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import StructuredData from '@/components/StructuredData';
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

const site = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description:
    'GSG Brands Ghana is an all-in-one services ecosystem in Ghana — convenience goods delivery, personal shopper, Sell-Safe Buy-Safe escrow marketplace, StreetCuisine food delivery, nationwide courier, and customer support. Save time and money in Accra, Kumasi, Takoradi and beyond.',
  keywords: [
    'GSG Brands',
    'GSG Brands Ghana',
    'GSG Brands Ghana Limited',
    'online shopping Ghana',
    'grocery delivery Accra',
    'convenience goods Ghana',
    'personal shopper Ghana',
    'Makola market shopping',
    'Sell-Safe Buy-Safe',
    'escrow payment Ghana',
    'secure online marketplace Ghana',
    'StreetCuisine',
    'Ghanaian food delivery',
    'courier service Ghana',
    'parcel delivery Accra',
    'package tracking Ghana',
    'mobile money payment',
    'GSG affiliates',
  ],
  authors: [{ name: SITE_NAME, url: site }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Your hub for convenience goods, personal shopping, the Sell-Safe Buy-Safe marketplace, StreetCuisine, courier delivery and customer support across Ghana.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'GSG Brands Ghana — connected services across Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gsgbrandsgh',
    creator: '@gsgbrandsgh',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
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
  // Google Search Console verification.
  // Set GOOGLE_SITE_VERIFICATION in your Vercel env (Project → Settings →
  // Environment Variables) to the token from GSC's "HTML tag" method, or
  // verify via DNS/HTML-file instead and leave this unset.
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
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
