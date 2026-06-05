import type { Metadata } from 'next';

/**
 * Single source of truth for SEO.
 *
 * IMPORTANT: the production server 301-redirects the apex domain
 * (gsgbrands.com.gh) to the `www` host, so `www` is the canonical origin.
 * Every canonical URL, sitemap entry, Open Graph URL and JSON-LD `url`
 * must use this exact origin to avoid redirect/duplicate-content signals.
 */
export const SITE_URL = 'https://www.gsgbrands.com.gh';
export const SITE_NAME = 'GSG Brands Ghana';
export const SITE_SHORT_NAME = 'GSG Brands';
export const SITE_TAGLINE = 'Time & money saver for everyday value';
export const SITE_LOCALE = 'en_GH';

export const ORG = {
  name: SITE_NAME,
  legalName: 'GSG Brands Ghana',
  email: 'info@gsgbrands.com.gh',
  // E.164 format for schema.org / tel: usage.
  phones: ['+233246033792', '+233579033792'],
  city: 'Accra',
  region: 'Greater Accra',
  country: 'GH',
  social: [
    'https://www.facebook.com/gsgbrandsgh',
    'https://x.com/gsgbrandsgh',
    'https://www.instagram.com/gsgbrandsgh',
    'https://t.me/gsgbrandsgh',
    'https://whatsapp.com/channel/0029VbBYwi3D',
  ],
} as const;

/** Canonical absolute URL for a given path (e.g. "/about"). */
export function canonical(path = ''): string {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/about"). Use "" for home. */
  path?: string;
  keywords?: string[];
  /** Absolute path to an OG image, defaults to the site card. */
  ogImage?: string;
  /** Set true for thin/utility pages we don't want competing in the index. */
  noindex?: boolean;
  type?: 'website' | 'article';
}

/**
 * Builds a complete, consistent Metadata object for a route.
 * The document <title> still flows through the root template ("%s | GSG Brands Ghana"),
 * while OG/Twitter titles are spelled out in full for correct social previews.
 */
export function pageMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage = '/opengraph-image',
  noindex = false,
  type = 'website',
}: PageMetaInput): Metadata {
  const url = canonical(path);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    ...(noindex
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      type,
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
