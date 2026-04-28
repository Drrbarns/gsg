'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, Clock, Globe, Phone, ArrowRight, ShoppingBag, Users, Shield, MapPin, Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import InfoBanner from '@/components/InfoBanner';

const directContactMethods = [
  {
    title: 'WhatsApp',
    icon: MessageCircle,
    accent: 'from-emerald-500 to-emerald-600',
    accentSoft: 'bg-emerald-50 text-emerald-600',
    items: [
      { label: 'Main', value: '+233 246 033 792', link: 'https://wa.me/233246033792' },
      { label: 'Alternative', value: '+233 579 033 792', link: 'https://wa.me/233579033792' },
    ],
  },
  {
    title: 'Telegram',
    icon: Send,
    accent: 'from-sky-500 to-sky-600',
    accentSoft: 'bg-sky-50 text-sky-600',
    items: [
      { label: 'Channel', value: '@gsgbrandsgh', link: 'https://t.me/gsgbrandsgh' },
    ],
  },
  {
    title: 'Email',
    icon: Mail,
    accent: 'from-amber-500 to-amber-600',
    accentSoft: 'bg-amber-50 text-amber-600',
    items: [
      { label: 'General Inquiries', value: 'info@gsgbrands.com.gh', link: 'mailto:info@gsgbrands.com.gh' },
    ],
  },
];

const websiteUnits = [
  { title: 'Convenience Goods & More', domain: 'goods.gsgbrands.com.gh', link: 'https://goods.gsgbrands.com.gh', icon: ShoppingBag },
  { title: 'Personal Shopper', domain: 'shopper.gsgbrands.com.gh', link: 'https://shopper.gsgbrands.com.gh', icon: Users },
  { title: 'Sell-Safe Buy-Safe', domain: 'sellbuysafe.gsgbrands.com.gh', link: 'https://sellbuysafe.gsgbrands.com.gh', icon: Shield },
  { title: 'Courier', domain: 'courier.gsgbrands.com.gh', link: 'https://courier.gsgbrands.com.gh', icon: MapPin },
  { title: 'StreetCuisine', domain: 'cuisine.gsgbrands.com.gh', link: 'https://cuisine.gsgbrands.com.gh', icon: Utensils },
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

      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/customer-experience-agent.png" alt="Customer Experience" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-20 bg-gradient-to-b from-gray-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Direct Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-4 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Direct Channels
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Talk to us instantly</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Pick your preferred channel below — our team is online and ready to respond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {directContactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group h-full"
              >
                <div className="relative h-full p-7 rounded-3xl bg-white border border-gray-100 hover:border-transparent group-hover:shadow-2xl group-hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-1 flex flex-col overflow-hidden">
                  <div aria-hidden className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${method.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${method.accentSoft} group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{`0${index + 1}`}</span>
                  </div>

                  <h3 className="relative text-xl font-bold text-gray-900 mb-5 tracking-tight">{method.title}</h3>

                  <div className="relative space-y-4 flex-1">
                    {method.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gray-800 hover:text-purple-600 transition-colors break-words group/link"
                        >
                          {item.value}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Websites Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-4 tracking-wider uppercase">
              <Globe className="w-3 h-3" />
              Our Websites
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Explore the GSG ecosystem</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Five dedicated websites, one trusted brand. Tap any service to visit it directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-24">
            {websiteUnits.map((unit, index) => (
              <motion.a
                key={unit.title}
                href={unit.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative block p-5 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-purple-50/0 group-hover:from-purple-50/40 group-hover:to-fuchsia-50/40 transition-all duration-500" />

                <div className="relative">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 mb-4 group-hover:from-purple-600 group-hover:to-fuchsia-600 group-hover:text-white transition-all duration-300">
                    <unit.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight leading-tight">{unit.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-purple-700 transition-colors break-all font-medium">{unit.domain}</p>

                  <div className="mt-4 pt-3 border-t border-gray-100/80 flex items-center justify-between text-[10px] font-bold text-gray-400 group-hover:text-purple-700 transition-colors uppercase tracking-widest">
                    <span>Visit</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700 mb-4 tracking-wider uppercase">
                <Mail className="w-3 h-3" />
                Write to us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Send us a message</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Prefer to write? Tell us how we can help and a real human will get back to you within 24 hours.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div aria-hidden className="absolute -inset-4 bg-gradient-to-br from-purple-200/40 via-fuchsia-200/30 to-purple-200/40 blur-3xl rounded-[3rem] -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-2xl shadow-purple-900/10">
                {/* Left context panel */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 p-8 sm:p-10 text-white overflow-hidden">
                  <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl" />

                  <div className="relative h-full flex flex-col">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold w-fit mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Avg. response &lt; 24h
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">Let&apos;s talk.</h3>
                    <p className="text-purple-100/90 text-sm leading-relaxed mb-8">
                      Share a little context and our customer experience team will route your message to the right person.
                    </p>

                    <ul className="space-y-4 mt-auto">
                      <li className="flex items-start gap-3 text-sm">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <a href="mailto:info@gsgbrands.com.gh" className="text-purple-200 hover:text-white transition-colors break-all">
                            info@gsgbrands.com.gh
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Call</p>
                          <a href="tel:+233246033792" className="text-purple-200 hover:text-white transition-colors block">+233 (0) 246 033 792</a>
                          <a href="tel:+233579033792" className="text-purple-200 hover:text-white transition-colors block">+233 (0) 579 033 792</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Form panel */}
                <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                        <Input
                          type="text"
                          placeholder="Akosua Mensah"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-gray-50 border-0 ring-1 ring-gray-200 focus-visible:ring-2 focus-visible:ring-purple-500 h-12 text-sm rounded-xl px-4 transition-all hover:bg-gray-100/60"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-gray-50 border-0 ring-1 ring-gray-200 focus-visible:ring-2 focus-visible:ring-purple-500 h-12 text-sm rounded-xl px-4 transition-all hover:bg-gray-100/60"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+233 (0) XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-gray-50 border-0 ring-1 ring-gray-200 focus-visible:ring-2 focus-visible:ring-purple-500 h-12 text-sm rounded-xl px-4 transition-all hover:bg-gray-100/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">How can we help?</label>
                      <Textarea
                        placeholder="Tell us a bit about what you need..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-gray-50 border-0 ring-1 ring-gray-200 focus-visible:ring-2 focus-visible:ring-purple-500 text-sm resize-none p-4 rounded-xl transition-all hover:bg-gray-100/60"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-gray-400 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-purple-500" />
                        Your information is private and secure.
                      </p>
                      <Button type="submit" className="w-full sm:w-auto h-12 px-7 gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 hover:-translate-y-0.5">
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
