import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaFileAlt, FaTools, FaCode, FaLightbulb } from 'react-icons/fa';

const Resources = () => {
  const resources = [
    {
      category: "Documentation",
      icon: <FaBook className="text-3xl text-green-500" />,
      items: [
        {
          title: "ESP32 Energy Meter Guide",
          description: "Complete guide to setting up and using the ESP32-based energy meter",
          link: "#"
        },
        {
          title: "Hardware Specifications",
          description: "Detailed specifications of the ACS712 and ZMPT101B sensors",
          link: "#"
        },
        {
          title: "API Documentation",
          description: "Comprehensive API documentation for the energy monitoring system",
          link: "#"
        }
      ]
    },
    {
      category: "Tutorials",
      icon: <FaVideo className="text-3xl text-blue-500" />,
      items: [
        {
          title: "Getting Started",
          description: "Step-by-step tutorial for setting up your energy monitoring system",
          link: "#"
        },
        {
          title: "Hardware Installation",
          description: "Video guide for installing and connecting the sensors",
          link: "#"
        },
        {
          title: "Software Setup",
          description: "Tutorial for configuring the software and dashboard",
          link: "#"
        }
      ]
    },
    {
      category: "Code Examples",
      icon: <FaCode className="text-3xl text-purple-500" />,
      items: [
        {
          title: "ESP32 Code Samples",
          description: "Example code for ESP32 energy monitoring implementation",
          link: "#"
        },
        {
          title: "API Integration",
          description: "Code samples for integrating with the energy monitoring API",
          link: "#"
        },
        {
          title: "Dashboard Customization",
          description: "Examples for customizing the monitoring dashboard",
          link: "#"
        }
      ]
    },
    {
      category: "Best Practices",
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      items: [
        {
          title: "Energy Optimization",
          description: "Best practices for optimizing energy consumption",
          link: "#"
        },
        {
          title: "Hardware Safety",
          description: "Safety guidelines for working with electrical components",
          link: "#"
        },
        {
          title: "Data Management",
          description: "Best practices for managing and analyzing energy data",
          link: "#"
        }
      ]
    },
    {
      category: "Tools & Utilities",
      icon: <FaTools className="text-3xl text-red-500" />,
      items: [
        {
          title: "Calibration Tools",
          description: "Tools for calibrating sensors and ensuring accuracy",
          link: "#"
        },
        {
          title: "Diagnostic Utilities",
          description: "Utilities for troubleshooting and system diagnostics",
          link: "#"
        },
        {
          title: "Data Export Tools",
          description: "Tools for exporting and analyzing energy data",
          link: "#"
        }
      ]
    },
    {
      category: "Research Papers",
      icon: <FaFileAlt className="text-3xl text-indigo-500" />,
      items: [
        {
          title: "Energy Monitoring Systems",
          description: "Research on modern energy monitoring technologies",
          link: "#"
        },
        {
          title: "IoT in Energy Management",
          description: "Studies on IoT applications in energy management",
          link: "#"
        },
        {
          title: "Smart Grid Integration",
          description: "Research on integrating with smart grid systems",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Resources
          </h1>
          <p className="text-gray-400">
            Comprehensive resources for energy monitoring and management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + itemIndex * 0.1 }}
                    className="group"
                  >
                    <a
                      href={item.link}
                      className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#"
              className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">GitHub Repository</h3>
              <p className="text-gray-400 text-sm">Access our open-source code</p>
            </a>
            <a
              href="#"
              className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-400 text-sm">Join our community discussions</p>
            </a>
            <a
              href="#"
              className="text-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">Support Center</h3>
              <p className="text-gray-400 text-sm">Get help and support</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources; 