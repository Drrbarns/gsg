'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, Clock, Globe, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import InfoBanner from '@/components/InfoBanner';

const contactMethods = [
  {
    title: 'Websites',
    icon: Globe,
    items: [
      { label: 'Goods', value: 'www.goods.gsgbrands.com.gh', link: 'https://goods.gsgbrands.com.gh' },
      { label: 'Shopper', value: 'www.shopper.gsgbrands.com.gh', link: 'https://shopper.gsgbrands.com.gh' },
      { label: 'Sell-Buy-Safe', value: 'www.sellbuysafe.gsgbrands.com.gh', link: 'https://sellbuysafe.gsgbrands.com.gh' },
      { label: 'Courier', value: 'www.courier.gsgbrands.com.gh', link: 'https://courier.gsgbrands.com.gh' },
      { label: 'Cuisine', value: 'www.cuisine.gsgbrands.com.gh', link: 'https://cuisine.gsgbrands.com.gh' },
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
      { label: 'General Inquiries', value: 'info@gsgbrands.com.gh', link: 'mailto:info@gsgbrands.com.gh' },
    ],
  },
];

const supportHours = [
  {
    title: 'Regular Hours',
    phones: ['+233 (0) 246 033 792', '+233 (0) 579 033 792'],
    schedule: [
      { days: 'Monday - Friday', hours: '05:00am - 02:00pm' },
      { days: 'Sat. & Holidays', hours: '05:00am - 09:00am' },
    ],
  },
  {
    title: 'Extended Hours',
    phone: '+233 (0) 571 303 716',
    schedule: [
      { days: 'Monday - Friday', hours: '02:01pm - 06:00pm' },
      { days: 'Sat. & Holidays', hours: '09:01am - 02:00pm' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              let iconBg = "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white";
              if (method.title === 'WhatsApp') {
                iconBg = "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white";
              } else if (method.title === 'Telegram') {
                iconBg = "bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white";
              } else if (method.title === 'Email') {
                iconBg = "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white";
              }

              return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 shadow-sm overflow-hidden flex flex-col bg-white">
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-4 transition-colors duration-300 ${iconBg}`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-5 pt-2">
                    {method.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="inline-block text-[15px] font-medium text-gray-700 hover:text-purple-600 transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )})}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Live Calls Support Hours</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're available to assist you via phone during these dedicated hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {supportHours.map((block, index) => (
                <Card key={block.title} className="border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group">
                  <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-purple-700 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="pb-6 pt-8 px-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900 font-bold">{block.title}</CardTitle>
                    </div>
                    {block.phones && block.phones.length > 0 && (
                      <div className="space-y-3 mt-4">
                        {block.phones.map((phone) => (
                          <div key={phone} className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50/50 px-4 py-2.5 rounded-lg border border-gray-100">
                            <Phone className="w-4 h-4 text-purple-500" />
                            {phone}
                          </div>
                        ))}
                      </div>
                    )}
                    {block.phone && (
                      <div className="flex items-center gap-3 text-gray-700 font-medium mt-4 bg-gray-50/50 px-4 py-2.5 rounded-lg border border-gray-100">
                        <Phone className="w-4 h-4 text-purple-500" />
                        {block.phone}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="space-y-3">
                      {block.schedule.map((item) => (
                        <div key={item.days} className="flex justify-between items-center py-3.5 border-b border-gray-50 last:border-0 last:pb-0">
                          <span className="font-medium text-gray-600">{item.days}</span>
                          <span className="text-purple-700 font-semibold bg-purple-50 px-3 py-1 rounded-md text-sm">{item.hours}</span>
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
            <Card className="max-w-3xl mx-auto border border-gray-100 shadow-2xl shadow-purple-900/5 bg-white overflow-hidden rounded-2xl">
              <div className="bg-gray-50/80 p-8 sm:p-12 border-b border-gray-100 text-center">
                <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                  Prefer to write to us? Fill out the form below and our team will get back to you via email or phone within 24 hours.
                </CardDescription>
              </div>
              <CardContent className="p-8 sm:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2.5">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-gray-50/50 border-gray-200 focus-visible:ring-purple-500 h-12 text-base transition-colors hover:bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-gray-50/50 border-gray-200 focus-visible:ring-purple-500 h-12 text-base transition-colors hover:bg-gray-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+233 (0) XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-gray-50/50 border-gray-200 focus-visible:ring-purple-500 h-12 text-base transition-colors hover:bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-gray-700">How can we help?</label>
                    <Textarea
                      placeholder="Please describe your inquiry or issue in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-gray-50/50 border-gray-200 focus-visible:ring-purple-500 text-base resize-none pt-4 transition-colors hover:bg-gray-50"
                    />
                  </div>
                  <div className="pt-4 text-center sm:text-left">
                    <Button type="submit" className="w-full sm:w-auto px-10 h-14 bg-purple-700 hover:bg-purple-800 text-white font-medium text-base rounded-xl transition-all shadow-lg shadow-purple-700/20 hover:shadow-purple-700/40 hover:-translate-y-0.5">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
