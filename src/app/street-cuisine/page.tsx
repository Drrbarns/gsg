'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Star, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function StreetCuisinePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://readdy.ai/api/search-image?query=ghanaian%20street%20food%20jollof%20waakye%20kebab%20vibrant%20market%20food%20stall%20cooking%20fresh%20ingredients%20steam%20delicious%20appetizing%20high%20quality%20photography&width=1920&height=1080&seq=street-cuisine-hero&orientation=landscape"
                        alt="Street Cuisine Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-medium uppercase tracking-wider">
                                Authentic & Fresh
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            StreetCuisine <br />
                            <span className="text-orange-500">By GSG</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            Experience the vibrant flavors of Ghana delivered to your doorstep. We partner with the best local vendors to bring you authentic, hygienic, and delicious street food.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-none h-14 px-8 text-lg">
                                Order Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg">
                                View Menu
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why StreetCuisine?</h2>
                        <p className="text-lg text-gray-600">We elevate the street food experience with safety and convenience</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                    <Star className="w-8 h-8" />
                                </div>
                                <CardTitle>Authentic Flavors</CardTitle>
                                <CardDescription>
                                    We don't compromise on taste. Enjoy the real deal from vetted local legends.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4 text-green-600">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <CardTitle>Hygiene Certified</CardTitle>
                                <CardDescription>
                                    Every vendor undergoes strict hygiene checks and regular inspections.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <CardTitle>Fast Delivery</CardTitle>
                                <CardDescription>
                                    Hot and fresh delivery to your location within minutes of preparation.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-2">Popular Categories</h2>
                            <p className="text-gray-600">Explore our most ordered dishes</p>
                        </div>
                        <Button variant="link" className="text-orange-600 font-semibold text-lg">See All Categories &rarr;</Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Jollof Wars', 'Waakye Corner', 'Kebab & Grills', 'Local Soups'].map((item, i) => (
                            <div key={i} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                                <img
                                    src={`https://readdy.ai/api/search-image?query=${item}%20ghana%20food&width=400&height=600&seq=${i}&orientation=portrait`}
                                    alt={item}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-bold">{item}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-orange-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to Taste the Best?</h2>
                    <p className="text-xl opacity-90 mb-10">
                        Download the GSG App or order directly from our website to get started.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-orange-600">
                            Order Now
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
