'use client';

import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
              <Cookie className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-4">What Are Cookies</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">How We Use Cookies</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Types of Cookies We Use</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Managing Cookies</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at info@gsgbrands.com.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
