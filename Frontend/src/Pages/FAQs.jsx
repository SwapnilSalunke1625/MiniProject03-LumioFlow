import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./assests/icons/logo.png";

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'products', label: 'Products' },
    { id: 'installation', label: 'Installation' },
    { id: 'billing', label: 'Billing' },
    { id: 'troubleshooting', label: 'Troubleshooting' }
  ];

  const faqs = {
    general: [
      {
        question: "What is Emporia Energy?",
        answer: "Emporia Energy is a leading provider of smart home energy management solutions. We offer products and services that help homeowners monitor, control, and optimize their energy usage for better efficiency and cost savings."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support team through multiple channels: via email at support@emporiaenergy.com, by phone at 1-800-XXX-XXXX during business hours, or through our Contact page on the website."
      },
      {
        question: "What are your business hours?",
        answer: "Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. For urgent matters, you can submit a request through our Help Center 24/7."
      }
    ],
    products: [
      {
        question: "What products do you offer?",
        answer: "We offer a range of energy management products including Energy Monitors, Smart Plugs, EV Chargers, and Home Batteries. Each product is designed to help you better understand and control your energy usage."
      },
      {
        question: "Do your products work with other smart home devices?",
        answer: "Yes, our products are compatible with major smart home platforms including Amazon Alexa, Google Home, and Apple HomeKit. You can easily integrate them into your existing smart home setup."
      },
      {
        question: "What is the warranty period for your products?",
        answer: "Most of our products come with a standard 2-year warranty. Some products may have extended warranty options available. Please check the specific product page or warranty documentation for detailed information."
      }
    ],
    installation: [
      {
        question: "Do I need professional installation?",
        answer: "While some of our products can be easily self-installed, others (like the Energy Monitor) may require professional installation by a licensed electrician. We provide detailed installation guides and can recommend certified installers in your area."
      },
      {
        question: "How long does installation typically take?",
        answer: "Installation time varies by product. Smart Plugs can be installed in minutes, while Energy Monitors typically take 1-2 hours for professional installation. Our support team can provide more specific estimates based on your setup."
      },
      {
        question: "What tools are needed for installation?",
        answer: "Required tools vary by product. For self-installation products like Smart Plugs, no tools are needed. For professional installation products, your electrician will have the necessary tools."
      }
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For business purchases, we also offer invoice payment options."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied, you can return the product in its original condition for a full refund, minus shipping costs."
      },
      {
        question: "Are there any subscription fees?",
        answer: "Basic features of our products are available without any subscription. However, we offer premium features through our optional subscription plans. Visit our pricing page for more details."
      }
    ],
    troubleshooting: [
      {
        question: "My device isn't connecting to Wi-Fi",
        answer: "First, ensure your device is within range of your Wi-Fi router and that you're using a 2.4GHz network. Try resetting the device by holding the reset button for 10 seconds. If issues persist, consult our troubleshooting guide or contact support."
      },
      {
        question: "The app isn't showing current data",
        answer: "Check your internet connection and ensure your device is properly connected to Wi-Fi. Try closing and reopening the app. If the issue continues, try logging out and back in, or reinstalling the app."
      },
      {
        question: "How do I reset my device?",
        answer: "Most devices can be reset by holding the reset button for 10 seconds until the LED indicator flashes. Specific reset instructions for each product can be found in the product manual or our online Help Center."
      }
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our products and services.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openQuestions[index] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    openQuestions[index] ? 'py-4' : 'h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/help-center"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default FAQs; 