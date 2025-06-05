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
      
    </div>
    
  );
};

export default Products; 