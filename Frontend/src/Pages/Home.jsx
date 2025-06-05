import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homeVideo from "../assets/videos/homevideo.mp4";
import logo from "../assets/icons/logo.png";
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <LoadingSpinner size="lg" color="green" className="mb-4" />
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
    { value: "30%", label: "Average Energy Savings", icon: "⚡" },
    { value: "24/7", label: "Real-time Monitoring", icon: "📱" },
    { value: "10k+", label: "Happy Customers", icon: "👥" },
    { value: "99.9%", label: "System Uptime", icon: "🔄" }
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <img src={logo} alt="LumioFlow Logo" className="h-24 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                LumioFlow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your all-in-one solution for efficient workflow management and team collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signin"
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the content */}
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
                    <motion.div
                      className="text-4xl mb-2"
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
                      {stat.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400">{stat.label}</p>
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
    </div>
  );
};

export default Home;
