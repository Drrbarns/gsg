'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Users, Shield, Clock, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const businessUnits = [
  {
    title: 'Convenience Goods',
    description: 'Shop everyday essentials with ease and convenience',
    icon: ShoppingBag,
    url: 'https://goods.gsgbrands.com.gh',
    active: true,
  },
  {
    title: 'My Personal Shopper',
    description: 'Your dedicated shopping assistant for personalized service',
    icon: Users,
    url: 'https://shopper.gsgbrands.com.gh',
    active: true,
  },
  {
    title: 'Sell-Safe Buy-Safe Marketplace',
    description: 'Secure platform for buying and selling with confidence',
    icon: Shield,
    url: 'https://sellbuysafe.gsg-brands.com',
    active: true,
  },
  {
    title: 'StreetCuisine By GSG',
    description: 'Authentic local cuisine delivered to your doorstep',
    icon: ShoppingBag,
    url: '#',
    active: false,
  },
  {
    title: 'Courier & Delivery By GSG',
    description: 'Fast and reliable delivery services across Ghana',
    icon: MapPin,
    url: '#',
    active: false,
  },
  {
    title: 'Affiliates',
    description: 'Join our partner network and grow together',
    icon: TrendingUp,
    url: '#',
    active: false,
    comingSoon: true,
  },
];

const features = [
  {
    title: 'Trust & Security',
    description: 'Verified services and secure transactions for peace of mind',
    icon: Shield,
  },
  {
    title: 'Speed & Efficiency',
    description: 'Quick delivery and responsive service when you need it',
    icon: Clock,
  },
  {
    title: 'Value for Money',
    description: 'Competitive pricing and quality products that save you money',
    icon: TrendingUp,
  },
  {
    title: 'Customer Care',
    description: '24/7 support through WhatsApp, Telegram, and phone',
    icon: Users,
  },
];

const newsItems = [
  {
    title: 'GSG Brands Expands Service Coverage',
    category: 'Announcements',
    date: '2024-01-15',
    excerpt: 'We are excited to announce expanded coverage across more regions in Ghana.',
  },
  {
    title: 'New Partnership with Local Vendors',
    category: 'Updates',
    date: '2024-01-10',
    excerpt: 'Strengthening our marketplace with trusted local businesses.',
  },
  {
    title: 'Customer Satisfaction Reaches 98%',
    category: 'Press',
    date: '2024-01-05',
    excerpt: 'Our commitment to excellence continues to deliver results.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://readdy.ai/api/search-image?query=modern%20african%20marketplace%20vibrant%20shopping%20scene%20with%20diverse%20people%20colorful%20products%20fresh%20goods%20urban%20ghana%20setting%20professional%20commercial%20photography%20warm%20natural%20lighting%20contemporary%20retail%20environment%20bustling%20activity%20community%20commerce%20lifestyle&width=1920&height=1080&seq=gsg-hero-bg-001&orientation=landscape"
            alt="GSG Brands Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Time & Money Saver For Value
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for Everyday Needs
            </h1>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              GSG Brands brings together convenience goods, personal shopping, secure marketplace, cuisine delivery, and courier services—all designed to save you time and money while delivering exceptional value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/gsg-brands" className="cursor-pointer">
                <Button size="lg" className="gap-2">
                  Explore GSG Brands
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/customer-experience" className="cursor-pointer">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
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
                      {unit.comingSoon && (
                        <Badge variant="secondary" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {unit.active ? (
                      <a href={unit.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{item.category}</Badge>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-xs">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                    <Link href="/news-media" className="cursor-pointer">
                      <Button variant="ghost" size="sm" className="gap-2">
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

      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-purple-200 mb-10">
              Our customer experience team is available 24/7 through WhatsApp, Telegram, and phone to assist you with any questions or concerns.
            </p>
            <Link href="/customer-experience" className="cursor-pointer">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Contact Customer Experience
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
