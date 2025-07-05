import React from 'react';
import { Star, Award, Zap } from 'lucide-react';

const Brands = () => {
  const brands = [
    // Energy Drinks
    {
      name: "Red Bull",
      category: "Energy Drinks",
      image: "https://www.hatchwise.com/wp-content/uploads/2022/01/3cc6cb97608785.5ed0b7423bad9-1024x724.jpg",
      alt: "Red Bull Energy Drink Logo"
    },
    {
      name: "Celsius",
      category: "Energy Drinks", 
      image: "https://images.squarespace-cdn.com/content/v1/53f238bce4b0d0156e18c38a/2382bcaf-4c11-41fa-b30d-9699aec2cc77/CELH+LOGO1.png",
      alt: "Celsius Fitness Energy Drink Logo"
    },
    
    // Beer
    {
      name: "Modelo",
      category: "Beer",
      image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/032f9458-948b-49f0-b685-80e98492dbbc-retina-large.jpg",
      alt: "Modelo Beer Logo"
    },
    {
      name: "Busch",
      category: "Beer",
      image: "https://logos-world.net/wp-content/uploads/2022/03/Busch-Logo.png",
      alt: "Busch Beer Logo"
    },
    {
      name: "Corona",
      category: "Beer",
      image: "https://www.thepackagingcompany.us/knowledge-sharing/wp-content/uploads/sites/2/2019/08/ip-coronaextra-bottle-1024x512.jpg",
      alt: "Corona Beer Logo"
    },
    
    // Snacks & Sweets
    {
      name: "Sour Patch Kids",
      category: "Candies & Snacks",
      image: "https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/images/23986edd-ca73-42e5-ad20-082d365573ab/cdf844a3-628b-453a-837b-d2b79d82197a.jpeg",
      alt: "Sour Patch Kids Candy Logo"
    },
    {
      name: "Snickers",
      category: "Candies & Snacks",
      image: "https://logos-world.net/wp-content/uploads/2023/03/Snickers-Logo.png",
      alt: "Snickers Chocolate Bar Logo"
    },
    {
      name: "Reese's",
      category: "Candies & Snacks",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reese%27s_logo.svg/2560px-Reese%27s_logo.svg.png",
      alt: "Reese's Peanut Butter Cups Logo"
    },
    {
      name: "Ben & Jerry's",
      category: "Ice Cream",
      image: "https://dixiebelleicecream.com/wp-content/uploads/2024/02/ices-1024x384.png",
      alt: "Ben & Jerry's Ice Cream Logo"
    },
    
    // Tobacco
    {
      name: "Marlboro",
      category: "Cigarettes",
      image: "https://tobaccoinsider.com/wp-content/uploads/2024/08/image-38.png",
      alt: "Marlboro Cigarettes Logo"
    },
    {
      name: "Black & Mild",
      category: "Cigars",
      image: "https://www.bluegrasstobacco.com/blog/wp-content/uploads/2021/03/Black-Mild-Cigars.jpg",
      alt: "Black & Mild Cigars Logo"
    },
    {
      name: "Swisher Sweets",
      category: "Cigars",
      image: "https://www.tobaccostock.com/cdn/shop/articles/blog_banner_53a207a8-4b67-4361-ad51-5d11c3fb3f0d.png?v=1732684440&width=1920",
      alt: "Swisher Sweets Cigars Logo"
    },
    
    // Vapes
    {
      name: "HQD",
      category: "Vapes",
      image: "https://image.made-in-china.com/2f0j00AvYlUjuRvfGP/Hqd-Cuvie-Plus-2-0-9000puffs-Black-Dragon-Flavor-Wholesale-Disposable-Vapes.webp",
      alt: "HQD Disposable Vapes Logo"
    },
    {
      name: "Elf Bar",
      category: "Vapes",
      image: "https://vapzvape.com/cdn/shop/files/Parameters.jpg?v=1714981646",
      alt: "Elf Bar Vapes Logo"
    },
    {
      name: "Fume",
      category: "Vapes",
      image: "https://apvapeshop.com/cdn/shop/files/Untitleddesign-2024-02-21T142729.952.png?v=1708543889&width=1445",
      alt: "Fume Vapes Logo"
    },
    
    // Smoking Accessories
    {
      name: "Grinders",
      category: "Smoking Accessories",
      image: "https://cdn11.bigcommerce.com/s-3xlc0xutvv/images/stencil/2000x2000/products/12027/28878/smoke-design-grinder-display-with-led-lights-44ct__49428.1671057987.jpg?c=1",
      alt: "Premium Grinders"
    },
    {
      name: "Rolling Papers",
      category: "Smoking Accessories",
      image: "https://smythcannabis.com/wp-content/uploads/2024/02/jeff-w-OWAWcrpdH8w-unsplash-scaled.jpg",
      alt: "Rolling Papers"
    },
    {
      name: "Bong",
      category: "Smoking Accessories",
      image: "https://uvsmokeshop.com/cdn/shop/collections/Humboldt_1.jpg?v=1559780551",
      alt: "Rolling Trays"
    }
  ];

  return (
    <section id="brands" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Popular Brands We Carry
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We proudly stock trusted brands across energy drinks, beer, snacks, vapes, and smoking essentials.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50"
            >
              {/* Brand Image */}
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {brand.category}
                </div>
              </div>

              {/* Brand Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-200">
                  {brand.name}
                </h3>
              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">18+</h3>
            <p className="text-gray-300">Trusted Brands</p>
          </div>
          
          <div className="text-center bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">6</h3>
            <p className="text-gray-300">Product Categories</p>
          </div>
          
          <div className="text-center bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
            <

p className="text-gray-300">Drive-Thru Service</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See Your Favorite Brand?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always expanding our inventory. Call us to check if we have your preferred brand in stock, 
              or ask about special orders for items we don't currently carry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-954-444-3293"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 inline-flex items-center justify-center"
              >
                <Star className="h-5 w-5 mr-2" />
                Call to Check Stock
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
              >
                <Award className="h-5 w-5 mr-2" />
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;