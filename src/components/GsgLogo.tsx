'use client';

import { motion } from 'framer-motion';

export default function GsgLogo({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-50"></div>
        <div className="relative bg-primary rounded-full px-5 py-2 border-2 border-white shadow-lg">
          <div className="absolute inset-0 rounded-full border-2 border-white/40" style={{ margin: '3px' }}></div>
          <span className="text-white font-bold text-xl tracking-wider">GSG</span>
        </div>
      </div>
      <span className="text-xl font-bold text-foreground">BRANDS</span>
    </motion.div>
  );
}
