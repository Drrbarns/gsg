'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
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
  { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbBYwi3D', icon: 'ri-whatsapp-line' },
  { name: 'Telegram', url: 'https://t.me/gsgbrandsgh', icon: 'ri-telegram-line' },
  { name: 'Twitter', url: 'https://x.com/gsgbrandsgh', icon: 'ri-twitter-x-line' },
  { name: 'Instagram', url: 'https://ig.me/m/gsgbrandsgh', icon: 'ri-instagram-line' },
  { name: 'Facebook', url: 'https://www.facebook.com/gsgbrandsgh', icon: 'ri-facebook-line' },
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-white/75 hover:text-white transition-colors inline-block border-b border-transparent hover:border-white/30 pb-0.5"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative text-white border-t border-white/[0.08]">
      <div className="absolute inset-0 bg-[#07040f]" aria-hidden />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(88, 28, 135, 0.2), transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 pb-12 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-sm"
          >
            <GsgLogo className="mb-5" />
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              Time & Money Saver For Value — convenience, trust, and support across Ghana.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-3 py-1.5 text-sm text-white/70">
              <i className="ri-instagram-line text-base text-fuchsia-300/90" aria-hidden />
              <span>@gsgbrandsgh</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14 lg:gap-16 flex-1 lg:max-w-2xl lg:justify-items-end">
            <NavColumn title="Explore" links={quickLinks} delay={0.08} />
            <NavColumn title="Legal" links={legalLinks} delay={0.12} />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="col-span-2 sm:col-span-1"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-4">Call us</p>
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="tel:+233246033792"
                    className="group flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-violet-300/80 group-hover:text-violet-200" />
                    <span>+233 (0) 246 033 792</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+233579033792"
                    className="group flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-violet-300/80 group-hover:text-violet-200" />
                    <span>+233 (0) 579 033 792</span>
                  </a>
                </li>
              </ul>
              <p id="social" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-3 scroll-mt-24">
                Follow
              </p>
              <div className="flex flex-wrap gap-2">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/85 hover:bg-white/[0.12] hover:border-white/20 hover:text-white transition-all"
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} GSG Brands. All rights reserved.</p>
          <a
            href="https://doctorbarns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 hover:text-white/90 transition-colors sm:text-right"
          >
            Powered by Doctor Barns Tech
          </a>
        </div>
      </div>
    </footer>
  );
}
