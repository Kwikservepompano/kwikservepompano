import React from 'react';
import { Percent, Star, Clock, Gift } from 'lucide-react';

const SpecialDeals = () => {
  const deals = [
    {
      title: "Vape Special",
      description: "Buy 2 Get 1 Free on selected vape products",
      discount: "33% OFF",
      icon: <Gift className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      expires: "Limited Time"
    },
    {
      title: "Beer & Wine",
      description: "Mix & Match 6-pack deal on premium beverages",
      discount: "$5 OFF",
      icon: <Star className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
      expires: "This Week"
    },
    {
      title: "Snack Attack",
      description: "Any 3 candy bars or chips for special price",
      discount: "SAVE $3",
      icon: <Percent className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      expires: "Daily Deal"
    },
    {
      title: "Energy Boost",
      description: "Energy drinks and coffee combo deals",
      discount: "20% OFF",
      icon: <Clock className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      expires: "Morning Rush"
    }
  ];

  return (
    <section id="deals" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Special Deals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on our amazing offers and weekly specials
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deals.map((deal, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
            >
              {/* Deal Badge */}
              <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${deal.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                {deal.discount}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${deal.color} rounded-lg mb-4 text-white`}>
                {deal.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{deal.description}</p>

              {/* Expires */}
              <div className="flex items-center text-gray-400 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {deal.expires}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${deal.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Featured Deal Banner */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Weekend Special</h3>
            <Star className="h-8 w-8 text-yellow-400 ml-2" />
          </div>
          <p className="text-xl text-gray-300 mb-4">
            Florida Lottery Tickets - Buy 5 Get 1 Free Scratch-Off
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg">
            This Weekend Only!
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;