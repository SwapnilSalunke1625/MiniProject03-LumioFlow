import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMicrochip, FaChartLine, FaShieldAlt, FaUsers, FaLightbulb, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaMicrochip className="text-4xl text-green-500" />,
      title: "ESP32-Powered",
      description: "Utilizing the powerful ESP32 microcontroller for real-time energy monitoring and data processing"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Real-Time Monitoring",
      description: "Track your energy consumption in real-time with precise measurements from ACS712 and ZMPT101B sensors"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-500" />,
      title: "Secure & Reliable",
      description: "Built with security in mind, ensuring your energy data is protected and system operation is reliable"
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "User-Friendly",
      description: "Intuitive interface designed for both technical and non-technical users"
    },
    {
      icon: <FaLightbulb className="text-4xl text-red-500" />,
      title: "Energy Efficient",
      description: "Helps identify and reduce energy waste, leading to significant cost savings"
    },
    {
      icon: <FaBolt className="text-4xl text-indigo-500" />,
      title: "Smart Integration",
      description: "Seamlessly integrates with existing smart home systems and IoT platforms"
    }
  ];

  const teamMembers = [
    {
      name: "Swapnil Salunke",
      role: "Project Lead",
      icon: <FaUserGraduate className="text-4xl text-green-500" />
    },
    {
      name: "Vishal Dhangare",
      role: "UI Developer",
      icon: <FaUserGraduate className="text-4xl text-blue-500" />
    },
    {
      name: "Laxmikant Tawde",
      role: "Backend Developer",
      icon: <FaUserGraduate className="text-4xl text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <br /><br />
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            About LumioFlow
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing energy monitoring with ESP32-based smart solutions for homes and businesses
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            We're dedicated to making energy monitoring accessible, efficient, and intelligent. 
            By combining the power of ESP32 microcontrollers with advanced sensors, we provide 
            real-time insights into energy consumption, helping users make informed decisions 
            about their energy usage and contribute to a more sustainable future.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hardware Components</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>ESP32 Microcontroller</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>ACS712 Current Sensor (0-30A)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>ZMPT101B Voltage Transformer</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>React Frontend</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Node.js Backend</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">•</span>
                  <span>MongoDB Database</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have questions about our ESP32 energy monitoring system? We'd love to hear from you.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 