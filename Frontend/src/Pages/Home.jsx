import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/icons/logo.png";
// import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time for demo purposes
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-black flex items-center justify-center">
  //       <div className="text-center">
  //         <LoadingSpinner size="lg" color="green" className="mb-4" />
  //         <h2 className="text-xl font-semibold text-white">Loading LumioFlow...</h2>
  //       </div>
  //     </div>
  //   );
  // }

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
  );
};

export default Home;
