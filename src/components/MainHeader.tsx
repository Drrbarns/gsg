'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ExternalLink, Menu, ChevronDown, HelpCircle, User } from 'lucide-react';
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

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'GSG Brands', href: '/gsg-brands' },
  { name: 'News & Media', href: '/news-media' },
  { name: 'GSG-AID', href: '/gsg-aid' },
];

const supportLinks = [
  { name: 'Customer Experience', href: '/customer-experience' },
  { name: 'Ask GSG Brands', href: '/ask-gsg-brands' },
  { name: 'Tracking', href: '/tracking' },
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

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <GsgLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="cursor-pointer">
              <span className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}>
                Home
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors outline-none cursor-pointer">
                Company <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors outline-none cursor-pointer">
                Support <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {supportLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer" title="Socials & Contact">
                   <Phone className="w-5 h-5 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                   <a href="tel:+233246033792" className="flex items-center gap-2 cursor-pointer">
                     <Phone className="w-4 h-4" /> Call Support
                   </a>
                </DropdownMenuItem>
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
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-white">
                <HelpCircle className="w-4 h-4" />
                Get Help
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden cursor-pointer">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary cursor-pointer">
                  Home
                </Link>
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Company</h4>
                  {companyLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="pl-4 text-base hover:text-primary cursor-pointer">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">Support</h4>
                  {supportLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="pl-4 text-base hover:text-primary cursor-pointer">
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-6 mt-2">
                  <Link href="/customer-experience" className="cursor-pointer">
                    <Button className="w-full gap-2">
                      <HelpCircle className="w-4 h-4" />
                      Get Help
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
