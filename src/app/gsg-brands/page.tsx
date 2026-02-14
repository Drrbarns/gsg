'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Shield, MapPin, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { businessUnits } from '@/lib/data';

const categories = ['All', 'Shopping', 'Services', 'Marketplace', 'Food', 'Logistics', 'Partnership'];

export default function GsgBrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredUnits = selectedCategory === 'All'
    ? businessUnits
    : businessUnits.filter(unit => unit.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-6">GSG Brands Directory</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our comprehensive ecosystem of services designed to make your life easier, save you time, and deliver exceptional value.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-6 py-2 text-sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredUnits.map((unit, index) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl">
                        <unit.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {unit.active ? (
                          <Badge variant="success">Live</Badge>
                        ) : unit.comingSoon ? (
                          <Badge variant="secondary">Coming Soon</Badge>
                        ) : (
                          <Badge variant="warning">In Development</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{unit.title}</CardTitle>
                    <CardDescription className="text-base">{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm text-gray-700">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {unit.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {unit.active ? (
                      <a href={unit.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Button className="w-full gap-2">
                          Visit Service
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button className="w-full" disabled>
                        {unit.comingSoon ? 'Coming Soon' : 'In Development'}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
