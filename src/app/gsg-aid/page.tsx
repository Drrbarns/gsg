'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, HandHeart, ArrowRight, Quote, Sparkles, MessageCircle, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aidFocusAreas } from '@/lib/data';

const impactStats = [
  { value: '5,000+', label: 'Lives Touched', sublabel: 'across rural and urban Ghana' },
  { value: '12', label: 'Active Programs', sublabel: 'in education, health & livelihoods' },
  { value: '40+', label: 'Partner Communities', sublabel: 'and growing every quarter' },
  { value: '100%', label: 'Transparency', sublabel: 'on every cedi raised and spent' },
];

const involvementOptions = [
  {
    title: 'Volunteer your time',
    description: 'Lend a few hours a month to mentorship, distribution, or community outreach.',
    icon: HandHeart,
  },
  {
    title: 'Become a partner',
    description: 'Co-design programs with us as a corporate, NGO, or institutional partner.',
    icon: Sparkles,
  },
  {
    title: 'Contribute resources',
    description: 'Donate goods, services, or funding to fuel sustainable, measurable change.',
    icon: Heart,
  },
];

export default function GsgAidPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/gsg-aid-community.png"
            alt="GSG-AID"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mb-6 text-purple-300 border border-purple-400/30">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering <span className="text-purple-300">Communities</span>
            </h1>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              GSG-AID is dedicated to making a difference across Ghana through sustainable support, empowerment programs, and strategic partnerships that create lasting positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/customer-experience">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 border-none h-14 px-8 text-lg font-bold gap-2">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS STRIP */}
      <section className="relative -mt-12 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-gray-100 shadow-2xl shadow-purple-900/10 overflow-hidden"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="p-6 sm:p-8 text-center group hover:bg-purple-50/50 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-br from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-gray-900 uppercase tracking-wider">{stat.label}</div>
                  <div className="mt-1 text-xs text-gray-500 leading-relaxed max-w-[20ch] mx-auto">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-purple-100/60 via-fuchsia-50 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-6 tracking-wider uppercase">
              <Sparkles className="w-3 h-3" />
              Our Mission
            </div>

            <div className="relative">
              <Quote
                aria-hidden
                className="absolute -top-6 -left-2 sm:-top-8 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 text-purple-100 -scale-x-100"
                strokeWidth={1.5}
              />
              <p className="relative text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug font-medium tracking-tight">
                To empower underserved communities through sustainable development initiatives, focusing on
                <span className="bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent"> education, healthcare, and economic self-reliance</span>,
                ensuring that every individual has the opportunity to thrive.
              </p>
              <Quote
                aria-hidden
                className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 text-purple-100"
                strokeWidth={1.5}
              />
            </div>

            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">GSG-AID Foundation</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50/40 to-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

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
              Focus Areas
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 bg-clip-text text-transparent leading-tight">
              Where we direct our efforts
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Four pillars guiding every initiative—designed for measurable, lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aidFocusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative h-full"
              >
                <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple-400/0 via-fuchsia-400/0 to-purple-600/0 group-hover:from-purple-400/40 group-hover:via-fuchsia-400/40 group-hover:to-purple-600/40 transition-all duration-500 blur-sm" />

                <div className="relative h-full p-7 rounded-3xl bg-white border border-gray-100 hover:border-transparent group-hover:shadow-2xl group-hover:shadow-purple-200/40 transition-all duration-500 hover:-translate-y-1 flex flex-col overflow-hidden">
                  <div aria-hidden className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className="relative">
                      <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 group-hover:from-purple-600 group-hover:to-fuchsia-600 group-hover:text-white transition-all duration-500">
                        <area.icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{`0${index + 1}`}</span>
                  </div>

                  <h3 className="relative text-lg font-bold text-gray-900 mb-2 tracking-tight">{area.title}</h3>
                  <p className="relative text-sm text-gray-500 leading-relaxed flex-1">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 shadow-xl shadow-purple-900/20"
          >
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative px-6 py-10 sm:px-10 sm:py-12 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase mb-3">
                    <HandHeart className="w-3 h-3" />
                    Get Involved
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                    Build the change with us.
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed">
                    Time, expertise, or resources—every contribution helps us reach further.
                  </p>
                </div>

                <Link href="/customer-experience" className="shrink-0">
                  <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 h-11 px-5 font-semibold gap-2 rounded-full text-sm">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {involvementOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-purple-700 transition-colors shrink-0">
                        <option.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold tracking-tight">{option.title}</h3>
                    </div>
                    <p className="text-xs text-purple-100/80 leading-relaxed">{option.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-white/10 text-xs">
                <span className="text-purple-200/90 font-medium">Reach our team directly:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://wa.me/233246033792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-white/10 border border-white/15 font-semibold hover:bg-white/15 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/gsgbrandsgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-white/10 border border-white/15 font-semibold hover:bg-white/15 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Telegram
                  </a>
                  <a
                    href="mailto:info@gsgbrands.com.gh"
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-white/10 border border-white/15 font-semibold hover:bg-white/15 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}