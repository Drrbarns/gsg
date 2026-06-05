import { SITE_URL, SITE_NAME, ORG } from '@/lib/seo';
import { businessUnits } from '@/lib/data';

/**
 * Site-wide Organization + WebSite JSON-LD (rendered once in the root layout).
 * Feeds Google's knowledge graph: official name, logo, contact, social profiles,
 * service area and the catalogue of GSG services.
 */
export default function StructuredData() {
  const site = SITE_URL;
  const logo = `${site}/icon.png`;

  const services = businessUnits.map((unit) => ({
    '@type': 'Service',
    name: unit.title,
    description: unit.description,
    serviceType: unit.category,
    url: unit.url.startsWith('http') ? unit.url : `${site}${unit.url}`,
    areaServed: { '@type': 'Country', name: 'Ghana' },
    provider: { '@id': `${site}/#organization` },
  }));

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: SITE_NAME,
      alternateName: ['GSG Brands', 'GSG'],
      legalName: ORG.legalName,
      url: site,
      logo: { '@type': 'ImageObject', url: logo, width: 256, height: 256 },
      image: `${site}/opengraph-image`,
      email: ORG.email,
      description:
        'Ghana-based services ecosystem: convenience goods delivery, personal shopping, the Sell-Safe Buy-Safe escrow marketplace, StreetCuisine food delivery, nationwide courier, and community programmes.',
      slogan: 'Time & money saver for everyday value',
      address: {
        '@type': 'PostalAddress',
        addressLocality: ORG.city,
        addressRegion: ORG.region,
        addressCountry: ORG.country,
      },
      areaServed: { '@type': 'Country', name: 'Ghana' },
      contactPoint: ORG.phones.map((phone) => ({
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'customer service',
        areaServed: 'GH',
        availableLanguage: ['English'],
      })),
      sameAs: ORG.social,
      knowsLanguage: ['en-GH'],
    },
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: SITE_NAME,
      alternateName: ['GSG Brands', 'GSG'],
      url: site,
      publisher: { '@id': `${site}/#organization` },
      inLanguage: 'en-GH',
    },
    ...services,
  ];

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
