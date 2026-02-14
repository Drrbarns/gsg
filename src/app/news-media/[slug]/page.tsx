'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/data';

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link href="/news-media">
          <Button>Back to News</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news-media" className="cursor-pointer">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <time>{article.date}</time>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content || '' }}
            />
          </motion.article>
        </div>
      </section>
    </main>
  );
}
