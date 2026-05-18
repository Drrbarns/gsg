/**
 * Organization + WebSite JSON-LD for rich results / knowledge graph hints.
 */
export default function StructuredData() {
  const site = 'https://gsgbrands.com.gh';
  const logo = `${site}/apple-icon`;

  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'GSG Brands Ghana',
      alternateName: ['GSG Brands', 'GSG'],
      legalName: 'GSG Brands Ghana',
      url: site,
      logo: { '@type': 'ImageObject', url: logo, width: 180, height: 180 },
      description:
        'Ghana-based service ecosystem: convenience goods, personal shopping, secure marketplace commerce, street food, courier delivery and community programmes.',
      areaServed: { '@type': 'Country', name: 'Ghana' },
      knowsLanguage: ['en-GH'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'GSG Brands Ghana',
      alternateName: ['GSG Brands', 'GSG'],
      url: site,
      publisher: { '@id': `${site}/#organization` },
      inLanguage: 'en-GH',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
