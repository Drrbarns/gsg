'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';
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
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-white text-sm font-semibold tracking-wide mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-white/60 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0A0514]">
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
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 pb-8 border-b border-white/10"
        >
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <GsgLogo light height={72} className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
              Building a comprehensive ecosystem of services that save time and money for our customers across Ghana.
            </p>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 border border-white/10 pl-1 pr-3.5 py-1 text-sm text-white/80 cursor-default">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                <i className="ri-instagram-line text-white text-base" aria-hidden />
              </div>
              <span className="font-medium tracking-wide">@gsgbrandsgh</span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <NavColumn title="Explore" links={quickLinks} />
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <NavColumn title="Legal" links={legalLinks} />
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">Get in Touch</h3>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a
                  href="mailto:info@gsgbrands.com.gh"
                  className="group flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400/80 shrink-0" />
                  <span>info@gsgbrands.com.gh</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233246033792"
                  className="group flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400/80 shrink-0" />
                  <span>+233 (0) 246 033 792</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233579033792"
                  className="group flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors pl-6"
                >
                  <span>+233 (0) 579 033 792</span>
                </a>
              </li>
            </ul>

            <div id="social" className="scroll-mt-32">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-2">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
                  >
                    <i className={`${social.icon} text-base`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} GSG Brands. All rights reserved.</p>
          <a
            href="https://doctorbarns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>Powered by Doctor Barns Tech</span>
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Globe className="w-2.5 h-2.5" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}