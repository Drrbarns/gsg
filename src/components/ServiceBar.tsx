'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const services: { name: string; url: string; active: boolean; comingSoon?: boolean }[] = [
  { name: 'Convenience Goods & More', url: 'https://goods.gsgbrands.com.gh', active: true },
  { name: 'Personal Shopper', url: 'https://shopper.gsgbrands.com.gh', active: true },
  { name: 'Sell-Safe Buy-Safe', url: 'https://sellbuysafe.gsgbrands.com.gh', active: true },
  { name: 'StreetCuisine', url: 'https://cuisine.gsgbrands.com.gh', active: true },
  { name: 'Courier', url: 'https://courier.gsgbrands.com.gh', active: true },
  { name: 'Affiliates', url: '/affiliates', active: true },
];

export default function ServiceBar() {
  return (
    <motion.div
      className="bg-purple-900 text-white text-xs py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="hidden md:flex items-center gap-4 opacity-80 shrink-0">
            <span>GSG Brands Business Units</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-x-4 gap-y-1.5 md:gap-4 w-full md:w-auto justify-start md:justify-end">
            {services.map((service) => (
              <div key={service.name} className="whitespace-nowrap flex-shrink-0">
                {service.active ? (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-200 transition-colors flex items-center gap-1"
                  >
                    {service.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="opacity-50 cursor-not-allowed flex items-center gap-1">
                    {service.name}
                    {service.comingSoon && <span className="text-[10px] bg-white/20 px-1 rounded">Soon</span>}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
