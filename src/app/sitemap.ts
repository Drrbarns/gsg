import type { MetadataRoute } from 'next';
import { newsArticles } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

const base = SITE_URL;

const staticPaths: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'];
}[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/gsg-brands', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/customer-experience', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/street-cuisine', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/courier-delivery', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/news-media', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/ask-gsg-brands', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/tracking', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/affiliates', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/gsg-aid', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.35, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const main: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const articles: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${base}/news-media/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
    images: [`${base}${article.image}`],
  }));

  return [...main, ...articles];
}
