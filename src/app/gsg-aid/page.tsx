'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users, Lightbulb, HandHeart, Target, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const focusAreas = [
  {
    title: 'Community Support',
    description: 'Providing essential resources and assistance to underserved communities across Ghana',
    icon: Users,
  },
  {
    title: 'Education & Training',
    description: 'Empowering individuals through skills development and educational programs',
    icon: Lightbulb,
  },
  {
    title: 'Economic Empowerment',
    description: 'Supporting local entrepreneurs and small businesses to create sustainable livelihoods',
    icon: Target,
  },
  {
    title: 'Social Impact',
    description: 'Creating positive change through strategic partnerships and community initiatives',
    icon: Globe,
  },
];

export default function GsgAidPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=african%20community%20helping%20hands%20together%20unity%20support%20collaboration%20ghana%20people%20diverse%20group%20teamwork%20social%20impact%20charity%20humanitarian%20aid%20warm%20lighting%20hopeful%20atmosphere&width=1920&height=1080&seq=gsg-aid-hero&orientation=landscape"
            alt="GSG-AID"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              GSG-AID
            </h1>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Making a difference in communities across Ghana through sustainable support, empowerment programs, and strategic partnerships that create lasting positive impact.
            </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-primary rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-primary rounded-full mx-auto"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-16">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardHeader>
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mb-4">
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{area.title}</CardTitle>
                      <CardDescription className="text-base">{area.description}</CardDescription>
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
            <Card className="border-2 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Get Involved</CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto">
                  Whether you need assistance or want to contribute to our mission, we welcome you to be part of the GSG-AID community. Together, we can create meaningful change.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/customer-experience" className="cursor-pointer">
                  <Button size="lg" className="gap-2">
                    Contact Us
                    <Heart className="w-5 h-5" />
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
