import type { MetadataRoute } from 'next';
import { newsArticles } from '@/lib/data';

const base = 'https://gsgbrands.com.gh';

const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gsg-brands', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/customer-experience', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/ask-gsg-brands', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/tracking', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/news-media', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/street-cuisine', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/courier-delivery', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/affiliates', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/gsg-aid', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/cookies', priority: 0.35, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.45, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.45, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const main = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const articles = newsArticles.map((article) => ({
    url: `${base}/news-media/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...main, ...articles];
}
