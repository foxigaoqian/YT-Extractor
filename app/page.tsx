import ExtractorTool from '@/components/ExtractorTool';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Star, Users, Shield, Zap, Copy } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      
      {/* Header */}
      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-red-100/40 blur-[100px]" />
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-orange-100/40 blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-xs sm:text-sm font-medium mb-2 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Popular in India 🇮🇳
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight text-gray-900 leading-[1.1]"
            >
              Extract YouTube <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Descriptions Instantly
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              The fastest way to extract and copy descriptions, tags, and thumbnails from any YouTube video or Short.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ExtractorTool />
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200/60"
            >
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 mb-6 sm:mb-8 uppercase tracking-[0.2em]">Trusted by 12,000+ creators & students from</p>
              <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6 text-gray-400 font-display font-bold text-lg sm:text-xl opacity-70 grayscale">
                <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Delhi University</span>
                <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">IIT Bombay</span>
                <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Mumbai University</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 sm:py-24 bg-white px-4 relative">
          <div className="max-w-5xl mx-auto space-y-20 sm:space-y-32">
            
            {/* H2: Extract YouTube Video Description Instantly */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 leading-tight">Extract YouTube Video Description Instantly</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Copying a YouTube video description manually can be frustrating, especially when dealing with long texts, links, and timestamps. Our <strong>YouTube Description Extractor</strong> is designed to solve this problem.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Whether you are a content creator, SEO specialist, or digital marketer, this tool allows you to extract YouTube descriptions, tags, and titles in just one click. It works perfectly for standard videos as well as YouTube Shorts.
                </p>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-orange-50 rounded-[2rem] sm:rounded-3xl transform rotate-3 scale-105 -z-10" />
                <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-3xl shadow-xl border border-gray-100">
                  <div className="space-y-4">
                    <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-3/4" />
                    <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-full" />
                    <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-5/6" />
                    <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-2/3" />
                  </div>
                  <div className="mt-6 sm:mt-8 flex gap-3">
                    <div className="h-8 bg-red-50 rounded-lg w-20 sm:w-24" />
                    <div className="h-8 bg-red-50 rounded-lg w-28 sm:w-32" />
                  </div>
                </div>
              </div>
            </div>

            {/* H2: How to Extract YouTube Video Description */}
            <div id="how-to-use" className="text-center space-y-8 sm:space-y-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">How to Extract YouTube Video Description</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-[2rem] sm:rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm text-red-600 rounded-2xl flex items-center justify-center font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-6">1</div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Copy Video URL</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Go to YouTube and copy the link of the video or Short you want to extract data from.</p>
                </div>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-[2rem] sm:rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm text-red-600 rounded-2xl flex items-center justify-center font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-6">2</div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Paste the Link</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Paste the copied URL into the input box at the top of this page.</p>
                </div>
                <div className="bg-gray-50 p-6 sm:p-8 rounded-[2rem] sm:rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm text-red-600 rounded-2xl flex items-center justify-center font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-6">3</div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Extract & Copy</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Click &quot;Extract Description&quot; and instantly copy the text, tags, or download the thumbnail.</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-[#0A0A0A] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-8 sm:mb-12 text-center relative z-10">Loved by Indian YouTubers & Marketers</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl backdrop-blur-sm">
                  <div className="flex text-yellow-400 mb-4 sm:mb-6">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </div>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">&quot;Perfect tool for researching competitor videos. Saves me hours of manual copying.&quot;</p>
                  <p className="font-display font-bold text-white text-sm sm:text-base">— Rahul Sharma, YouTuber</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl backdrop-blur-sm">
                  <div className="flex text-yellow-400 mb-4 sm:mb-6">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </div>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">&quot;Much faster than copying from YouTube manually. The tag extractor is a bonus!&quot;</p>
                  <p className="font-display font-bold text-white text-sm sm:text-base">— Priya Patel, Digital Marketer</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl backdrop-blur-sm hidden md:block">
                  <div className="flex text-yellow-400 mb-4 sm:mb-6">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /><Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </div>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">&quot;Great for extracting tags and descriptions. I use it daily for my SEO analysis.&quot;</p>
                  <p className="font-display font-bold text-white text-sm sm:text-base">— Arjun Mehta, SEO Analyst</p>
                </div>
              </div>
            </div>

            {/* H2: Why Use a YouTube Description Extractor */}
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-gray-50 rounded-[1.5rem] sm:rounded-3xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Competitor Analysis</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">See exactly what tags and descriptions your competitors are using to rank higher.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-gray-50 rounded-[1.5rem] sm:rounded-3xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Time Saving</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Stop highlighting and right-clicking. Get the full text formatted perfectly in one click.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-gray-50 rounded-[1.5rem] sm:rounded-3xl border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg sm:text-xl mb-1 sm:mb-2">Thumbnail Downloading</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Need inspiration for your next thumbnail? Download high-quality thumbnails instantly.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 leading-tight">Why Use a YouTube Description Extractor</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Analyzing successful YouTube videos is a core part of video SEO. By using a YouTube description downloader, you can easily study how top creators structure their descriptions, what keywords they use, and how they place their affiliate links or timestamps.
                </p>
              </div>
            </div>

            {/* H2: Features of Our Tool */}
            <div id="features" className="space-y-8 sm:space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-3 sm:mb-4">Features of Our Tool</h2>
                <p className="text-base sm:text-lg text-gray-600">Everything you need to extract YouTube metadata efficiently.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl flex gap-4 sm:gap-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Lightning Fast</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Extracts data in milliseconds directly from YouTube servers.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl flex gap-4 sm:gap-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 text-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1 sm:mb-2">100% Free & Secure</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">No registration required. We don&apos;t store your data or extracted content.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl flex gap-4 sm:gap-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-50 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Works with Shorts</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Fully compatible with standard YouTube videos and YouTube Shorts.</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-3xl flex gap-4 sm:gap-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-50 text-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1 sm:mb-2">One-Click Copy</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Easily copy the title, description, or tags with dedicated copy buttons.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H2: Frequently Asked Questions */}
            <FAQ />

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
