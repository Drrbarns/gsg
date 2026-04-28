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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/hero-market-ghana.png"
            alt="GSG Brands Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

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

      <section className="relative py-24 bg-white overflow-hidden">
        {/* 2026-style ambient background */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-purple-100/60 via-fuchsia-50 to-transparent blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-5 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Why GSG Brands
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 bg-clip-text text-transparent leading-tight">
              Built for the way you live today
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Four pillars that define every interaction—engineered to save your time, protect your money, and deliver more value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => {
              const stats = ['100%', '< 24h', '30%+', '24/7'];
              const statLabels = ['Verified', 'Avg. delivery', 'Avg. savings', 'Always on'];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  {/* Gradient border on hover */}
                  <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple-400/0 via-fuchsia-400/0 to-purple-600/0 group-hover:from-purple-400/40 group-hover:via-fuchsia-400/40 group-hover:to-purple-600/40 transition-all duration-500 blur-sm" />

                  <div className="relative h-full p-7 rounded-3xl bg-white border border-gray-100 hover:border-transparent group-hover:shadow-2xl group-hover:shadow-purple-200/40 transition-all duration-500 hover:-translate-y-1 flex flex-col overflow-hidden">
                    {/* Subtle inner glow */}
                    <div aria-hidden className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon + stat row */}
                    <div className="relative flex items-start justify-between mb-6">
                      <div className="relative">
                        <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 group-hover:from-purple-600 group-hover:to-fuchsia-600 group-hover:text-white transition-all duration-500">
                          <feature.icon className="w-5 h-5" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 tracking-tight tabular-nums">
                          {stats[index]}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                          {statLabels[index]}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative text-lg font-bold text-gray-900 mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="relative text-sm text-gray-500 leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="relative mt-6 pt-5 border-t border-gray-100/80 flex items-center text-xs font-semibold text-gray-400 group-hover:text-purple-700 transition-colors">
                      <span className="tracking-wide uppercase">{`0${index + 1}`}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 inline-flex items-center gap-1">
                        Learn more
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 shadow-xl shadow-purple-900/20"
          >
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-purple-400/15 blur-3xl" />

            <div className="relative px-6 py-12 sm:px-12 sm:py-14 lg:py-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-10">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/90 mb-5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Customer Experience · Online now
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    We&apos;re here to help.
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-purple-100/90 max-w-md leading-relaxed">
                    Reach our team through your preferred channel for fast, reliable support across all GSG Brands services.
                  </p>
                </div>

                <Link href="/customer-experience" className="cursor-pointer shrink-0">
                  <Button size="lg" className="gap-2 bg-white text-purple-900 hover:bg-purple-50 h-12 px-6 text-sm font-semibold shadow-lg">
                    <Headphones className="w-4 h-4" />
                    Visit Customer Experience
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
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
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-purple-700 transition-colors">
                      <channel.icon className="w-4 h-4 text-white group-hover:text-purple-700 transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white/60 group-hover:text-white/80 uppercase tracking-wider transition-colors">{channel.name}</p>
                      <p className="text-sm font-medium text-white truncate">{channel.handle}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-purple-200/80">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                  <Phone className="w-2.5 h-2.5" />
                </span>
                Live calls available 05:00am – 02:00pm (Mon–Fri)
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
