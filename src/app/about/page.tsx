'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Heart, Rocket, Shield, ShoppingBag, Target, Truck, Users, Utensils } from 'lucide-react';

const teamMembers = [
  { name: 'Derick', image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=400&auto=format&fit=crop' },
  { name: 'Reynold', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop' },
  { name: 'Berlinda', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'TurkArthur', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { name: 'Kennet', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=400&auto=format&fit=crop' },
];

const storyCards = [
  {
    title: 'Why we exist',
    icon: Target,
    copy: 'Everyday errands in Ghana can take too much time, cost more than expected, or feel risky when trust is unclear. GSG Brands was created to make those daily transactions easier, safer, and more valuable.',
  },
  {
    title: 'What we are building',
    icon: Rocket,
    copy: 'We are building one connected service ecosystem: essentials shopping, personal shopping, secure marketplace transactions, food discovery, courier delivery, customer support, and partner opportunities.',
  },
  {
    title: 'How we serve',
    icon: Heart,
    copy: 'Our work is guided by practical convenience, fair value, responsive support, and transaction confidence. We want customers, vendors, riders, and partners to feel protected and respected.',
  },
];

const ecosystem = [
  { title: 'Convenience Goods & More', description: 'Everyday essentials, groceries, household items, and personal care delivered with speed and value.', icon: ShoppingBag },
  { title: 'Personal Shopper', description: 'Human shopping assistance from traditional and non-traditional markets, from the smallest item to larger sourcing needs.', icon: Users },
  { title: 'Sell-Safe Buy-Safe', description: 'A safer transaction process for buyers and sellers across marketplaces, social media, websites, and physical channels.', icon: Shield },
  { title: 'StreetCuisine', description: 'Authentic local food experiences from verified vendors with improved hygiene, quality, and delivery standards.', icon: Utensils },
  { title: 'Courier', description: 'Reliable pickup, dispatch, and delivery support for documents, packages, errands, and business logistics.', icon: Truck },
  { title: 'GSG-AID', description: 'Community support and empowerment programs designed to create practical, sustainable impact across Ghana.', icon: Heart },
];

const principles = [
  'Save customers time without compromising quality.',
  'Protect both buyers and sellers through clearer processes.',
  'Create economic opportunities for local vendors, riders, partners, and affiliates.',
  'Build services that feel human, reachable, and accountable.',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/team-leadership-ghana.png" className="w-full h-full object-cover" alt="GSG Brands Leadership Team" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              About <span className="text-purple-400">GSG Brands</span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              GSG Brands is a Ghanaian service ecosystem built around one simple promise: make everyday needs easier to access, safer to transact, and better value for customers, vendors, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24"
          >
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-5 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Our Story
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                Built to solve everyday friction.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                GSG Brands started from a practical observation: people need reliable ways to shop, send items, buy and sell safely, access good local food, and get support without wasting time moving from place to place.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Instead of treating each need as a separate problem, we are connecting them under one brand so customers can move through daily life with more confidence, less stress, and better value.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10">
                <img
                  src="/images/team-leadership-ghana.png"
                  alt="GSG Brands team"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm uppercase tracking-widest text-white/60 font-bold mb-2">What drives us</p>
                  <p className="text-2xl font-bold max-w-xl">
                    Building trusted services that connect commerce, logistics, support, and community impact across Ghana.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {storyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100/60 hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-700">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {card.copy}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">The ecosystem we are building</h2>
              <p className="text-lg text-gray-600">
                GSG Brands is not one service. It is a connected group of solutions designed around real customer needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ecosystem.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-3xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-24"
          >
            <div className="rounded-3xl bg-[#0A0514] text-white p-8 sm:p-10 overflow-hidden relative">
              <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl" />
              <div className="relative">
                <p className="text-sm uppercase tracking-widest text-purple-300 font-bold mb-4">Our principles</p>
                <h2 className="text-3xl font-bold mb-6">What customers should feel when they use GSG Brands</h2>
                <div className="space-y-4">
                  {principles.map((principle) => (
                    <div key={principle} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
                      <p className="text-white/75 leading-relaxed">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-purple-700 font-bold mb-4">Our direction</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">From everyday errands to national infrastructure.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are growing GSG Brands into a trusted operating layer for commerce, convenience, logistics, customer experience, and community support in Ghana. The long-term goal is simple: build services people can rely on every day.
              </p>
              <Link href="/gsg-brands">
                <Button className="gap-2 bg-purple-700 hover:bg-purple-800 text-white">
                  Explore GSG Brands
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advisory & Executive Team</h2>
              <p className="text-lg text-gray-600">The minds driving GSG Brands forward</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                    <div className="relative h-80 overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
