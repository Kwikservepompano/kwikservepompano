import React from 'react';
import { Car, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Lightning Storm Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        
        {/* Electric Energy Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Lightning Bolts */}
        <div className="absolute top-20 left-20 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-32 w-1 h-24 bg-gradient-to-t from-purple-400 to-transparent opacity-40 animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* SUPERHERO MOVIE TITLE */}
          <div className="mb-12 relative">
            {/* Background Glow Layer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-black opacity-10 text-white blur-lg select-none tracking-wider">
                KWIK SERVE
              </h1>
            </div>
            
            {/* Main Superhero Title */}
            <div className="relative perspective-1000">
              <h1 className="relative text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-wider transform-gpu">
                {/* Deep Shadow Layer */}
                <span className="absolute inset-0 text-black/80 transform translate-x-2 translate-y-2 blur-sm">
                  KWIK SERVE
                </span>
                
                {/* Chrome/Metal Base Layer */}
                <span className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                  KWIK SERVE
                </span>
                
                {/* Electric Blue Highlight */}
                <span className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-400 to-cyan-600 bg-clip-text text-transparent opacity-80">
                  KWIK SERVE
                </span>
                
                {/* Lightning Energy Layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent animate-pulse">
                  KWIK SERVE
                </span>
                
                {/* Top Shine/Reflection */}
                <span className="relative bg-gradient-to-b from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                  KWIK SERVE
                </span>
                
                {/* Electric Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-md animate-pulse"></div>
              </h1>
              
              {/* 3D Extrusion Lines */}
              <div className="absolute top-0 left-0 w-full h-full">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-800/20 transform-gpu"
                    style={{
                      transform: `translate(${i * 2}px, ${i * 2}px)`,
                      zIndex: -i
                    }}
                  >
                    KWIK SERVE
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle with Comic Book Style */}
            <div className="relative mb-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4 relative">
                <span className="absolute inset-0 text-black/60 transform translate-x-1 translate-y-1">
                  Convenience Store
                </span>
                <span className="relative bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                  Convenience Store
                </span>
              </div>
            </div>
            
            {/* DRIVE THRU Badge - Superhero Style */}
            <div className="inline-block relative group mb-8">
              {/* Badge Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 scale-110"></div>
              
              {/* Badge Background */}
              <div className="relative px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full border-4 border-yellow-300/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                {/* Inner Glow */}
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full"></div>
                
                {/* Text */}
                <span className="relative text-white font-black text-xl sm:text-2xl tracking-widest drop-shadow-lg">
                  ⚡ DRIVE THRU ⚡
                </span>
              </div>
              
              {/* Lightning Bolts */}
              <div className="absolute -top-2 -left-2 text-yellow-300 text-2xl animate-pulse">⚡</div>
              <div className="absolute -bottom-2 -right-2 text-orange-400 text-2xl animate-pulse delay-500">⚡</div>
            </div>
          </div>

          {/* Enhanced Tagline with Movie Style */}
          <div className="relative mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light relative">
              <span className="absolute inset-0 text-black/50 transform translate-x-1 translate-y-1">
                Everything You Need Without Leaving Your Seat
              </span>
              <span className="relative bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
                Everything You Need Without Leaving Your Seat
              </span>
            </p>
            
            {/* Decorative Lightning */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent hidden lg:block animate-pulse"></div>
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent hidden lg:block animate-pulse delay-500"></div>
          </div>

          {/* Superhero Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="group relative bg-gray-800/60 border-2 border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Car className="h-10 w-10 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce relative z-10" />
              <h3 className="text-white font-bold mb-2 text-lg relative z-10">Drive-Thru Only</h3>
              <p className="text-gray-300 text-sm relative z-10">Stay in your car for ultimate convenience</p>
              
              {/* Lightning Effect */}
              <div className="absolute top-2 right-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</div>
            </div>
            
            <div className="group relative bg-gray-800/60 border-2 border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 delay-100">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Clock className="h-10 w-10 text-purple-400 mx-auto mb-4 group-hover:animate-spin relative z-10" />
              <h3 className="text-white font-bold mb-2 text-lg relative z-10">Fast Service</h3>
              <p className="text-gray-300 text-sm relative z-10">Quick stops for busy lifestyles</p>
              
              <div className="absolute top-2 right-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</div>
            </div>
            
            <div className="group relative bg-gray-800/60 border-2 border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 hover:rotate-1 delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <MapPin className="h-10 w-10 text-green-400 mx-auto mb-4 group-hover:animate-pulse relative z-10" />
              <h3 className="text-white font-bold mb-2 text-lg relative z-10">Pompano Beach, FL</h3>
              <p className="text-gray-300 text-sm relative z-10">Serving the local community</p>
              
              <div className="absolute top-2 right-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</div>
            </div>
          </div>

          {/* Superhero Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('deals')}
              className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 overflow-hidden border-2 border-cyan-300/50"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Lightning Sweep */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center">
                ⚡ View Special Deals ⚡
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="group relative border-3 border-yellow-400 text-yellow-300 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 overflow-hidden bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              
              <span className="relative z-10 flex items-center">
                🚀 How It Works 🚀
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-12 border-3 border-cyan-400 rounded-full flex justify-center bg-gray-900/50 backdrop-blur-sm">
            <div className="w-2 h-4 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 border-3 border-cyan-400/30 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -left-1 w-10 h-14 border-2 border-purple-400/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Custom CSS for superhero effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
        
        @keyframes lightning {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-lightning {
          animation: lightning 2s infinite;
        }
        
        /* 3D Text Shadow Effect */
        .text-3d {
          text-shadow: 
            1px 1px 0 #333,
            2px 2px 0 #333,
            3px 3px 0 #333,
            4px 4px 0 #333,
            5px 5px 0 #333,
            6px 6px 10px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;