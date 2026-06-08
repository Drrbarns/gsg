import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const host = SITE_URL;

const DISALLOW = ['/api/'];

// AI / LLM search crawlers we explicitly welcome so the brand can be cited in
// AI answers (ChatGPT, Claude, Perplexity, Google AI Overviews, etc.).
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'Bytespider',
  'DuckAssistBot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_CRAWLERS.map((agent) => ({
        userAgent: agent,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
