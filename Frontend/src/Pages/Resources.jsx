import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaVideo, FaFileAlt, FaTools, FaCode, FaLightbulb, FaSearch, FaGithub, FaDiscord, FaQuestionCircle, FaYoutube } from 'react-icons/fa';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      category: "Documentation",
      icon: <FaBook className="text-3xl text-green-500" />,
      items: [
        {
          title: "ESP32 Energy Meter Guide",
          description: "Complete guide to setting up and using the ESP32-based energy meter",
          link: "#",
          tags: ["hardware", "setup", "guide"]
        },
        {
          title: "Hardware Specifications",
          description: "Detailed specifications of the ACS712 and ZMPT101B sensors",
          link: "#",
          tags: ["hardware", "specs", "sensors"]
        },
        {
          title: "API Documentation",
          description: "Comprehensive API documentation for the energy monitoring system",
          link: "#",
          tags: ["api", "integration", "docs"]
        }
      ]
    },
    {
      category: "Tutorials",
      icon: <FaVideo className="text-3xl text-blue-500" />,
      items: [
        {
          title: "Getting Started with ESP32",
          description: "Step-by-step tutorial for setting up your energy monitoring system",
          link: "https://www.youtube.com/watch?v=example1",
          tags: ["beginner", "setup", "tutorial"],
          videoId: "example1",
          duration: "15:30",
          thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg"
        },
        {
          title: "Hardware Installation Guide",
          description: "Video guide for installing and connecting the sensors",
          link: "https://www.youtube.com/watch?v=example2",
          tags: ["hardware", "installation", "video"],
          videoId: "example2",
          duration: "22:15",
          thumbnail: "https://img.youtube.com/vi/example2/maxresdefault.jpg"
        },
        {
          title: "Software Setup Tutorial",
          description: "Tutorial for configuring the software and dashboard",
          link: "https://www.youtube.com/watch?v=example3",
          tags: ["software", "configuration", "dashboard"],
          videoId: "example3",
          duration: "18:45",
          thumbnail: "https://img.youtube.com/vi/example3/maxresdefault.jpg"
        },
        {
          title: "Advanced Energy Monitoring",
          description: "Learn advanced techniques for energy monitoring and analysis",
          link: "https://www.youtube.com/watch?v=example4",
          tags: ["advanced", "monitoring", "analysis"],
          videoId: "example4",
          duration: "25:20",
          thumbnail: "https://img.youtube.com/vi/example4/maxresdefault.jpg"
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
          link: "#",
          tags: ["code", "esp32", "examples"]
        },
        {
          title: "API Integration",
          description: "Code samples for integrating with the energy monitoring API",
          link: "#",
          tags: ["api", "integration", "code"]
        },
        {
          title: "Dashboard Customization",
          description: "Examples for customizing the monitoring dashboard",
          link: "#",
          tags: ["dashboard", "customization", "ui"]
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
          link: "#",
          tags: ["optimization", "energy", "best-practices"]
        },
        {
          title: "Hardware Safety",
          description: "Safety guidelines for working with electrical components",
          link: "#",
          tags: ["safety", "hardware", "guidelines"]
        },
        {
          title: "Data Management",
          description: "Best practices for managing and analyzing energy data",
          link: "#",
          tags: ["data", "analysis", "management"]
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
          link: "#",
          tags: ["tools", "calibration", "sensors"]
        },
        {
          title: "Diagnostic Utilities",
          description: "Utilities for troubleshooting and system diagnostics",
          link: "#",
          tags: ["diagnostics", "troubleshooting", "tools"]
        },
        {
          title: "Data Export Tools",
          description: "Tools for exporting and analyzing energy data",
          link: "#",
          tags: ["data", "export", "analysis"]
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
          link: "#",
          tags: ["research", "technology", "monitoring"]
        },
        {
          title: "IoT in Energy Management",
          description: "Studies on IoT applications in energy management",
          link: "#",
          tags: ["iot", "research", "management"]
        },
        {
          title: "Smart Grid Integration",
          description: "Research on integrating with smart grid systems",
          link: "#",
          tags: ["smart-grid", "integration", "research"]
        }
      ]
    }
  ];

  const filteredResources = resources.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const filteredItems = filteredResources.flatMap(category =>
    category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  const renderResourceItem = (item) => {
    if (item.videoId) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-4xl text-red-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {item.duration}
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaVideo className="text-2xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      );
    }

    return (
      <a
        href={item.link}
        className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {resources.find(cat => cat.items.includes(item))?.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <br /> <br />
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            Resources
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive resources for energy monitoring and management. Find documentation, tutorials, code examples, and more.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-green-500/20 focus:border-green-500/50 focus:outline-none transition-all duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-green-500/20 focus:border-green-500/50 focus:outline-none transition-all duration-300"
            >
              <option value="all">All Categories</option>
              {resources.map((category, index) => (
                <option key={index} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {renderResourceItem(item)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#"
              className="group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <FaGithub className="text-3xl mb-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-2">GitHub Repository</h3>
                <p className="text-gray-400 text-sm">Access our open-source code and contribute</p>
              </div>
            </a>
            <a
              href="#"
              className="group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <FaDiscord className="text-3xl mb-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-400 text-sm">Join our community discussions and get help</p>
              </div>
            </a>
            <a
              href="#"
              className="group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <FaQuestionCircle className="text-3xl mb-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-2">Support Center</h3>
                <p className="text-gray-400 text-sm">Get help and support from our team</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources; 