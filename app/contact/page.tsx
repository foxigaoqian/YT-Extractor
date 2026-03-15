import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - YouTube Description Extractor',
  description: 'Get in touch with the YouTube Description Extractor team.',
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      <Header />
      <main className="flex-1 relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have a question, feedback, or feature request? We&apos;d love to hear from you. Fill out the form below or drop us an email.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We aim to reply within 24 hours.</p>
                <a href="mailto:support@youtubedescriptionextractor.in" className="text-red-600 font-bold hover:underline">support@ytextractor.in</a>
              </div>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Feedback</h3>
                <p className="text-gray-600">Your feedback helps us improve the tool for everyone.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">Your Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" id="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Subject</label>
                  <input type="text" id="subject" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                  <textarea id="message" rows={5} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="button" className="w-full bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
