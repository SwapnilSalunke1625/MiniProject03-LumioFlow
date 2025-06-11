import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/icons/logo.png';
import AuthPopup from './AuthPopup';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAuth = () => {
    setIsAuthOpen(!isAuthOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                LumioFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/energy-management" className="text-gray-300 hover:text-white transition-colors">
                Energy Management
              </Link>
              <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleAuth}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/energy-management"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Energy Management
              </Link>
              <Link
                to="/resources"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <button
                onClick={() => {
                  toggleMenu();
                  toggleAuth();
                }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Auth Popup */}
      <AuthPopup isOpen={isAuthOpen} onClose={toggleAuth} />
    </>
  );
};

export default Navbar;
