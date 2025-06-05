import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icons/logo.png";

const HelpCenter = () => {
  const categories = [
    {
      title: "Getting Started",
      articles: [
        {
          title: "How to Set Up Your Energy Monitor",
          description: "Step-by-step guide to installing and configuring your energy monitoring system."
        },
        {
          title: "Connecting to Your Smart Home",
          description: "Learn how to integrate your energy management system with popular smart home platforms."
        },
        {
          title: "Understanding Your Dashboard",
          description: "A comprehensive guide to reading and interpreting your energy usage data."
        }
      ]
    },
    {
      title: "Troubleshooting",
      articles: [
        {
          title: "Common Installation Issues",
          description: "Solutions to frequent problems encountered during setup."
        },
        {
          title: "Connection Problems",
          description: "How to resolve connectivity issues with your devices."
        },
        {
          title: "Data Accuracy",
          description: "Tips for ensuring accurate energy usage measurements."
        }
      ]
    },
    {
      title: "Product Guides",
      articles: [
        {
          title: "EV Charger Manual",
          description: "Complete guide to using and maintaining your EV charger."
        },
        {
          title: "Smart Plug Features",
          description: "Explore all the features and capabilities of your smart plug."
        },
        {
          title: "Home Battery Setup",
          description: "How to properly set up and optimize your home battery system."
        }
      ]
    }
  ];

  const popularTopics = [
    "Energy Savings Tips",
    "Mobile App Guide",
    "Warranty Information",
    "Product Compatibility",
    "Software Updates",
    "Energy Reports"
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to your questions and learn how to make the most of your energy management system.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-400 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Topics</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {popularTopics.map((topic, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-all duration-300"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Categories and Articles */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.articles.map((article, idx) => (
                    <div key={idx} className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                      <p className="text-gray-300 mb-4">{article.description}</p>
                      <Link
                        to="#"
                        className="text-green-400 hover:text-green-300 transition inline-flex items-center gap-2"
                      >
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to assist you 24/7.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default HelpCenter; 