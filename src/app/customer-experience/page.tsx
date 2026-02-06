'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import InfoBanner from '@/components/InfoBanner';

const contactMethods = [
  {
    title: 'Call Us',
    icon: Phone,
    items: [
      { label: 'Primary', value: '+233 (0) 246 033 792', link: 'tel:+233246033792' },
      { label: 'Secondary', value: '+233 (0) 579 033 792', link: 'tel:+233579033792' },
    ],
  },
  {
    title: 'WhatsApp',
    icon: MessageCircle,
    items: [
      { label: 'Main', value: '+233 246 033 792', link: 'https://wa.me/233246033792' },
      { label: 'Alternative', value: '+233 579 033 792', link: 'https://wa.me/233579033792' },
    ],
  },
  {
    title: 'Telegram',
    icon: Send,
    items: [
      { label: 'Channel', value: '@gsgbrandsgh', link: 'https://t.me/gsgbrandsgh' },
    ],
  },
  {
    title: 'Email',
    icon: Mail,
    items: [
      { label: 'General Inquiries', value: 'info@gsgbrands.com', link: 'mailto:info@gsgbrands.com' },
    ],
  },
];

const supportHours = [
  {
    title: 'Regular Hours',
    schedule: [
      { days: 'Monday - Friday', hours: '06:00 - 15:00' },
      { days: 'Saturday & Holidays', hours: '06:00 - 10:00' },
    ],
  },
  {
    title: 'Extended Hours',
    phone: '+233 (0) 571 303 716',
    schedule: [
      { days: 'Monday - Friday', hours: '15:01 - 18:30' },
      { days: 'Saturday & Holidays', hours: '10:01 - 16:30' },
    ],
  },
];

export default function CustomerExperiencePage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Submitted (Demo)',
      description: 'Your message has been received. We will get back to you soon!',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      <InfoBanner />

      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Customer Experience</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We are here to help you 24/7. Reach out through your preferred channel and experience exceptional customer service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {method.items.map((item) => (
                        <div key={item.label}>
                          <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary hover:underline cursor-pointer"
                          >
                            {item.value}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportHours.map((block, index) => (
                <Card key={block.title} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{block.title}</CardTitle>
                    </div>
                    {block.phone && (
                      <CardDescription className="text-base font-medium text-primary">
                        {block.phone}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {block.schedule.map((item) => (
                        <div key={item.days} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="font-medium text-gray-700">{item.days}</span>
                          <span className="text-primary font-semibold">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-2xl mx-auto border-2">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Send Us a Message</CardTitle>
                <CardDescription className="text-center text-base">
                  Fill out the form below and we will get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+233 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
