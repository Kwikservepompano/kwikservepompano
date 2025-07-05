import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2
                xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                KWIK SERVE
              </h1>
              <p className="text-xs text-gray-400 -mt-1">DRIVE THRU</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('deals')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Deals
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Brands
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('deals')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Deals
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Brands
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg mt-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;