'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import GsgLogo from './GsgLogo';

const footerLinks = [
  { name: 'For Help Contact Us', href: '/customer-experience' },
  { name: 'Visit/Follow Us Here', href: '#social' },
  { name: 'Cookies', href: '/cookies' },
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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GsgLogo className="mb-4" />
            <p className="text-purple-200 text-sm mb-4">Time & Money Saver For Value</p>
            <p className="text-purple-300 text-sm">@gsgbrandsgh</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-purple-200 hover:text-white transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-purple-200 hover:text-white transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+233246033792" className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                +233 (0) 246 033 792
              </a>
              <a href="tel:+233579033792" className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                +233 (0) 579 033 792
              </a>
              <div className="flex gap-3 mt-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-purple-700 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            © {new Date().getFullYear()} GSG Brands. All rights reserved. |{' '}
            <a
              href="https://doctorbarns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-white transition-colors cursor-pointer"
            >
              Powered By Doctor Barns Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
