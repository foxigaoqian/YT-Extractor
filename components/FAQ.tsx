'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What is a YouTube Description Extractor?",
    answer: "A YouTube Description Extractor is a free online tool that allows you to easily copy the full description, tags, and title of any YouTube video or Short without having to manually highlight and copy the text."
  },
  {
    question: "Is this tool available in India?",
    answer: "Yes! Our YouTube Description Extractor is highly popular in India and is used by thousands of Indian YouTubers, SEO experts, and digital marketers every day. It works globally without any restrictions."
  },
  {
    question: "Can I extract descriptions from YouTube Shorts?",
    answer: "Absolutely. Just paste the YouTube Shorts URL into our extractor, and it will fetch the description, tags, and title just like a regular video."
  },
  {
    question: "Is it legal to copy YouTube video descriptions?",
    answer: "Extracting the description for research, SEO analysis, or personal reference is perfectly fine. However, you should avoid directly plagiarizing someone else's content for your own videos. Use it to understand their structure and keywords."
  },
  {
    question: "Does this tool also extract YouTube tags?",
    answer: "Yes, alongside being a description tool, it acts as a YouTube tag extractor. It pulls the hidden meta keywords used by the creator so you can optimize your own videos."
  },
  {
    question: "Do I need to install any software or extension?",
    answer: "No, our tool is 100% web-based. You don't need to install any browser extensions, apps, or software. It works directly in your browser on both desktop and mobile devices."
  },
  {
    question: "Can I download the video thumbnail?",
    answer: "Yes! Once you extract the video data, we provide a high-quality version of the video's thumbnail that you can download with a single click."
  },
  {
    question: "Is this tool free to use?",
    answer: "Yes, the YouTube Description Extractor is completely free to use. There are no hidden fees, no premium versions, and no registration required."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="bg-white p-6 sm:p-8 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-[0_2px_40px_rgb(0,0,0,0.04)] max-w-4xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-base sm:text-lg text-gray-600">Everything you need to know about the product and features.</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-red-200 bg-red-50/30' : 'border-gray-200 bg-white hover:border-red-100'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-display font-bold text-base sm:text-lg text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
