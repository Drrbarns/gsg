'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const services = [
  { name: 'Convenience Goods', url: 'https://goods.gsgbrands.com.gh', active: true },
  { name: 'My Personal Shopper', url: 'https://shopper.gsgbrands.com.gh', active: true },
  { name: 'Sell-Safe Buy-Safe', url: 'https://sellbuysafe.gsg-brands.com', active: true },
  { name: 'StreetCuisine By GSG', url: '#', active: false },
  { name: 'Courier & Delivery By GSG', url: '#', active: false },
  { name: 'Affiliates', url: '#', active: false, comingSoon: true },
];

export default function ServiceBar() {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100 py-2 overflow-x-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center flex-wrap">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {service.active ? (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Badge variant="default" className="hover:bg-primary/90 transition-all cursor-pointer">
                    {service.name}
                  </Badge>
                </a>
              ) : (
                <Badge variant="outline" className={service.comingSoon ? 'opacity-50' : ''}>
                  {service.name} {service.comingSoon && '(Coming Soon)'}
                </Badge>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
