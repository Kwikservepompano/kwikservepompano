import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+1-954-444-3293"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Call KWIK SERVE"
    >
      <Phone className="h-6 w-6 group-hover:animate-pulse" />
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Call (954) 444-3293
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
};

export default FloatingCallButton;