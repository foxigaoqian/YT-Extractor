import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - YouTube Description Extractor',
  description: 'Terms of Service for YouTube Description Extractor.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      <Header />
      <main className="flex-1 relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_2px_40px_rgb(0,0,0,0.04)] border border-gray-100">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-red max-w-none text-gray-600 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using YouTube Description Extractor, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p>We provide a free web-based tool to extract public metadata (descriptions, tags, titles, thumbnails) from YouTube videos. This service is provided &quot;as is&quot; and &quot;as available&quot;.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Acceptable Use</h2>
            <p>You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the service. You are responsible for ensuring that your use of extracted content complies with YouTube&apos;s Terms of Service and applicable copyright laws.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>The extracted content belongs to the respective copyright holders (the YouTube creators). We do not claim ownership of any content extracted using our tool.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p>We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the service. We are not responsible for any errors or omissions in the extracted data.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>In no event shall YouTube Description Extractor be liable for any indirect, incidental, special, consequential or punitive damages arising out of or relating to your use of the service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
