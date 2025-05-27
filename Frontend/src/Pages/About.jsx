import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../assets/icons/logo.png";

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in renewable energy, John leads our vision for sustainable energy solutions.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Sarah brings her expertise in smart home technology and IoT to drive our technical innovation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "Michael ensures our products meet the highest standards of quality and user experience.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success",
      bio: "Emily leads our customer support team, ensuring every customer gets the best experience.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize home energy management"
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Released our flagship energy monitoring system"
    },
    {
      year: "2022",
      title: "Market Expansion",
      description: "Expanded to 10 major cities across the country"
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for breakthrough in smart energy technology"
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
            <Link to="/about" className="text-green-400">ABOUT</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make home energy management smarter, more efficient, and more sustainable for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-900 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  At Emporia Energy, we believe that everyone should have access to smart, efficient energy management solutions. Our mission is to empower homeowners with the tools and knowledge they need to take control of their energy usage, reduce costs, and contribute to a more sustainable future.
                </p>
                <p className="text-gray-300">
                  Through innovative technology and user-friendly solutions, we're making it easier than ever to monitor, manage, and optimize home energy consumption.
                </p>
              </div>
              <div className="bg-green-500/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Innovation in energy technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Environmental sustainability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Customer empowerment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Quality and reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/20"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-8">
                      <div className="w-1/2 text-right">
                        <h3 className="text-2xl font-bold text-green-400">{milestone.year}</h3>
                        <p className="text-xl font-semibold">{milestone.title}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-black"></div>
                      </div>
                      <div className="w-1/2">
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the energy revolution. Together, we can create a more sustainable future.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
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
                <li><Link to="/resources" className="hover:text-green-400 transition">Resources</Link></li>
                <li><Link to="/energy-management" className="hover:text-green-400 transition">Energy Management</Link></li>
                <li><Link to="/login" className="hover:text-green-400 transition">Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/resources" className="hover:text-green-400 transition">Help Center</Link></li>
                <li><Link to="/resources" className="hover:text-green-400 transition">FAQs</Link></li>
                <li><Link to="/resources" className="hover:text-green-400 transition">Warranty</Link></li>
                <li><Link to="/resources" className="hover:text-green-400 transition">Returns</Link></li>
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

export default About; 