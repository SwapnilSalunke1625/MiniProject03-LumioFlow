import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt, FaHome, FaBox, FaChartLine, FaBook, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
import logo from '../assets/icons/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/products', label: 'Products', icon: <FaBox /> },
    { path: '/energy-management', label: 'Energy Management', icon: <FaChartLine /> },
    { path: '/resources', label: 'Resources', icon: <FaBook /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-green-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.img
                src={logo}
                alt="LumioFlow"
                className="h-10 w-10 filter drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                whileHover={{ scale: 1.05 }}
              >
                LumioFlow
              </motion.span>
              <motion.div
                className="h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group ${
                  location.pathname === link.path
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative flex items-center space-x-2 text-sm font-medium tracking-wide">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: location.pathname === link.path ? '100%' : 0 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </span>
              </Link>
            ))}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <FaSignInAlt className="text-lg" />
              <span className="relative z-10">Sign In</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 relative"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-20 right-0 w-72 h-screen bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-green-500/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/25'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaSignInAlt className="text-lg" />
                <span>Sign In</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
