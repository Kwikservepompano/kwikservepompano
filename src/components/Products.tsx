import React from 'react';
import { Beer, Coffee, Candy, Cigarette, Ticket, ShoppingBag, Bot as Bottle, Slack as Snack } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: "Beer & Wine",
      icon: <Beer className="h-8 w-8" />,
      items: ["Craft Beer", "Domestic Beer", "Wine Selection", "Hard Seltzers"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Beverages",
      icon: <Coffee className="h-8 w-8" />,
      items: ["Energy Drinks", "Coffee", "Sodas", "Water & Juices"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Vapes & Tobacco",
      icon: <Cigarette className="h-8 w-8" />,
      items: ["Disposable Vapes", "Vape Pods", "Cigarettes", "Cigars"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Florida Lottery",
      icon: <Ticket className="h-8 w-8" />,
      items: ["Scratch-Offs", "Daily Games", "Powerball", "Mega Millions"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Snacks & Candy",
      icon: <Candy className="h-8 w-8" />,
      items: ["Candy Bars", "Chips", "Nuts", "Gum & Mints"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Convenience Items",
      icon: <ShoppingBag className="h-8 w-8" />,
      items: ["Phone Chargers", "Toiletries", "Medicine", "Automotive"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Products & Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need for your daily convenience, available through our drive-thru
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon & Title */}
              <div className="flex items-center mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mr-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You Need?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Just ask! We're constantly updating our inventory to serve you better. 
              If we don't have it, we'll do our best to get it for you.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;