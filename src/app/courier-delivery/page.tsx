'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Truck, MapPin, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CourierDeliveryPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://readdy.ai/api/search-image?query=delivery%20logistics%20courier%20service%20ghana%20truck%20van%20package%20shipping%20global%20transport%20fast%20efficient%20professional%20blue%20theme%20dynamic%20action%20shot&width=1920&height=1080&seq=courier-hero&orientation=landscape"
                        alt="Delivery Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-12">
                    <div className="max-w-2xl bg-black/60 p-12 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                            Fast, Reliable <br />
                            <span className="text-blue-400">Delivery</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                            We move your packages with precision and speed across Ghana. From documents to bulk cargo, trust GSG Courier.
                        </p>

                        <div className="flex bg-white rounded-xl overflow-hidden p-2 shadow-lg max-w-md">
                            <input
                                type="text"
                                placeholder="Enter Tracking ID..."
                                className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400 font-medium"
                            />
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-full px-6 font-bold">
                                Track
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-blue-200 flex items-center gap-2">
                            <Truck className="w-4 h-4" /> Trusted by 500+ businesses locally
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Tailored logistics solutions for individuals and businesses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-all border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-xl">Same-Day Delivery</CardTitle>
                                <CardDescription>Urgent packages delivered within hours within Accra and Kumasi.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-xl">Nationwide Shipping</CardTitle>
                                <CardDescription>Reliable transport to all regions in Ghana with tracking.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-xl">E-commerce Logistics</CardTitle>
                                <CardDescription>End-to-end fulfillment solutions for online sellers.</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-blue-600 text-center text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Custom Quote?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        For business partnerships or bulk shipments, contact our sales team tailored solutions.
                    </p>
                    <Link href="/customer-experience">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-900 font-bold hover:bg-blue-50">
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
