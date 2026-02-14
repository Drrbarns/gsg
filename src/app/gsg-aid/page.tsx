'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users, Lightbulb, HandHeart, Target, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { aidFocusAreas } from '@/lib/data';

export default function GsgAidPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-black text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://readdy.ai/api/search-image?query=african%20community%20helping%20hands%20together%20unity%20support%20collaboration%20ghana%20people%20diverse%20group%20teamwork%20social%20impact%20charity%20humanitarian%20aid%20warm%20lighting%20hopeful%20atmosphere&width=1920&height=1080&seq=gsg-aid-hero&orientation=landscape"
            alt="GSG-AID"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mb-6 text-green-400 border border-green-500/30">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering <span className="text-green-400">Communities</span>
            </h1>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              GSG-AID is dedicated to making a difference across Ghana through sustainable support, empowerment programs, and strategic partnerships that create lasting positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/customer-experience">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none h-14 px-8 text-lg font-bold">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                "To empower underserved communities through sustainable development initiatives, focusing on education, healthcare, and economic self-reliance, ensuring that every individual has the opportunity to thrive."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="flex justify-between items-end mb-12 px-4">
              <div>
                <h2 className="text-4xl font-bold mb-2">Our Focus Areas</h2>
                <p className="text-gray-600">Where we direct our efforts for maximum impact</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aidFocusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md bg-neutral-50 hover:bg-green-50 group">
                    <CardHeader className="flex flex-row gap-6 items-start">
                      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:bg-green-600 transition-colors duration-300">
                        <area.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-green-800 transition-colors">{area.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none bg-gradient-to-br from-green-900 to-black text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubic-zeus.png')]"></div>
              <CardContent className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <HandHeart className="w-8 h-8 text-green-400" />
                    Get Involved
                  </h2>
                  <p className="text-green-100 text-lg leading-relaxed mb-0">
                    Whether you need assistance or want to contribute to our mission, we welcome you to be part of the GSG-AID community. Together, we can create meaningful change.
                  </p>
                </div>

                <Link href="/customer-experience" className="flex-shrink-0">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 h-14 px-8 font-bold text-lg gap-2">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
