import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Courier & Delivery Services',
  description:
    'Reliable GSG Brands courier and delivery across Ghana — documents, packages and parcels handled securely with real-time tracking and nationwide coverage from Accra to Kumasi and Takoradi.',
  path: '/courier-delivery',
  keywords: [
    'courier Ghana',
    'delivery service Ghana',
    'parcel delivery Accra',
    'package delivery Ghana',
    'GSG courier',
    'same day delivery Ghana',
  ],
});

export default function CourierDeliveryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
