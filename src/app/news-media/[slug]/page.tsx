'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function NewsArticlePage() {
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
              <Badge className="mb-4">Announcements</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Article Title Placeholder
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <time>January 15, 2024</time>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20african%20business%20professional%20corporate%20setting%20ghana%20office%20workspace%20team%20collaboration%20success%20growth%20development&width=1200&height=600&seq=article-hero&orientation=landscape"
                alt="Article"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This is a placeholder article page. The actual content would be dynamically loaded based on the article slug.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Key Points</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>First key point about the article topic</li>
                <li>Second important detail to highlight</li>
                <li>Third significant aspect of the announcement</li>
                <li>Fourth relevant information for readers</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">Details</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
