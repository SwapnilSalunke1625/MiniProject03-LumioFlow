import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assests/icons/logo.png";

const Contact = () => {
  const contactInfo = [
    {
      title: "Customer Support",
      email: "support@emporiaenergy.com",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri, 9am-6pm EST"
    },
    {
      title: "Sales Inquiries",
      email: "sales@emporiaenergy.com",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri, 8am-8pm EST"
    },
    {
      title: "Technical Support",
      email: "tech@emporiaenergy.com",
      phone: "+1 (555) 456-7890",
      hours: "24/7 Support"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Energy Street, Suite 100",
      state: "NY 10001",
      phone: "+1 (555) 111-2222"
    },
    {
      city: "San Francisco",
      address: "456 Green Avenue, Floor 5",
      state: "CA 94105",
      phone: "+1 (555) 333-4444"
    },
    {
      city: "London",
      address: "789 Power Road, Unit 3",
      state: "UK EC2A 4NE",
      phone: "+44 20 1234 5678"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help. Choose the best way to reach us below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <p className="text-gray-300 mb-2">{info.email}</p>
                <p className="text-gray-300 mb-2">{info.phone}</p>
                <p className="text-gray-400 text-sm">{info.hours}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  <p className="text-gray-300 mb-2">{office.address}</p>
                  <p className="text-gray-300 mb-2">{office.state}</p>
                  <p className="text-gray-300">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Check our FAQ section for quick answers.
            </p>
            <Link
              to="/faqs"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View FAQs
            </Link>
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
                <li><Link to="/products" className="hover:text-green-400 transition">EV Charger</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Energy Monitor</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Smart Plug</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition">Home Battery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-green-400 transition">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-green-400 transition">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/help-center" className="hover:text-green-400 transition">Help Center</Link></li>
                <li><Link to="/faqs" className="hover:text-green-400 transition">FAQs</Link></li>
                <li><Link to="/warranty" className="hover:text-green-400 transition">Warranty</Link></li>
                <li><Link to="/returns" className="hover:text-green-400 transition">Returns</Link></li>
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

export default Contact; 