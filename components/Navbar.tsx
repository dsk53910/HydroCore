import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#020617]/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-full bg-blue-900/30 group-hover:bg-blue-800/40 transition-colors border border-blue-500/10">
              <Droplets className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Hydro<span className="text-blue-500">Core</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Product</a>
              <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 text-white">
                Pre-order Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Product</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Features</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Pricing</a>
            <button className="w-full mt-4 bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-lg text-center font-bold text-white shadow-lg shadow-blue-900/20">
              Pre-order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};