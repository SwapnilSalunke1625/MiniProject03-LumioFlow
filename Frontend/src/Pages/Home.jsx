import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import logo from "../assets/icons/logo.png";
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" color="green" className="mb-4" />
          <h2 className="text-xl font-semibold text-white">Loading LumioFlow...</h2>
        </div>
      </div>
    );
  }

  const features = [
    {
      title: "Smart Energy Monitoring",
      description: "Track your energy usage in real-time with detailed insights and analytics.",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cost Savings",
      description: "Reduce your energy bills with intelligent optimization and usage patterns.",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Environmental Impact",
      description: "Monitor and reduce your carbon footprint with sustainable energy practices.",
      icon: "🌱",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: 30, suffix: "%", label: "Average Energy Savings", icon: "⚡" },
    { value: 24, suffix: "/7", label: "Real-time Monitoring", icon: "📱" },
    { value: 10000, suffix: "+", label: "Happy Customers", icon: "👥" },
    { value: 99.9, suffix: "%", label: "System Uptime", icon: "🔄" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      quote: "The energy monitoring system has helped me reduce my bills by 40%. It's been a game-changer for my household."
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote: "The insights provided by this system have transformed how we manage our business's energy consumption."
    },
    {
      name: "Emma Davis",
      role: "Environmental Activist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      quote: "Finally, a solution that makes sustainable living accessible and easy to understand."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Connect Hardware",
      description: "Connect ESP32 with ACS712 current sensor and ZMPT101B voltage sensor to your electrical system.",
      icon: "🔌"
    },
    {
      step: 2,
      title: "Real-time Monitoring",
      description: "ESP32 continuously measures voltage and current, calculating power consumption in real-time.",
      icon: "📊"
    },
    {
      step: 3,
      title: "Data Processing",
      description: "Sensor data is processed and sent to our cloud platform for analysis and visualization.",
      icon: "💡"
    },
    {
      step: 4,
      title: "Smart Insights",
      description: "Get detailed insights about your power consumption patterns and optimization suggestions.",
      icon: "💰"
    }
  ];

  const hardwareSpecs = [
    {
      name: "ESP32",
      description: "Powerful microcontroller with WiFi and Bluetooth capabilities",
      features: ["Dual-core processor", "Built-in WiFi", "Low power consumption"],
      icon: "🖥️"
    },
    {
      name: "ACS712",
      description: "Hall-effect based current sensor for accurate current measurement",
      features: ["Isolated measurement", "High accuracy", "Wide current range"],
      icon: "⚡"
    },
    {
      name: "ZMPT101B",
      description: "Voltage transformer module for precise voltage monitoring",
      features: ["AC voltage measurement", "High precision", "Safe isolation"],
      icon: "📈"
    }
  ];

  const latestNews = [
    {
      title: "New AI Features Released",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      excerpt: "Our latest AI-powered features help you save even more energy with smart automation."
    },
    {
      title: "Partnership Announcement",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      excerpt: "We're excited to announce our partnership with leading smart home manufacturers."
    },
    {
      title: "Community Milestone",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      excerpt: "Our community has collectively saved over 1 million kWh of energy this month!"
    }
  ];

  const techStack = [
    {
      name: "ESP32",
      icon: "🖥️",
      description: "Powerful microcontroller with WiFi capabilities",
      features: ["Dual-core processor", "Built-in WiFi", "Low power consumption"]
    },
    {
      name: "ACS712",
      icon: "⚡",
      description: "Hall-effect current sensor",
      features: ["0-30A range", "High accuracy", "Isolated measurement"]
    },
    {
      name: "ZMPT101B",
      icon: "📊",
      description: "Voltage transformer module",
      features: ["AC voltage measurement", "High precision", "Safe isolation"]
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Frontend framework",
      features: ["Modern UI", "Real-time updates", "Responsive design"]
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend runtime",
      features: ["Real-time data processing", "WebSocket support", "RESTful API"]
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "Database",
      features: ["Time-series data", "Real-time analytics", "Scalable storage"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 1
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Smart Energy Management
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
                variants={itemVariants}
              >
                Take control of your energy consumption with our intelligent monitoring and optimization solutions.
              </motion.p>
              <motion.div 
                className="flex justify-center gap-6"
                variants={itemVariants}
              >
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
                >
                  Explore Products
                </Link>
                <Link
                  to="/energy-management"
                  className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Energy Flow */}
            <motion.div 
              className="relative h-64 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-full border-4 border-green-500/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-48 h-48 rounded-full border-4 border-green-500/50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-32 h-32 rounded-full border-4 border-green-500/70"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-4xl font-bold mb-2">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Why Choose Our Solution?
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                  }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              What Our Customers Say
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(34, 197, 94, 0.5)",
                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)"
                  }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-green-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(34, 197, 94, 0.5)"
                  }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hardware Integration Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Hardware Integration
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {hardwareSpecs.map((hardware, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(34, 197, 94, 0.5)"
                  }}
                >
                  <div className="text-4xl mb-4">{hardware.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{hardware.name}</h3>
                  <p className="text-gray-400 mb-4">{hardware.description}</p>
                  <ul className="space-y-2">
                    {hardware.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              variants={itemVariants}
            >
              <p className="text-gray-400 mb-4">
                Our system uses a combination of ESP32 microcontroller and precision sensors to provide accurate energy monitoring.
              </p>
              <Link
                to="/hardware-setup"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                View Hardware Setup Guide
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              variants={itemVariants}
            >
              Latest News
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {latestNews.map((news, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(34, 197, 94, 0.5)"
                  }}
                >
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-green-400 mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-400">{news.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300">
                Built with cutting-edge technologies for reliable and efficient energy monitoring
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl">{tech.icon}</span>
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Contact Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-2xl">💬</span>
            <span className="hidden md:inline">Contact Us</span>
          </Link>
        </motion.div>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-center"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Energy Management?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of satisfied customers who have already made the switch.
              </p>
              <Link
                to="/signup"
                className="inline-block bg-white text-green-500 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 transform hover:scale-105"
              >
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
