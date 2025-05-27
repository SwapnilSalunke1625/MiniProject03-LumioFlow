import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/icons/logo.png";
import evChargerIcon from "./../assets/icons/evcharger.png";
import em from "./../assets/icons/em.png";
import sp from "./../assets/icons/sp.png";
import HB from "./../assets/icons/HB.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "EV Charger",
      description: "Fast and efficient electric vehicle charging solution for your home.",
      price: "₹45,000",
      image: evChargerIcon,
      features: [
        "Level 2 charging capability",
        "Smart scheduling",
        "Energy usage tracking",
        "Weather-resistant design"
      ]
    },
    {
      id: 2,
      name: "Energy Monitor",
      description: "Real-time energy monitoring and optimization for your home.",
      price: "₹12,000",
      image: em,
      features: [
        "Real-time energy tracking",
        "Smart alerts",
        "Energy usage reports",
        "Mobile app integration"
      ]
    },
    {
      id: 3,
      name: "Smart Plug",
      description: "Control and monitor your appliances remotely.",
      price: "₹2,500",
      image: sp,
      features: [
        "Remote control",
        "Energy monitoring",
        "Scheduling",
        "Voice assistant compatible"
      ]
    },
    {
      id: 4,
      name: "Home Battery",
      description: "Store solar energy and power your home during outages.",
      price: "₹1,50,000",
      image: HB,
      features: [
        "Solar energy storage",
        "Backup power",
        "Grid independence",
        "Long lifespan"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <Link to="/" className="hover:text-green-400 transition">HOME</Link>
            <Link to="/products" className="text-green-400">PRODUCTS</Link>
            <Link to="/energy-management" className="hover:text-green-400 transition">HOME ENERGY MANAGEMENT</Link>
            <Link to="/resources" className="hover:text-green-400 transition">RESOURCES</Link>
            <Link to="/about" className="hover:text-green-400 transition">ABOUT</Link>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg">
            SHOP
          </button>
        </div>
      </header>

      <br /><br /><br />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-6 mb-4">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
                  <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-green-400 text-xl font-semibold">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-24 h-auto mb-2" />
            <span className="text-lg font-semibold">Emporia Energy</span>
            <span className="text-sm text-gray-400 mt-1">Empowering your home, empowering your future.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2">Products</h3>
              <ul className="space-y-1 text-gray-300">
                <li>EV Charger</li>
                <li>Energy Monitor</li>
                <li>Smart Plug</li>
                <li>Home Battery</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1 text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Warranty</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} Emporia Energy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Products; 