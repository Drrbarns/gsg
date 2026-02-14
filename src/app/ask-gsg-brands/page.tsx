'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';

const faqs = [
  {
    question: 'What services does GSG Brands offer?',
    answer: 'GSG Brands offers a comprehensive ecosystem of services including Convenience Goods shopping, My Personal Shopper assistance, Sell-Safe Buy-Safe Marketplace, StreetCuisine food delivery, Courier & Delivery services, and an Affiliates program. Each service is designed to save you time and money while delivering exceptional value.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team 24/7 through multiple channels: Call us at +233 (0) 246 033 792 or +233 (0) 579 033 792, message us on WhatsApp, connect via Telegram @gsgbrandsgh, or email us at info@gsgbrands.com. We are always ready to assist you.',
  },
  {
    question: 'What are your delivery areas?',
    answer: 'We currently serve major cities and regions across Ghana. Our delivery coverage is continuously expanding to reach more communities. Contact our customer support team to confirm if we deliver to your specific location.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order using our Tracking page. Simply enter your Order ID or Transaction ID, and you will see real-time updates on your delivery status, including timestamps and current location.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and cash on delivery for eligible orders. Payment options may vary depending on the specific service you are using.',
  },
  {
    question: 'How does the Personal Shopper service work?',
    answer: 'Our Personal Shopper service connects you with a dedicated shopping assistant who helps you find products, compare prices, and make informed purchasing decisions. Simply submit your shopping list or requirements, and our team will handle the rest.',
  },
  {
    question: 'Is the Sell-Safe Buy-Safe Marketplace secure?',
    answer: 'Yes, absolutely. Our marketplace implements strict verification processes for sellers, secure payment systems, and buyer protection policies. Every transaction is monitored to ensure safety and authenticity.',
  },
  {
    question: 'How can I become an affiliate partner?',
    answer: 'Our Affiliates program is live! Visit our Affiliates page to join our partner network and start earning commissions by promoting GSG Brands services.',
  },
];

export default function AskGsgBrandsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Question Submitted (Demo)',
      description: 'Thank you for your question. Our team will respond shortly!',
    });
    setFormData({ name: '', phone: '', question: '' });
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
              <HelpCircle className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Ask GSG Brands</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Find answers to common questions or submit your own inquiry. We are here to help!
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
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12">
              Browse through our most common questions and answers
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-2 rounded-xl px-6 bg-white hover:border-primary transition-all">
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Still Have Questions?</CardTitle>
                <CardDescription className="text-center text-base">
                  Submit your question and our team will get back to you promptly
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
                    <label className="block text-sm font-medium mb-2">Your Question</label>
                    <Textarea
                      placeholder="What would you like to know?"
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Question
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
