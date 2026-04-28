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
            <section className="relative min-h-[60vh] flex items-center bg-black text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/affiliates-entrepreneurs.png"
                        alt="Affiliate Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none px-1">
                        Grow With <span className="text-purple-400">GSG Brands</span>
                    </h1>
                    <p className="text-base sm:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                        Join our affiliate program and earn commissions by referring customers to our ecosystem of services.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
                        <Link href="/customer-experience" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-14 px-8 text-lg">
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
