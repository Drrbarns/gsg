import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const host = SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
