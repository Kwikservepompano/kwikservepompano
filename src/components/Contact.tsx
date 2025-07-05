import React from 'react';
import { Phone, MapPin, Clock, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  // Universal map link that works with Google Maps, Apple Maps, and other navigation apps
  const mapLink = "https://maps.google.com/?q=111+SW+6th+St,+Pompano+Beach,+FL+33060";
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Visit Us Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find us in Pompano Beach, Florida - Your convenient drive-thru destination
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Store Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <a 
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                    >
                      111 SW 6th St<br />
                      Pompano Beach, FL 33060
                      <span className="block text-sm text-cyan-400 mt-1">
                        📍 Tap for directions
                      </span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+1-954-444-3293" 
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      (954) 444-3293
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>7 Days a Week</p>
                      <p>7:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:info@kwikserve.com" 
                      className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                    >
                      info@kwikserve.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Visit?</h3>
              <p className="text-gray-300 mb-6">
                Drive up and let us serve you today! No appointment needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+1-954-444-3293"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 inline-flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a 
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Location</h3>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8234567890123!2d-80.1234567!3d26.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9006986667f8b%3A0xde6d07e4ad07b0d7!2s111%20SW%206th%20St%2C%20Pompano%20Beach%2C%20FL%2033060!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 contrast-110"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>
              
              {/* Click overlay for mobile map interaction */}
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors duration-200 group"
              >
                <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold text-sm">
                  <Navigation className="h-4 w-4 inline mr-2" />
                  Open in Maps
                </div>
              </a>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm mb-2">
                Serving Pompano Beach and surrounding areas
              </p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
              >
                <Navigation className="h-4 w-4 mr-1" />
                Open in your preferred map app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;