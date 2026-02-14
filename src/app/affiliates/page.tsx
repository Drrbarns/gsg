'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DollarSign, BarChart, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AffiliatesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-purple-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://readdy.ai/api/search-image?query=business%20partnership%20growth%20chart%20success%20team%20handshake%20digital%20marketing%20affiliate%20network%20income%20purple%20theme%20professional%20corporate&width=1920&height=1080&seq=affiliate-hero&orientation=landscape"
                        alt="Affiliate Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
                        Grow With <span className="text-purple-400">GSG Brands</span>
                    </h1>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join our affiliate program and earn commissions by referring customers to our ecosystem of services.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/customer-experience">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold h-14 px-8 text-lg">
                                Join Program
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="hover:shadow-lg transition-all border-none bg-purple-50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">High Commisions</CardTitle>
                                <CardDescription>Earn competitive rates on every successful referral across all GSG services.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-none bg-purple-50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                    <BarChart className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">Real-time Tracking</CardTitle>
                                <CardDescription>Monitor your clicks, conversions, and earnings in real-time dashboard.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-none bg-purple-50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">Marketing Assets</CardTitle>
                                <CardDescription>Access professional banners, links, and content to help you promote effectively.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-none bg-purple-50">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">Dedicated Support</CardTitle>
                                <CardDescription>Our affiliate managers are here to help you succeed every step of the way.</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
