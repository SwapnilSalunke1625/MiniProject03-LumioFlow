import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMicrochip, FaChartLine, FaShieldAlt, FaUsers, FaLightbulb, FaUserGraduate, FaGithub, FaLinkedin, FaTwitter, FaAward, FaRocket, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      image: "https://via.placeholder.com/150",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      bio: "Passionate about IoT and energy management solutions"
    },
    {
      name: "Vishal Dhangare",
      role: "UI Developer",
      image: "https://via.placeholder.com/150",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      bio: "Expert in modern web technologies and user experience"
    },
    {
      name: "Laxmikant Tawde",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      bio: "Specialized in scalable backend systems and IoT integration"
    }
  ];

  const achievements = [
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "Innovation Award",
      description: "Recognized for innovative energy monitoring solution"
    },
    {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: "Rapid Growth",
      description: "Serving 1000+ customers worldwide"
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Industry Partnerships",
      description: "Collaborating with leading energy companies"
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
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
          <div className="relative">
            <br /><br />
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              About LumioFlow
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionizing energy monitoring with ESP32-based smart solutions for homes and businesses
            </p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              We're dedicated to making energy monitoring accessible, efficient, and intelligent. 
              By combining the power of ESP32 microcontrollers with advanced sensors, we provide 
              real-time insights into energy consumption, helping users make informed decisions 
              about their energy usage and contribute to a more sustainable future.
            </p>
          </div>
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
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
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

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center group"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-green-500/20 group-hover:border-green-500/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub className="text-2xl" />
                      </a>
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin className="text-2xl" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                        <FaTwitter className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
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
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 