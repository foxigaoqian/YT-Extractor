import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-center relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center justify-center gap-2 text-gray-900 font-display font-bold text-xl tracking-tight mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center shadow-sm">
            <Search className="w-4 h-4" />
          </div>
          YT Extractor
        </Link>
        <p className="text-gray-500 mb-2 font-medium">© {new Date().getFullYear()} YouTube Description Extractor. All rights reserved.</p>
        <p className="text-sm text-gray-400">This tool is not affiliated with, endorsed, or sponsored by YouTube or Google Inc.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
        </div>
      </div><a href="https://imglab.dev/item/youtube-description-extractor" target="_blank" rel="noopener noreferrer">
  <img src="https://imglab.dev/svg/badge.svg" alt="Featured on ImgLab" width="160" height="32" />
</a>
    </footer>
  );
}
