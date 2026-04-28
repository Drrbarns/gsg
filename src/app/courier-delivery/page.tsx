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
            <section className="relative min-h-[70vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/courier-delivery-rider.webp"
                        alt="Delivery Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full min-w-0">
                    <div className="max-w-2xl w-full min-w-0 bg-black/60 p-6 sm:p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                            Fast, Reliable <br />
                            <span className="text-blue-400">Delivery</span>
                        </h1>
                        <p className="text-base sm:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
                            We move your packages with precision and speed across Ghana. From documents to bulk cargo, trust GSG Courier.
                        </p>

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch bg-white rounded-xl overflow-hidden p-2 shadow-lg max-w-md w-full">
                            <input
                                type="text"
                                placeholder="Enter Tracking ID..."
                                className="min-w-0 flex-1 px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400 font-medium rounded-lg sm:rounded-none"
                            />
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 sm:h-auto sm:px-6 font-bold shrink-0 justify-center rounded-lg sm:rounded-none">
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
