import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'News & Media',
  description:
    'The latest news, announcements, press and guides from GSG Brands Ghana — service expansions, marketplace updates, customer stories and tips for shopping smarter across Ghana.',
  path: '/news-media',
  keywords: [
    'GSG Brands news',
    'GSG Brands press',
    'GSG announcements',
    'Ghana ecommerce news',
  ],
});

export default function NewsMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
