import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/icons/logo.png";

const Resources = () => {
  const resources = [
    {
      title: "Energy Saving Guide",
      description: "Learn how to optimize your home's energy usage and reduce your bills.",
      type: "Guide",
      link: "#"
    },
    {
      title: "Solar Power Basics",
      description: "Understanding solar energy and how it can benefit your home.",
      type: "Article",
      link: "#"
    },
    {
      title: "Smart Home Integration",
      description: "How to integrate our products with your existing smart home setup.",
      type: "Tutorial",
      link: "#"
    },
    {
      title: "Energy Efficiency Tips",
      description: "Practical tips for making your home more energy efficient.",
      type: "Tips",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "How does the energy monitoring system work?",
      answer: "Our system uses advanced sensors to track your home's energy usage in real-time, providing detailed insights and recommendations for optimization."
    },
    {
      question: "Can I integrate with my existing smart home devices?",
      answer: "Yes, our products are compatible with most major smart home platforms including Google Home, Amazon Alexa, and Apple HomeKit."
    },
    {
      question: "What kind of savings can I expect?",
      answer: "On average, our customers see a 20-30% reduction in their energy bills within the first three months of using our system."
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
            <Link to="/energy-management" className="hover:text-green-400 transition">HOME ENERGY MANAGEMENT</Link>
            <Link to="/resources" className="text-green-400">RESOURCES</Link>
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of guides, articles, and tutorials to help you make the most of your home energy management system.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{resource.title}</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-green-400 hover:text-green-300 transition">
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest energy-saving tips and product updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
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

export default Resources; 