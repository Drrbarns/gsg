'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { DM_Serif_Display } from 'next/font/google';
import { ArrowRight, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

const display = DM_Serif_Display({ subsets: ['latin'], weight: ['400'] });

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  category: string;
  title: string;
  intro: ReactNode;
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  category,
  title,
  intro,
  effectiveDate,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f3f1ed] text-neutral-900 antialiased">
      <div className="border-b border-neutral-900/10 bg-[#ebe7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px] text-neutral-700">
          <span className="font-medium tracking-tight">{category} · GSG Brands</span>
          <span className="tabular-nums text-neutral-500">Effective {effectiveDate}</span>
        </div>
      </div>

      <section className="py-16 md:py-24 border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-purple-700 mb-4">
              {category}
            </p>
            <h1
              className={`${display.className} text-4xl sm:text-5xl md:text-6xl text-neutral-950 leading-[1.05] tracking-tight mb-6`}
            >
              {title}
            </h1>
            <div className="text-lg sm:text-xl text-neutral-600 leading-relaxed">{intro}</div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-neutral-500 mb-4">
                  On this page
                </p>
                <nav className="border-l border-neutral-900/10">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 -ml-px border-l border-transparent hover:border-purple-700 hover:bg-white/60 transition-all py-2.5 pl-4 pr-2 text-sm text-neutral-700 hover:text-neutral-950"
                    >
                      <span className="text-[10px] font-bold tracking-widest text-neutral-400 group-hover:text-purple-700 tabular-nums mt-1 shrink-0">
                        {section.number}
                      </span>
                      <span className="font-medium leading-snug">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="lg:col-span-8 space-y-14 md:space-y-16">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span
                      className={`${display.className} text-3xl text-purple-300 tabular-nums leading-none shrink-0`}
                    >
                      {section.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-neutral max-w-none prose-p:text-[15px] sm:prose-p:text-base prose-p:leading-relaxed prose-p:text-neutral-700 prose-strong:text-neutral-950 prose-ul:my-4 prose-li:my-1.5 prose-li:text-neutral-700 prose-a:text-purple-700 prose-a:underline-offset-2 hover:prose-a:text-purple-900 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-neutral-900 prose-h3:mt-6 prose-h3:mb-3 prose-headings:tracking-tight">
                    {section.content}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900/10 bg-[#ebe7df] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className={`${display.className} text-2xl text-neutral-950 mb-2`}>
              Still need help?
            </h3>
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              Our Customer Experience team is happy to clarify anything in this document.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/customer-experience"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 text-white text-sm font-semibold px-5 py-3.5 hover:bg-neutral-800 transition-colors"
            >
              Contact Customer Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@gsgbrands.com.gh"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-900/15 bg-white text-neutral-900 text-sm font-semibold px-5 py-3.5 hover:bg-neutral-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
