'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { DM_Serif_Display } from 'next/font/google';
import {
  MessageCircle,
  Send,
  Mail,
  Clock,
  Phone,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Users,
  Shield,
  MapPin,
  Utensils,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const display = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

const directContactMethods = [
  {
    title: 'WhatsApp',
    subtitle: 'Fastest lane',
    icon: MessageCircle,
    accent: '#059669',
    items: [
      { label: 'Main', value: '+233 246 033 792', link: 'https://wa.me/233246033792' },
      { label: 'Alt', value: '+233 579 033 792', link: 'https://wa.me/233579033792' },
    ],
  },
  {
    title: 'Telegram',
    subtitle: '@gsgbrandsgh',
    icon: Send,
    accent: '#0284c7',
    items: [{ label: 'Channel', value: '@gsgbrandsgh', link: 'https://t.me/gsgbrandsgh' }],
  },
  {
    title: 'Email',
    subtitle: 'Written requests',
    icon: Mail,
    accent: '#d97706',
    items: [{ label: 'Inbox', value: 'info@gsgbrands.com.gh', link: 'mailto:info@gsgbrands.com.gh' }],
  },
];

const websiteStripeClasses = [
  'from-violet-500 to-fuchsia-600',
  'from-fuchsia-500 to-rose-500',
  'from-sky-500 to-indigo-600',
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
] as const;

const websiteUnits = [
  { title: 'Convenience Goods & More', domain: 'goods.gsgbrands.com.gh', link: 'https://goods.gsgbrands.com.gh', icon: ShoppingBag },
  { title: 'Personal Shopper', domain: 'shopper.gsgbrands.com.gh', link: 'https://shopper.gsgbrands.com.gh', icon: Users },
  { title: 'Sell-Safe Buy-Safe', domain: 'sellbuysafe.gsgbrands.com.gh', link: 'https://sellbuysafe.gsgbrands.com.gh', icon: Shield },
  { title: 'Courier', domain: 'courier.gsgbrands.com.gh', link: 'https://courier.gsgbrands.com.gh', icon: MapPin },
  { title: 'StreetCuisine', domain: 'cuisine.gsgbrands.com.gh', link: 'https://cuisine.gsgbrands.com.gh', icon: Utensils },
];

const supportHours = [
  {
    title: 'Regular',
    phones: ['+233 (0) 246 033 792', '+233 (0) 579 033 792'],
    schedule: [
      { days: 'Mon – Fri', hours: '05:00 – 14:00' },
      { days: 'Sat & holidays', hours: '05:00 – 09:00' },
    ],
  },
  {
    title: 'Extended',
    phone: '+233 (0) 571 303 716',
    schedule: [
      { days: 'Mon – Fri', hours: '14:01 – 18:00' },
      { days: 'Sat & holidays', hours: '09:01 – 14:00' },
    ],
  },
];

export default function CustomerExperiencePage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ['-11%', '11%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Submitted (Demo)',
      description: 'Thank you — we will get back to you soon.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[#f3f1ed] text-neutral-900 antialiased">
      {/* Slim context bar — typographic, not a “marketing pill row” */}
      <div className="border-b border-neutral-900/10 bg-[#ebe7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3 text-[13px] text-neutral-700 min-w-0">
          <span className="font-medium tracking-tight min-w-0 leading-snug">Chat — WhatsApp & Telegram — active around the clock.</span>
          <span className="tabular-nums text-neutral-500 shrink-0">Accra · GH</span>
        </div>
      </div>

      {/* Hero — asymmetric, parallax, 30% black */}
      <section
        ref={heroRef}
        className="relative min-h-[min(88vh,820px)] flex flex-col justify-end md:justify-center overflow-hidden bg-[#0c0a0f]"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute left-0 right-0 w-full will-change-transform"
            style={{
              top: '-16%',
              height: '132%',
              y: prefersReducedMotion ? 0 : heroParallaxY,
            }}
          >
            <Image
              src="/images/customer-experience-agent.png"
              alt=""
              fill
              className="object-cover object-[center_22%]"
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>
          <div className="absolute inset-0 z-[1] bg-black/30" />
          <div
            aria-hidden
            className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0c0a0f] via-transparent to-transparent opacity-90 md:opacity-70"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-24 md:py-0 md:min-h-[min(88vh,820px)] md:flex md:items-center">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-neutral-300 mb-4 md:mb-5">
              Support · GSG Brands
            </p>
            <h1
              className={`${display.className} text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] text-white tracking-tight`}
            >
              Real people.
              <br />
              <span className="italic text-purple-200/95">Straight answers.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[17px] sm:text-lg text-neutral-200/90 leading-relaxed">
              Routing, courier, commerce, or escrow — whichever product you touch, one team stays within reach on
              chat, phone, and email.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#1a1025] font-semibold text-sm px-6 py-3.5 hover:bg-neutral-100 transition-colors"
              >
                Write the team
                <ArrowDownIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Channels — row-based, not three identical cards */}
      <section className="relative py-16 md:py-24 border-t border-neutral-900/10 bg-[#f3f1ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-900/80 mb-2">Reach us</p>
              <h2 className={`${display.className} text-3xl sm:text-4xl text-neutral-950`}>Pick a channel.</h2>
              <p className="mt-3 text-neutral-600 text-[17px] leading-relaxed">
                Same humans across WhatsApp, Telegram, and email — no ticket lottery, no faceless bots.
              </p>
            </div>
            <div className="hidden md:block text-right text-neutral-400 text-sm max-w-[12rem] leading-snug">
              Tap a row. Your OS opens the app we need.
            </div>
          </div>

          <div className="divide-y divide-neutral-900/[0.08] rounded-2xl border border-neutral-900/[0.08] bg-[#faf8f4] overflow-hidden shadow-sm">
            {directContactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col sm:flex-row sm:items-stretch"
              >
                <div
                  className="sm:w-44 shrink-0 flex items-center gap-4 px-5 py-5 sm:py-6 border-b sm:border-b-0 sm:border-r border-neutral-900/[0.06] bg-[#f0ebe3]/80"
                  style={{ borderLeftWidth: 4, borderLeftColor: method.accent }}
                >
                  <method.icon className="w-6 h-6 text-neutral-800" strokeWidth={1.75} />
                  <div>
                    <p className="font-bold text-neutral-900 tracking-tight">{method.title}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{method.subtitle}</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-wrap items-center gap-x-10 gap-y-4 px-5 py-5 sm:py-6">
                  {method.items.map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-semibold mb-1">
                        {item.label}
                      </p>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[15px] font-semibold text-neutral-900 hover:text-purple-800 inline-flex items-center gap-1 transition-colors group/link"
                      >
                        {item.value}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  ))}
                  <span className="hidden sm:flex ml-auto tabular-nums text-xs font-bold text-neutral-300 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem — light cards grid */}
      <section className="relative py-16 md:py-24 bg-white border-t border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-12 md:mb-16">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-700 mb-2">Websites</p>
              <h2 className={`${display.className} text-3xl sm:text-4xl text-neutral-950`}>Every product, one front door each.</h2>
            </div>
            <p className="lg:max-w-sm text-sm text-neutral-600 leading-relaxed">
              These domains are the live entry points into our stack — goods, logistics, marketplace, food, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteUnits.map((unit, index) => (
              <motion.a
                key={unit.title}
                href={unit.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 h-full rounded-3xl bg-[#faf8f4] border border-neutral-900/[0.06] hover:border-purple-900/10 hover:shadow-xl hover:shadow-purple-900/5 transition-all overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${websiteStripeClasses[index]} shadow-lg shadow-purple-900/20`}
                  >
                    <unit.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-700 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-lg mb-1 tracking-tight group-hover:text-purple-950 transition-colors pr-2 truncate sm:whitespace-normal">{unit.title}</p>
                  <p className="font-mono text-[13px] text-neutral-500 truncate">{unit.domain}</p>
                </div>
                <div aria-hidden className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-3xl" />
              </motion.a>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-neutral-500 font-medium">
            Looking for FAQs?{' '}
            <Link href="/ask-gsg-brands" className="text-purple-700 hover:text-purple-900 underline underline-offset-4">
              Ask GSG Brands
            </Link>
          </p>
        </div>
      </section>

      {/* Hours — compact “spec sheet” */}
      <section className="py-16 md:py-24 bg-[#e8e4dc] border-t border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${display.className} text-3xl sm:text-4xl text-neutral-950 mb-10`}>Phone windows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {supportHours.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-neutral-900/12 bg-[#f3f1ed] p-6 sm:p-8 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-baseline justify-between gap-4 mb-6">
                  <h3 className="text-xl font-bold text-neutral-900">{block.title}</h3>
                  <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
                </div>
                {(block.phones && block.phones.length > 0 ? block.phones : block.phone ? [block.phone] : []).map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\D/g, '')}`}
                    className="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-neutral-800 hover:text-purple-900 w-fit"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {p}
                  </a>
                ))}
                <div className="mt-4 space-y-0 border-t border-neutral-900/10">
                  {block.schedule.map((row) => (
                    <div
                      key={row.days}
                      className="flex justify-between gap-4 py-3 border-b border-neutral-900/[0.06] last:border-0 text-sm"
                    >
                      <span className="text-neutral-600">{row.days}</span>
                      <span className="font-mono tabular-nums text-neutral-900 font-medium">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form — minimal, high contrast */}
      <section id="contact" className="scroll-mt-24 py-16 md:py-28 bg-[#f3f1ed] border-t border-neutral-900/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-900/80 mb-2">Contact</p>
          <h2 className={`${display.className} text-3xl sm:text-4xl text-neutral-950 mb-3`}>Send a note.</h2>
          <p className="text-neutral-600 mb-10 text-[17px] leading-relaxed">
            Tell us which service you mean and what you need — we route it internally so you don’t get bounced between
            inboxes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Name</label>
                <Input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-none border-neutral-900/15 bg-[#faf8f5] focus-visible:ring-purple-900/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Email</label>
                <Input
                  type="email"
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-none border-neutral-900/15 bg-[#faf8f5] focus-visible:ring-purple-900/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Phone</label>
              <Input
                type="tel"
                placeholder="+233 …"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12 rounded-none border-neutral-900/15 bg-[#faf8f5] focus-visible:ring-purple-900/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Message</label>
              <Textarea
                placeholder="What happened, which product, and what outcome you need."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="rounded-none border-neutral-900/15 bg-[#faf8f5] focus-visible:ring-purple-900/40 resize-y min-h-[140px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
              <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                Demo form — connects to toast only. Swap in your CRM or email API when ready.
              </p>
              <Button
                type="submit"
                className="w-full sm:w-auto justify-center h-12 rounded-none px-8 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold gap-2 sm:min-w-[180px]"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
