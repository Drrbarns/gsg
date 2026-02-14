'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Target, Lightbulb, Rocket, Heart } from 'lucide-react';

const teamMembers = [
  { name: 'TurkArthur', role: 'Advisory Board', image: 'https://readdy.ai/api/search-image?query=african%20business%20leader%20executive%20portrait%20professional%20male%20suit%20confident%20smile%20studio%20lighting&width=400&height=400&seq=team-1&orientation=square' },
  { name: 'Kenneth', role: 'Executive Team', image: 'https://readdy.ai/api/search-image?query=young%20african%20corporate%20professional%20male%20smart%20casual%20innovative%20tech%20leader%20portrait&width=400&height=400&seq=team-2&orientation=square' },
  { name: 'Derick', role: 'Executive Team', image: 'https://readdy.ai/api/search-image?query=creative%20african%20business%20professional%20male%20modern%20style%20portrait%20visionary&width=400&height=400&seq=team-3&orientation=square' },
  { name: 'Reynold', role: 'Executive Team', image: 'https://readdy.ai/api/search-image?query=dedicated%20african%20operations%20manager%20male%20professional%20reliable%20portrait&width=400&height=400&seq=team-4&orientation=square' },
  { name: 'Berlinda', role: 'Executive Team', image: 'https://readdy.ai/api/search-image?query=african%20business%20woman%20executive%20professional%20confident%20leadership%20portrait%20modern&width=400&height=400&seq=team-5&orientation=square' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://readdy.ai/api/search-image?query=african%20team%20collaboration%20meeting%20strategy%20corporate%20office%20glass%20walls%20modern%20tech%20company%20ghana&width=1920&height=1080&seq=about-hero&orientation=landscape" className="w-full h-full object-cover" alt="Team" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              About <span className="text-purple-400">GSG Brands</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl leading-relaxed">
              We are building a comprehensive ecosystem of services that save time and money while delivering exceptional value to our customers across Ghana. Our story is one of innovation, integrity, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize the African marketplace by building a seamless, integrated ecosystem of services that enhances quality of life, promotes economic growth, and fosters community development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and impactful brand in Ghana, known for innovation, reliability, and an unwavering commitment to exceeding customer expectations every single day.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                    <Heart className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in integrity, customer obsession, and continuous innovation. We strive to create tangible value for every stakeholder, from our customers to our partners and the communities we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-gray-600">The minds driving GSG Brands forward</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                    <div className="relative h-80 overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
                      <p className="text-purple-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
