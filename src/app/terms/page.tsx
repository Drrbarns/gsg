'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 px-2 leading-tight">General Terms & Conditions</h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto px-2">
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
            className="prose prose-sm sm:prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Use of Services</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">User Responsibilities</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Payment Terms</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Limitation of Liability</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Changes to Terms</h2>
            <div className="space-y-2 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, please contact us at info@gsgbrands.com.gh or call +233 (0) 246 033 792.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
