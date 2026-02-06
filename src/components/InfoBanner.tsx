'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function InfoBanner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <MessageCircle className="w-5 h-5" />
          <p className="text-sm font-medium">
            WhatsApp & Telegram Active 24/7 for Your Convenience
          </p>
        </div>
      </div>
    </motion.div>
  );
}
