import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ServiceBar from '@/components/ServiceBar';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GSG Brands - Time & Money Saver For Value',
  description: 'GSG Brands corporate hub offering Convenience Goods, Personal Shopping, Marketplace, StreetCuisine, Courier & Delivery services across Ghana.',
  keywords: 'GSG Brands, Ghana shopping, convenience goods, personal shopper, marketplace, courier delivery, street cuisine',
  openGraph: {
    title: 'GSG Brands - Time & Money Saver For Value',
    description: 'Your trusted partner for convenience goods, personal shopping, and delivery services in Ghana.',
    url: 'https://gsgbrands.com.gh',
    siteName: 'GSG Brands',
    locale: 'en_GH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ServiceBar />
        <MainHeader />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
