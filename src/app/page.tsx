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
            src="https://readdy.ai/api/search-image?query=modern%20african%20marketplace%20vibrant%20shopping%20scene%20with%20diverse%20people%20colorful%20products%20fresh%20goods%20urban%20ghana%20setting%20professional%20commercial%20photography%20warm%20natural%20lighting%20contemporary%20retail%20environment%20bustling%20activity%20community%20commerce%20lifestyle&width=1920&height=1080&seq=gsg-hero-bg-001&orientation=landscape"
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
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardHeader>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-4">
                      <unit.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {unit.title}
                      {unit.active && unit.comingSoon && (
                        <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {unit.active ? (
                      <a href={unit.url} target={unit.url.startsWith('http') ? "_blank" : "_self"} rel={unit.url.startsWith('http') ? "noopener noreferrer" : ""} className="cursor-pointer">
                        <Button className="w-full gap-2">
                          Visit Service
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button className="w-full" disabled>
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

      <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
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
              >
                <Card className="h-full hover:shadow-lg transition-all group overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = NEWS_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{item.category}</Badge>
                    <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                    <CardDescription className="text-xs">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <Link href={`/news-media/${item.slug}`} className="cursor-pointer">
                      <Button variant="ghost" size="sm" className="gap-2 p-0">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
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

      <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-purple-400/20 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-medium">Live Customer Experience · Online now</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Need a hand?{' '}
                <span className="bg-gradient-to-r from-purple-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
                  We've got you.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-purple-100/90 max-w-xl mb-8 leading-relaxed">
                Pick the channel that works for you. Our team is on standby through WhatsApp, Telegram, phone, and email — fast replies, real humans, zero runaround.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/customer-experience" className="cursor-pointer">
                  <Button size="lg" className="gap-2 bg-white text-purple-900 hover:bg-purple-50 shadow-lg shadow-black/20">
                    <Headphones className="w-5 h-5" />
                    Contact Customer Experience
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href="tel:+233246033792"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 h-11 text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +233 (0) 246 033 792
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'WhatsApp',
                    handle: '+233 246 033 792',
                    href: 'https://wa.me/233246033792',
                    icon: MessageCircle,
                    accent: 'from-emerald-400 to-green-600',
                  },
                  {
                    name: 'Telegram',
                    handle: '@gsgbrandsgh',
                    href: 'https://t.me/gsgbrandsgh',
                    icon: Send,
                    accent: 'from-sky-400 to-blue-600',
                  },
                  {
                    name: 'Call Us',
                    handle: '+233 (0) 579 033 792',
                    href: 'tel:+233579033792',
                    icon: Phone,
                    accent: 'from-fuchsia-400 to-purple-600',
                  },
                  {
                    name: 'Email',
                    handle: 'info@gsgbrands.com.gh',
                    href: 'mailto:info@gsgbrands.com.gh',
                    icon: Mail,
                    accent: 'from-amber-400 to-orange-600',
                  },
                ].map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative cursor-pointer rounded-2xl p-5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/40"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${channel.accent} flex items-center justify-center shadow-lg`}>
                        <channel.icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-semibold text-white">{channel.name}</p>
                    <p className="text-xs sm:text-sm text-purple-200/80 truncate mt-0.5">{channel.handle}</p>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-xs sm:text-sm text-purple-200/70 text-center sm:text-left">
                Live calls 05:00am – 02:00pm (Mon–Fri) · See full support hours on the{' '}
                <Link href="/customer-experience" className="underline underline-offset-2 hover:text-white">
                  Customer Experience
                </Link>{' '}
                page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
