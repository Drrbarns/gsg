'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Announcements', 'Updates', 'Guides', 'Press'];

import { newsArticles } from '@/lib/data';

export default function NewsMediaPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">News & Media</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and insights from GSG Brands
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-6 py-2 text-sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge>{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <Link href={`/news-media/${article.slug}`} className="cursor-pointer">
                      <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
