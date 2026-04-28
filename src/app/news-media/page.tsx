'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NEWS_FALLBACK_IMAGE } from '@/lib/newsFallbackImage';
import { newsArticles } from '@/lib/data';

const categories = ['All', 'Announcements', 'Updates', 'Guides', 'Press'];

export default function NewsMediaPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50/30">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white pt-32 pb-24 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-purple-400/20 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">News & Media</h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and insights from GSG Brands.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-700 text-white shadow-md shadow-purple-700/20'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden border-gray-100 flex flex-col bg-white">
                  <Link href={`/news-media/${article.slug}`} className="block relative h-60 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = NEWS_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 hover:bg-white text-purple-700 backdrop-blur-md border-0 shadow-sm font-bold tracking-wide px-3 py-1">
                        {article.category}
                      </Badge>
                    </div>
                  </Link>
                  <CardHeader className="flex-1 pb-4 pt-6 px-6">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold mb-3 uppercase tracking-widest">
                      <span>{article.date}</span>
                    </div>
                    <Link href={`/news-media/${article.slug}`} className="block group-hover:text-purple-700 transition-colors">
                      <CardTitle className="text-xl sm:text-2xl font-bold line-clamp-3 leading-snug">
                        {article.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="mt-auto px-6 pb-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/news-media/${article.slug}`} 
                      className="inline-flex items-center text-sm font-bold text-purple-700 hover:text-purple-800 transition-colors group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">?</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">There are currently no articles in this category.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setSelectedCategory('All')}
              >
                View All Categories
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}