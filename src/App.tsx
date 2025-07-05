import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialDeals from './components/SpecialDeals';
import Products from './components/Products';
import Brands from './components/Brands';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <main>
        <Hero />
        <SpecialDeals />
        <Products />
        <Brands />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;