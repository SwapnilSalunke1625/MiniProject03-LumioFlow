import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/icons/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Products', path: '/products' },
      { name: 'Energy Management', path: '/energy-management' },
      { name: 'Resources', path: '/resources' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ],
    social: [
      { icon: <FaFacebook />, url: '#' },
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
      { icon: <FaInstagram />, url: '#' }
    ]
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'contact@lumioflow.com' },
    { icon: <FaPhone />, text: '+1 (555) 123-4567' },
    { icon: <FaMapMarkerAlt />, text: '123 Energy Street, Tech City' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="LumioFlow Logo"
                className="h-10 w-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                LumioFlow
              </span>
            </Link>
            <p className="text-gray-400">
              Empowering sustainable energy management through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-3 text-gray-400"
                >
                  <span className="text-green-400">{contact.icon}</span>
                  <span>{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} LumioFlow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
