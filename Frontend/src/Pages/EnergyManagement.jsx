import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/icons/logo.png";
import energyVisual from "./../assets/icons/energy-circle.png";

const EnergyManagement = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track your energy usage in real-time with detailed insights and analytics.",
      icon: "📊"
    },
    {
      title: "Smart Automation",
      description: "Automate your home's energy usage based on your preferences and schedule.",
      icon: "🤖"
    },
    {
      title: "Cost Savings",
      description: "Reduce your energy bills with intelligent optimization and usage patterns.",
      icon: "💰"
    },
    {
      title: "Environmental Impact",
      description: "Monitor and reduce your carbon footprint with sustainable energy practices.",
      icon: "🌱"
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
            <Link to="/products" className="hover:text-green-400 transition">PRODUCTS</Link>
            <Link to="/energy-management" className="text-green-400">HOME ENERGY MANAGEMENT</Link>
            <Link to="/resources" className="hover:text-green-400 transition">RESOURCES</Link>
            <Link to="/about" className="hover:text-green-400 transition">ABOUT</Link>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg">
            SHOP
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Energy Management</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your home's energy usage with our comprehensive management solution.
              Monitor, optimize, and save on your energy consumption.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Install</h3>
                <p className="text-gray-300">Easy installation of our energy monitoring devices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Monitor</h3>
                <p className="text-gray-300">Track your energy usage in real-time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Optimize</h3>
                <p className="text-gray-300">Automatically optimize your energy consumption</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of homeowners who are already saving on their energy bills.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Get Started Now
            </button>
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

export default EnergyManagement; 