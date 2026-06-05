import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Track Your Order',
  description:
    'Track your GSG Brands Ghana order or delivery in real time. Enter your Order ID or Transaction ID to see live status updates for convenience goods, courier parcels and marketplace purchases.',
  path: '/tracking',
  keywords: [
    'GSG Brands tracking',
    'track order Ghana',
    'parcel tracking Ghana',
    'delivery tracking Accra',
    'courier tracking',
  ],
});

export default function TrackingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
