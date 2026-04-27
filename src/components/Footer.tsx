'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Globe } from 'lucide-react';
import GsgLogo from './GsgLogo';

const quickLinks = [
  { name: 'For Help Contact Us', href: '/customer-experience' },
  { name: 'Visit/Follow Us Here', href: '#social' },
  { name: 'Cookies', href: '/cookies' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'General Terms', href: '/terms' },
];

const socialIcons = [
  { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbBYwi3D', icon: 'ri-whatsapp-fill' },
  { name: 'Telegram', url: 'https://t.me/gsgbrandsgh', icon: 'ri-telegram-fill' },
  { name: 'Twitter', url: 'https://x.com/gsgbrandsgh', icon: 'ri-twitter-x-line' },
  { name: 'Instagram', url: 'https://ig.me/m/gsgbrandsgh', icon: 'ri-instagram-fill' },
  { name: 'Facebook', url: 'https://www.facebook.com/gsgbrandsgh', icon: 'ri-facebook-circle-fill' },
];

function NavColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: { name: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-white font-semibold tracking-wide mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="group flex items-center text-sm text-white/60 hover:text-purple-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-purple-400" />
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0A0514]">
      {/* Dynamic Background Effects */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <GsgLogo light className="mb-6" />
            <p className="text-white/60 text-sm leading-loose mb-8 max-w-sm">
              Building a comprehensive ecosystem of services that save time and money while delivering exceptional value to our customers across Ghana.
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                <i className="ri-instagram-line text-white text-lg" aria-hidden />
              </div>
              <span className="font-medium tracking-wide">@gsgbrandsgh</span>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-3 lg:col-start-6">
            <NavColumn title="Explore" links={quickLinks} delay={0.1} />
          </div>
          <div className="lg:col-span-2">
            <NavColumn title="Legal" links={legalLinks} delay={0.2} />
          </div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-semibold tracking-wide mb-6">Get in Touch</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="mailto:info@gsgbrands.com.gh"
                  className="group flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="mt-1.5">info@gsgbrands.com.gh</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233246033792"
                  className="group flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <span>+233 (0) 246 033 792</span>
                    <span className="text-white/40 text-xs mt-1">+233 (0) 579 033 792</span>
                  </div>
                </a>
              </li>
            </ul>

            <div id="social" className="scroll-mt-32">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-purple-600 hover:text-white hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} GSG Brands. All rights reserved.</p>
          <a
            href="https://doctorbarns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>Powered by Doctor Barns Tech</span>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Globe className="w-3 h-3" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}