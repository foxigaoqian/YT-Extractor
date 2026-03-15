import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - YouTube Description Extractor',
  description: 'Privacy Policy for YouTube Description Extractor.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      <Header />
      <main className="flex-1 relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-red max-w-none text-gray-600 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>We do not collect, store, or process any personal data. Our tool operates entirely by fetching public data from YouTube based on the URLs you provide. We do not require account registration or login.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Usage Data</h2>
            <p>We may use standard analytics tools (like Google Analytics) to collect anonymous usage data, such as pages visited, time spent on the site, and general geographic location. This helps us improve our service.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cookies</h2>
            <p>We do not use tracking cookies. Third-party services we use for analytics may use cookies to track anonymous usage statistics.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
