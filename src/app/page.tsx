'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Send, Phone, Mail, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { businessUnits, features, newsArticles } from '@/lib/data';
import { NEWS_FALLBACK_IMAGE } from '@/lib/newsFallbackImage';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop"
            alt="GSG Brands Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-purple-900/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm sm:text-base">
              Time & Money Saver For Value
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for Everyday Needs
            </h1>
            <p className="text-base sm:text-xl text-purple-100 mb-8 sm:mb-10 leading-relaxed">
              GSG Brands brings together Convenience Goods & More, personal shopping, secure marketplace, cuisine delivery, and courier services—all designed to save you time and money while delivering exceptional value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gsg-brands" className="cursor-pointer w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Explore GSG Brands
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/customer-experience" className="cursor-pointer w-full sm:w-auto">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                  Customer Experience
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Business Units</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to meet all your daily needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
                  <CardHeader className="flex-1 pb-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-700 rounded-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <unit.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold">
                      {unit.title}
                      {unit.active && unit.comingSoon && (
                        <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-100">Coming Soon</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed mt-2 line-clamp-5">{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4">
                    {unit.active ? (
                      <a href={unit.url} target={unit.url.startsWith('http') ? "_blank" : "_self"} rel={unit.url.startsWith('http') ? "noopener noreferrer" : ""} className="cursor-pointer block">
                        <Button className="w-full gap-2 bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                          Visit Service
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    ) : (
                      <Button className="w-full bg-gray-50 text-gray-400 border-0" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose GSG Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering excellence in every interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-purple-50 text-purple-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-200">
                  <feature.icon className="w-8 h-8 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest developments and announcements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {newsArticles.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden border-gray-100 flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = NEWS_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 hover:bg-white text-purple-700 backdrop-blur-sm border-0 shadow-sm font-semibold">{item.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-1 pb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
                      <span>{item.date}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 leading-snug group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                    <Link href={`/news-media/${item.slug}`} className="cursor-pointer inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/news-media" className="cursor-pointer">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-white">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                  We're here to help.
                </h2>
                <p className="text-lg text-purple-100 max-w-lg mb-10 leading-relaxed">
                  Our customer experience team is on standby to assist you. Reach out through your preferred channel for fast, reliable support across all GSG Brands services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/customer-experience" className="cursor-pointer">
                    <Button size="lg" className="w-full sm:w-auto gap-2 bg-white text-purple-900 hover:bg-gray-50 h-14 px-8 text-base font-semibold">
                      <Headphones className="w-5 h-5" />
                      Visit Customer Experience
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-purple-950 p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { name: 'WhatsApp', handle: '+233 246 033 792', href: 'https://wa.me/233246033792', icon: MessageCircle },
                    { name: 'Telegram', handle: '@gsgbrandsgh', href: 'https://t.me/gsgbrandsgh', icon: Send },
                    { name: 'Call Us', handle: '+233 (0) 579 033 792', href: 'tel:+233579033792', icon: Phone },
                    { name: 'Email', handle: 'info@gsgbrands.com.gh', href: 'mailto:info@gsgbrands.com.gh', icon: Mail },
                  ].map((channel) => (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 p-5 rounded-2xl bg-purple-900/40 hover:bg-purple-800 border border-purple-800/50 hover:border-purple-600 transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center shrink-0 group-hover:bg-purple-700 transition-colors">
                        <channel.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">{channel.name}</p>
                        <p className="text-sm text-purple-200">{channel.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="mt-8 text-sm text-purple-300 text-center lg:text-left">
                  Live calls 05:00am – 02:00pm (Mon–Fri).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
