'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ExternalLink, Menu } from 'lucide-react';
import GsgLogo from './GsgLogo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'GSG Brands', href: '/gsg-brands' },
  { name: 'Customer Experience', href: '/customer-experience' },
  { name: 'Ask GSG Brands', href: '/ask-gsg-brands' },
  { name: 'News & Media', href: '/news-media' },
  { name: 'Tracking', href: '/tracking' },
  { name: 'GSG-AID', href: '/gsg-aid' },
];

const socialLinks = [
  { name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbBYwi3D', icon: MessageCircle },
  { name: 'Telegram', url: 'https://t.me/gsgbrandsgh', icon: MessageCircle },
  { name: 'X (Twitter)', url: 'https://x.com/gsgbrandsgh', icon: ExternalLink },
  { name: 'Instagram', url: 'https://ig.me/m/gsgbrandsgh', icon: ExternalLink },
  { name: 'Facebook', url: 'https://www.facebook.com/gsgbrandsgh', icon: ExternalLink },
];

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="cursor-pointer">
            <GsgLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="cursor-pointer">
                <motion.div
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    pathname === link.href
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+233246033792"
              className="cursor-pointer"
            >
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call/WhatsApp
              </Button>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
                  <ExternalLink className="w-4 h-4" />
                  Visit/Follow
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {socialLinks.map((social) => (
                  <DropdownMenuItem key={social.name} asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <social.icon className="w-4 h-4" />
                      {social.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/customer-experience" className="cursor-pointer">
              <Button size="sm">Get Help</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden cursor-pointer">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="cursor-pointer">
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        pathname === link.href
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                ))}
                <div className="border-t pt-4 mt-4">
                  <Link href="/customer-experience" className="cursor-pointer">
                    <Button className="w-full">Get Help</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
