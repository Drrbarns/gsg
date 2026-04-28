'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/data';
import { NEWS_FALLBACK_IMAGE } from '@/lib/newsFallbackImage';

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Article Not Found</h1>
          <p className="text-gray-500 max-w-md mx-auto">We couldn't find the article you're looking for. It may have been moved or removed.</p>
          <Link href="/news-media">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Article Header */}
      <section className="bg-white border-b border-gray-200 pt-32 pb-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 font-medium mb-8">
              <Link href="/news-media" className="hover:text-purple-700 transition-colors flex items-center">
                News & Media
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
              <span className="text-gray-900">{article.category}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 shadow-none font-bold tracking-wide px-3 py-1">
                {article.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5" />
                <time>{article.date}</time>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Hero Image */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[21/10] rounded-2xl overflow-hidden mb-12 sm:mb-16 shadow-2xl shadow-gray-200">
              <img
                src={article.image}
                alt={article.title}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = NEWS_FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>

            {/* Typography Container */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100 mx-auto max-w-3xl">
              <div
                className="prose prose-lg sm:prose-xl prose-purple max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:font-semibold hover:prose-a:text-purple-800 prose-li:marker:text-purple-500"
                dangerouslySetInnerHTML={{ __html: article.content || '' }}
              />
              
              <hr className="my-12 border-gray-100" />
              
              {/* Post-article footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">Share this:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-gray-200 text-gray-600 hover:text-purple-700 hover:border-purple-200">
                      <i className="ri-twitter-x-line"></i>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-gray-200 text-gray-600 hover:text-purple-700 hover:border-purple-200">
                      <i className="ri-facebook-fill"></i>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-gray-200 text-gray-600 hover:text-purple-700 hover:border-purple-200">
                      <i className="ri-linkedin-fill"></i>
                    </Button>
                  </div>
                </div>
                <Link href="/news-media">
                  <Button variant="ghost" className="font-semibold text-purple-700 hover:text-purple-800 hover:bg-purple-50">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to all news
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}