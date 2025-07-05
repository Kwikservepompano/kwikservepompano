import React from 'react';
import { Car, MessageCircle, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Drive Up",
      description: "Pull up to our drive-thru window. No need to get out of your car - stay comfortable and relaxed.",
      icon: <Car className="h-12 w-12" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "02", 
      title: "Tell Us What You Need",
      description: "Let our friendly cashier know what products you're looking for. We'll help you find exactly what you need.",
      icon: <MessageCircle className="h-12 w-12" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "We Bring It to Your Car",
      description: "Sit back while we gather your items and bring them directly to your window. Quick, easy, and convenient!",
      icon: <Package className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our simple 3-step process makes shopping effortless
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-full text-white font-bold text-xl mb-6 relative z-10`}>
                  {step.number}
                </div>

                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 transform translate-x-8"></div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 text-white shadow-lg`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Drive-Thru Convenience?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-cyan-400 text-3xl font-bold mb-2">⚡</div>
                <h4 className="text-white font-semibold mb-2">Fast Service</h4>
                <p className="text-gray-300 text-sm">Average service time under 3 minutes</p>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-3xl font-bold mb-2">🚗</div>
                <h4 className="text-white font-semibold mb-2">Stay Comfortable</h4>
                <p className="text-gray-300 text-sm">No need to leave your car</p>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-3xl font-bold mb-2">☂️</div>
                <h4 className="text-white font-semibold mb-2">All Weather</h4>
                <p className="text-gray-300 text-sm">Rain or shine, we've got you covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;