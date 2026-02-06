'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, CheckCircle, Truck, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const sampleTimeline = [
  {
    status: 'Order Placed',
    description: 'Your order has been confirmed and is being processed',
    timestamp: '2024-01-15 09:30 AM',
    completed: true,
    icon: CheckCircle,
  },
  {
    status: 'Processing',
    description: 'Your items are being prepared for shipment',
    timestamp: '2024-01-15 11:45 AM',
    completed: true,
    icon: Package,
  },
  {
    status: 'Out for Delivery',
    description: 'Your order is on its way to your location',
    timestamp: '2024-01-16 08:15 AM',
    completed: true,
    icon: Truck,
  },
  {
    status: 'Delivered',
    description: 'Package delivered successfully',
    timestamp: 'Estimated: Today, 2:00 PM',
    completed: false,
    icon: MapPin,
  },
];

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };

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
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
              <Package className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Track Your Order</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Enter your Order ID or Transaction ID to track your delivery in real-time
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
          >
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Enter Tracking Information</CardTitle>
                <CardDescription className="text-center">
                  Your tracking ID can be found in your order confirmation email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Enter Order ID or Transaction ID"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="gap-2">
                    <Search className="w-5 h-5" />
                    Track
                  </Button>
                </form>
              </CardContent>
            </Card>

            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Order Status</CardTitle>
                    <CardDescription>
                      Tracking ID: <span className="font-semibold text-primary">{trackingId}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {sampleTimeline.map((item, index) => (
                        <motion.div
                          key={item.status}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                                item.completed
                                  ? 'bg-gradient-to-br from-purple-500 to-purple-700'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <item.icon
                                className={`w-6 h-6 ${
                                  item.completed ? 'text-white' : 'text-gray-400'
                                }`}
                              />
                            </div>
                            {index < sampleTimeline.length - 1 && (
                              <div
                                className={`w-0.5 h-16 ${
                                  item.completed ? 'bg-primary' : 'bg-gray-200'
                                }`}
                              ></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <h3
                              className={`text-lg font-semibold mb-1 ${
                                item.completed ? 'text-gray-900' : 'text-gray-400'
                              }`}
                            >
                              {item.status}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <p className="text-xs text-gray-500">{item.timestamp}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                      <h4 className="font-semibold mb-2">Need Help?</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        If you have any questions about your order, our customer support team is here to assist you.
                      </p>
                      <Button variant="outline" size="sm">
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
