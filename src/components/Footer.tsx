import React from 'react';
import { Zap, Facebook, Instagram, Twitter, AlertCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 backdrop-blur-sm">
      {/* Important Notice Banner */}
      <div className="bg-gray-800/60 border-b border-gray-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <AlertCircle className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="text-xs text-gray-300 leading-relaxed">
              <span className="font-semibold text-yellow-400">Important Notice:</span> All special deals, promotions, and products are subject to availability and may vary by location. 
              Age restrictions apply to tobacco, vape, and alcoholic products (21+ required with valid ID). 
              Prices and promotions may change without notice. Terms & conditions apply. 
              For current availability, call <a href="tel:+1-954-444-3293" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline">(954) 444-3293</a>.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  KWIK SERVE
                </h3>
                <p className="text-xs text-gray-400 -mt-1">DRIVE THRU</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your premier drive-thru convenience store in Pompano Beach, Florida. 
              Everything you need without leaving your seat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#deals" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Special Deals
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="#brands" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Brands
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>111 SW 6th St</li>
              <li>Pompano Beach, FL 33060</li>
              <li>
                <a href="tel:+1-954-444-3293" className="hover:text-cyan-400 transition-colors duration-200">
                  (954) 444-3293
                </a>
              </li>
              <li>
                <a href="mailto:info@kwikserve.com" className="hover:text-cyan-400 transition-colors duration-200">
                  info@kwikserve.com
                </a>
              </li>
              <li className="text-sm">
                <strong>Hours:</strong> 7 AM - 10 PM Daily
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} KWIK SERVE Convenience Store. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;