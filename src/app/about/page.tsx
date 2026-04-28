'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { DM_Serif_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Heart, Rocket, Shield, ShoppingBag, Target, Truck, Users, Utensils } from 'lucide-react';

const displaySerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
});

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
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ['-12%', '12%']);

  return (
    <main className="min-h-screen bg-[#faf9fc] text-gray-900">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[min(92vh,900px)] flex items-end md:items-center overflow-hidden bg-[#07040f]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute left-0 right-0 w-full will-change-transform"
            style={{
              top: '-18%',
              height: '135%',
              y: prefersReducedMotion ? 0 : heroBgY,
            }}
          >
            <Image
              src="/images/team-leadership-ghana.png"
              alt="GSG Brands leadership team"
              fill
              className="object-cover object-[center_25%]"
              priority
              sizes="100vw"
              quality={88}
            />
          </motion.div>
          <div className="absolute inset-0 z-[1] bg-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 md:py-28">
          <div className="max-w-4xl md:max-w-[42rem]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-purple-200/95 mb-5"
            >
              Ghana · Connected services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
            >
              <h1
                className={`${displaySerif.className} text-[2.85rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-white mb-8 tracking-tight`}
              >
                About{' '}
                <span className="italic text-purple-200/95">GSG Brands</span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-stretch gap-6 sm:gap-10">
                <div aria-hidden className="hidden sm:block w-px shrink-0 bg-gradient-to-b from-purple-400/90 via-purple-300/40 to-transparent" />
                <p className="text-lg sm:text-xl text-neutral-100/90 leading-relaxed max-w-2xl border-l-2 border-purple-400/50 sm:border-l-0 sm:pl-0 pl-4 sm:pl-0">
                  A Ghanaian service ecosystem built on one promise: make everyday needs easier to access, safer to
                  transact, and better value for customers, vendors, and communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our story — editorial split */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(124,58,237,0.06)_0%,transparent_45%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.07)_1px,transparent_0)] bg-[length:32px_32px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start mb-20 md:mb-28">
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700 mb-3">Our story</p>
              <h2 className={`${displaySerif.className} text-4xl sm:text-[2.65rem] leading-tight text-gray-950 mb-6`}>
                Built to solve everyday friction — not chase trends.
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4 text-[17px]">
                People need dependable ways to shop, send parcels, trade safely, find good street food, and get help —
                without losing hours bouncing between unreliable options.
              </p>
              <p className="text-neutral-600 leading-relaxed text-[17px]">
                Rather than scattering those needs across random brands, we connect them under one name so ordinary days
                run smoother.
              </p>
            </div>

            <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gradient-to-br from-purple-200/40 via-fuchsia-100/30 to-transparent blur-2xl"
                />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <div className="relative aspect-[21/13] md:aspect-[16/10]">
                    <Image
                      src="/images/team-leadership-ghana.png"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/75 via-purple-950/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 md:p-10">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/65 font-bold mb-2">
                        What drives us
                      </p>
                      <p className={`${displaySerif.className} text-white text-xl sm:text-2xl md:text-3xl max-w-xl leading-snug`}>
                        Trusted commerce, logistics, support, and community — woven together across Ghana.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three pillars — horizontal rule + numbered editorial blocks */}
          <div className="relative border-y border-gray-200/80 bg-white/60 backdrop-blur-sm">
            <div className="divide-y divide-gray-100">
              {storyCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 px-1 md:px-4"
                >
                  <div className="md:col-span-3 flex md:block items-center gap-4">
                    <span
                      className={`${displaySerif.className} text-5xl md:text-6xl text-purple-200 select-none leading-none`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-900/20 md:mt-4">
                      <card.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight mb-3">{card.title}</h3>
                    <p className="text-neutral-600 leading-relaxed max-w-3xl text-[17px]">{card.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative py-20 md:py-28 bg-[#0a0a0c] text-white overflow-hidden border-t border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-3">One brand, many front doors</p>
            <h2 className={`${displaySerif.className} text-3xl sm:text-4xl md:text-[2.65rem] leading-tight mb-5`}>
              The ecosystem we are building
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Six connected lines of business — each designed around a real bottleneck in Ghanaian daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {ecosystem.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 hover:bg-[#1a1a1c] hover:border-white/[0.15] transition-all duration-500"
              >
                <div>
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white mb-8 border border-white/5 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500"
                  >
                    <item.icon className="h-6 w-6 text-neutral-200" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[15px] sm:text-base text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles + CTA strip */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden bg-[#0c0618] text-white p-9 sm:p-11 border border-white/10"
            >
              <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl" />
              <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1.5px)] bg-[length:28px_28px]" />

              <div className="relative">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-300/95 mb-4">Our principles</p>
                <h2 className={`${displaySerif.className} text-2xl sm:text-3xl leading-snug mb-8`}>What using GSG should feel like</h2>
                <ul className="space-y-5">
                  {principles.map((principle) => (
                    <li key={principle} className="flex gap-3.5 items-start">
                      <CheckCircle className="w-5 h-5 text-fuchsia-300/95 shrink-0 mt-1" strokeWidth={2} />
                      <span className="text-[15px] sm:text-base text-neutral-200/90 leading-relaxed">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative rounded-[2rem] border border-gray-200 bg-white p-9 sm:p-11 shadow-xl shadow-purple-900/5 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-bl-[100%] bg-gradient-to-bl from-purple-50 to-transparent"
              />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700 mb-4">Our direction</p>
              <h2 className={`${displaySerif.className} text-2xl sm:text-3xl text-gray-950 leading-snug mb-5`}>
                From everyday errands to national-scale reliability.
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 flex-1 text-[17px]">
                We are growing GSG Brands into a trusted operating layer for commerce, convenience, logistics, customer
                experience, and community support in Ghana — services people can lean on every day.
              </p>
              <Link href="/gsg-brands" className="inline-flex w-fit">
                <Button size="lg" className="gap-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white px-8 h-12">
                  Explore GSG Brands
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 md:pb-32 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700 mb-2">People</p>
              <h2 className={`${displaySerif.className} text-3xl sm:text-4xl text-gray-950`}>Advisory & executive team</h2>
            </div>
            <p className="text-neutral-500 max-w-md md:text-right text-[15px] leading-relaxed">
              Leadership focused on execution, trust, and long-term value for customers and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 ring-1 ring-black/5 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">Team</p>
                    <p className={`${displaySerif.className} text-2xl text-white`}>{member.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
