'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Announcements', 'Updates', 'Guides', 'Press'];

const newsArticles = [
  {
    slug: 'gsg-brands-expands-service-coverage',
    title: 'GSG Brands Expands Service Coverage Across Ghana',
    category: 'Announcements',
    date: '2024-01-15',
    excerpt: 'We are thrilled to announce the expansion of our service coverage to include more regions across Ghana, bringing our comprehensive ecosystem of services to even more communities.',
    image: 'https://readdy.ai/api/search-image?query=modern%20african%20business%20expansion%20map%20ghana%20regions%20network%20growth%20professional%20corporate%20photography%20vibrant%20colors%20optimistic%20atmosphere%20business%20development%20success%20story&width=800&height=500&seq=news-001&orientation=landscape',
  },
  {
    slug: 'new-partnership-local-vendors',
    title: 'New Partnership with Local Vendors Strengthens Marketplace',
    category: 'Updates',
    date: '2024-01-10',
    excerpt: 'GSG Brands announces strategic partnerships with verified local vendors to enhance our Sell-Safe Buy-Safe Marketplace, offering customers more choices and better value.',
    image: 'https://readdy.ai/api/search-image?query=african%20marketplace%20vendors%20partnership%20handshake%20business%20collaboration%20local%20entrepreneurs%20ghana%20commerce%20community%20professional%20photography%20warm%20lighting%20authentic&width=800&height=500&seq=news-002&orientation=landscape',
  },
  {
    slug: 'customer-satisfaction-reaches-98-percent',
    title: 'Customer Satisfaction Reaches 98% Milestone',
    category: 'Press',
    date: '2024-01-05',
    excerpt: 'Our commitment to excellence continues to deliver outstanding results as customer satisfaction ratings reach an impressive 98%, reflecting our dedication to quality service.',
    image: 'https://readdy.ai/api/search-image?query=happy%20satisfied%20african%20customers%20smiling%20positive%20feedback%20testimonials%20customer%20service%20excellence%20ghana%20professional%20photography%20bright%20cheerful%20atmosphere%20success%20celebration&width=800&height=500&seq=news-003&orientation=landscape',
  },
  {
    slug: 'how-to-use-personal-shopper-service',
    title: 'How to Make the Most of Our Personal Shopper Service',
    category: 'Guides',
    date: '2023-12-28',
    excerpt: 'Learn how to leverage our Personal Shopper service to save time, compare prices effectively, and make informed purchasing decisions with expert assistance.',
    image: 'https://readdy.ai/api/search-image?query=personal%20shopping%20assistant%20helping%20customer%20african%20woman%20professional%20service%20guidance%20shopping%20bags%20retail%20experience%20ghana%20modern%20lifestyle%20convenience&width=800&height=500&seq=news-004&orientation=landscape',
  },
  {
    slug: 'streetcuisine-launch-announcement',
    title: 'StreetCuisine By GSG: Coming Soon to Your Neighborhood',
    category: 'Announcements',
    date: '2023-12-20',
    excerpt: 'Get ready for authentic Ghanaian street food delivered fresh to your doorstep. StreetCuisine By GSG is launching soon, bringing local flavors with quality assurance.',
    image: 'https://readdy.ai/api/search-image?query=delicious%20ghanaian%20street%20food%20local%20cuisine%20authentic%20dishes%20colorful%20presentation%20traditional%20african%20food%20culture%20appetizing%20fresh%20ingredients%20culinary%20heritage&width=800&height=500&seq=news-005&orientation=landscape',
  },
  {
    slug: 'secure-shopping-tips',
    title: 'Top 5 Tips for Secure Online Shopping in Ghana',
    category: 'Guides',
    date: '2023-12-15',
    excerpt: 'Stay safe while shopping online with these essential security tips. Learn how to identify verified sellers, protect your payment information, and shop with confidence.',
    image: 'https://readdy.ai/api/search-image?query=online%20shopping%20security%20digital%20safety%20african%20person%20using%20smartphone%20secure%20payment%20protection%20technology%20ghana%20modern%20lifestyle%20cybersecurity%20awareness%20professional&width=800&height=500&seq=news-006&orientation=landscape',
  },
];

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
