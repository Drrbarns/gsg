import type { Metadata } from 'next';
import { newsArticles } from '@/lib/data';
import { SITE_URL, SITE_NAME, canonical, pageMetadata } from '@/lib/seo';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

function getArticle(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

function absolute(path: string) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return pageMetadata({
      title: 'Article Not Found',
      description: 'The article you are looking for could not be found.',
      path: `/news-media/${slug}`,
      noindex: true,
    });
  }

  const url = canonical(`/news-media/${article.slug}`);
  const image = absolute(article.image);
  const fullTitle = `${article.title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_GH',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: article.excerpt,
      publishedTime: new Date(article.date).toISOString(),
      section: article.category,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gsgbrandsgh',
      title: fullTitle,
      description: article.excerpt,
      images: [image],
    },
  };
}

const NEWS_CATEGORIES = ['Announcements', 'Updates', 'Press'];

export default async function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return <>{children}</>;

  const url = canonical(`/news-media/${article.slug}`);
  const image = absolute(article.image);
  const published = new Date(article.date).toISOString();
  const articleType = NEWS_CATEGORIES.includes(article.category)
    ? 'NewsArticle'
    : 'BlogPosting';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': articleType,
        '@id': `${url}#article`,
        headline: article.title,
        description: article.excerpt,
        image: [image],
        datePublished: published,
        dateModified: published,
        articleSection: article.category,
        inLanguage: 'en-GH',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'News & Media',
            item: canonical('/news-media'),
          },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
