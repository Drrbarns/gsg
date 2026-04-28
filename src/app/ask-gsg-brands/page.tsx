'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { DM_Serif_Display } from 'next/font/google';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Send,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { askFaqs } from '@/lib/askFaqs';

const display = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

const faqs = askFaqs;

export default function AskGsgBrandsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  });

  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ['-11%', '11%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Submitted (demo)',
      description: 'Swap this toast for email or ticketing when wired up.',
    });
    setFormData({ name: '', phone: '', question: '' });
  };

  return (
    <main className="min-h-screen bg-[#f3f1ed] text-neutral-900 antialiased">
      <div className="border-b border-neutral-900/10 bg-[#ebe7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3 text-[13px] text-neutral-700 min-w-0">
          <span className="font-medium tracking-tight leading-snug min-w-0">Public answers below — anything sensitive, use the secured form.</span>
          <span className="text-neutral-500 shrink-0">Updated for 2026</span>
        </div>
      </div>

      <section
        ref={heroRef}
        className="relative min-h-[min(78vh,720px)] flex flex-col justify-end md:justify-center bg-[#0a0810] text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute left-0 right-0 w-full will-change-transform"
            style={{
              top: '-16%',
              height: '132%',
              y: prefersReducedMotion ? 0 : heroParallax,
            }}
          >
            <Image
              src="/images/customer-experience-agent.png"
              alt=""
              fill
              className="object-cover object-[center_25%]"
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>
          <div className="absolute inset-0 z-[1] bg-black/30" />
          <div
            aria-hidden
            className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0a0810]/95 via-transparent to-black/40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-28 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-purple-200/95 mb-4">
                Help Desk · GSG Brands
              </p>
              <h1 className={`${display.className} text-[2.65rem] sm:text-5xl md:text-[3.35rem] leading-[1.05] mb-6`}>
                Read the common answers first.
                <br />
                <span className="italic text-purple-200/95">Then ask yours.</span>
              </h1>
              <p className="text-lg text-neutral-200/95 max-w-xl leading-relaxed">
                FAQs cover most day-to-day questions. If yours is nuanced — routing, escrow, hygiene, payouts — drop it in
                the form and we will route internally.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#faq"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/[0.08] px-5 py-3 text-sm font-semibold backdrop-blur-sm hover:bg-white/15 transition-colors"
                >
                  Browse FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#ask"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#140a1f] hover:bg-neutral-100"
                >
                  Skip to form
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end w-full">
              <div className="rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 space-y-4 max-w-md lg:max-w-none">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-white/85">
                    For account-specific issues tied to{' '}
                    <Link href="/customer-experience" className="underline decoration-white/35 hover:decoration-white">
                      Customer Experience
                    </Link>
                    {' — or parcels —'}
                    <Link href="/tracking" className="underline decoration-white/35 hover:decoration-white ml-1">
                      Tracking
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://wa.me/233246033792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/20 px-3 py-2 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/30 hover:bg-emerald-500/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/gsgbrandsgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/15 px-3 py-2 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/25 hover:bg-sky-500/25"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs — dark “reader” band */}
      <section id="faq" className="scroll-mt-20 relative bg-[#121014] text-white py-16 md:py-24 border-t border-white/10">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/35 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-purple-300/95 mb-2">FAQ</p>
              <h2 className={`${display.className} text-3xl sm:text-4xl md:text-[2.65rem]`}>What people ask first.</h2>
            </div>
            <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
              Straight answers — if something contradicts what you heard on WhatsApp, the written FAQ wins until we revise
              it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-0 border-t border-white/[0.08]">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`border-b border-white/[0.08] py-8 ${index % 2 === 0 ? 'lg:border-r lg:border-white/[0.08] lg:pr-10' : 'lg:pl-10'}`}
              >
                <div className="flex gap-4 sm:gap-5 min-w-0">
                  <span
                    className={`${display.className} text-2xl sm:text-3xl text-white/[0.12] tabular-nums leading-none shrink-0 w-10 sm:w-14`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white tracking-tight text-[15px] sm:text-[17px] mb-3 leading-snug break-words">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed break-words">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form — anchored, earthy, not a floating card cliché */}
      <section id="ask" className="scroll-mt-24 py-16 md:py-28 border-t border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-900/80 mb-2">Still stuck?</p>
              <h2 className={`${display.className} text-3xl sm:text-4xl text-neutral-950 mb-5`}>Send the question.</h2>
              <p className="text-neutral-600 text-[17px] leading-relaxed mb-8">
                One short form — name, phone, and what you need. We read every message; heavy volume can add a day or two
                on email.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex gap-2">
                  <span className="text-purple-700">—</span>
                  No third-party widget — this is native to our stack (demo submits to toast only).
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-700">—</span>
                  For courier IDs or order lookups, cite them in your message.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 border border-neutral-900/15 bg-[#faf8f4] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]">
              <div className="border-b border-neutral-900/10 bg-[#151018] px-4 sm:px-6 py-5 text-white flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <span className="text-sm font-semibold tracking-wide">Question form</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">Ghana</span>
              </div>
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Name</label>
                    <Input
                      type="text"
                      placeholder="How we address you"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-11 rounded-none border-neutral-900/15 bg-white focus-visible:ring-purple-900/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+233 …"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-11 rounded-none border-neutral-900/15 bg-white focus-visible:ring-purple-900/30"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">Your question</label>
                  <Textarea
                    placeholder="Include product, timeframe, town, and reference numbers when relevant."
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                    rows={7}
                    className="rounded-none border-neutral-900/15 bg-white focus-visible:ring-purple-900/30 text-[15px] leading-relaxed min-h-[180px]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-neutral-500 max-w-[16rem]">Demo UI — connects to toast. Wire backend when ready.</p>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto rounded-none px-10 h-12 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold shrink-0 justify-center"
                  >
                    Submit question
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
