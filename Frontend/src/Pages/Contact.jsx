import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icons/logo.png";

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

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="text-green-400">Email:</span> {info.email}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">Phone:</span> {info.phone}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400">Hours:</span> {info.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Offices Section */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                  <p className="text-gray-300 mb-2">{office.address}</p>
                  <p className="text-gray-300 mb-2">{office.state}</p>
                  <p className="text-gray-300">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                  placeholder="Your message"
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
        </div>
      </main>
    </div>
  );
};

export default Contact; 