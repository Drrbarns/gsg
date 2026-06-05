import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'GSG-AID — Community Impact',
  description:
    'GSG-AID is the community arm of GSG Brands Ghana — community support, education and training, economic empowerment and social impact initiatives that uplift Ghanaian communities.',
  path: '/gsg-aid',
  keywords: [
    'GSG-AID',
    'GSG Brands community',
    'social impact Ghana',
    'community support Ghana',
    'economic empowerment Ghana',
  ],
});

export default function GsgAidLayout({ children }: { children: React.ReactNode }) {
  return children;
}
