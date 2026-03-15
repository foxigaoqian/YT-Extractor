'use client';

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gray-900 font-display font-bold text-xl tracking-tight z-50">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center shadow-sm">
            <Search className="w-4 h-4" />
          </div>
          YT Extractor
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/#how-to-use" className="hover:text-gray-900 transition-colors">How to Use</Link>
          <Link href="/#features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/#faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col py-4 px-4 gap-4 z-40"
          >
            <Link 
              href="/#how-to-use" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl transition-colors"
            >
              How to Use
            </Link>
            <Link 
              href="/#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl transition-colors"
            >
              FAQ
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
