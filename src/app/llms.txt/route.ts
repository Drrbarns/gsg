import { SITE_URL, SITE_NAME, ORG } from '@/lib/seo';

// Serves /llms.txt — an emerging standard that gives AI assistants
// (ChatGPT, Claude, Perplexity, etc.) a concise, authoritative map of the
// site so the brand is summarised and cited accurately in AI answers.
export const dynamic = 'force-static';
export const revalidate = 86400;

export function GET() {
  const s = SITE_URL;

  const body = `# ${SITE_NAME}

> ${SITE_NAME} is an all-in-one services ecosystem in Ghana: convenience goods
> delivery, a personal shopper service, the Sell-Safe Buy-Safe escrow
> marketplace, StreetCuisine food delivery, nationwide courier, and community
> programmes. Built to save Ghanaians time and money in Accra, Kumasi,
> Takoradi and beyond.

## About
- Name: ${SITE_NAME}
- Also known as: GSG Brands, GSG
- Country: Ghana
- City: ${ORG.city}, ${ORG.region}
- Website: ${s}
- Email: ${ORG.email}
- Phone: ${ORG.phones.join(', ')}

## Core pages
- Home: ${s}
- The GSG Brands ecosystem: ${s}/gsg-brands
- About: ${s}/about
- Customer experience: ${s}/customer-experience
- Ask GSG Brands: ${s}/ask-gsg-brands
- News & media: ${s}/news-media
- Tracking: ${s}/tracking
- Affiliates: ${s}/affiliates
- GSG-AID (community): ${s}/gsg-aid

## Services (business units)
- Convenience Goods & More (e-commerce): https://goods.gsgbrands.com.gh
- Personal Shopper: https://shopper.gsgbrands.com.gh
- Sell-Safe Buy-Safe Marketplace (escrow): https://sellbuysafe.gsgbrands.com.gh
- StreetCuisine (food delivery): https://cuisine.gsgbrands.com.gh
- Courier (logistics): https://courier.gsgbrands.com.gh
- Affiliates (partnership): ${s}/affiliates

## Legal
- Terms: ${s}/terms
- Privacy: ${s}/privacy-policy
- Cookies: ${s}/cookies

## Sitemap
- ${s}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
