import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMicrochip, FaChartLine, FaMobileAlt, FaShieldAlt, FaDatabase, FaWifi } from 'react-icons/fa';

const Products = () => {
  const features = [
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Real-time Power Monitoring",
      description: "Accurate measurement of voltage, current, and power consumption using ACS712 and ZMPT101B sensors"
    },
    {
      icon: <FaMicrochip className="w-6 h-6" />,
      title: "ESP32 Powered",
      description: "Powered by ESP32 microcontroller for reliable performance and wireless connectivity"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Energy Analytics",
      description: "Detailed insights into your power consumption patterns and trends"
    },
    {
      icon: <FaMobileAlt className="w-6 h-6" />,
      title: "Mobile App Integration",
      description: "Monitor your energy usage from anywhere through our user-friendly mobile application"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Safety Features",
      description: "Built-in protection against overcurrent and voltage fluctuations"
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Data Logging",
      description: "Store historical data for analysis and optimization of energy usage"
    }
  ];

  const specifications = [
    { label: "Microcontroller", value: "ESP32" },
    { label: "Current Sensor", value: "ACS712" },
    { label: "Voltage Sensor", value: "ZMPT101B" },
    { label: "Connectivity", value: "WiFi 2.4GHz" },
    { label: "Operating Voltage", value: "3.3V" },
    { label: "Measurement Range", value: "0-30A, 0-250V" },
    { label: "Accuracy", value: "±1%" },
    { label: "Update Rate", value: "1 second" }
  ];

  const components = [
    {
      name: "ESP32",
      description: "Main microcontroller for processing and WiFi connectivity",
      connections: ["ACS712", "ZMPT101B", "Display"]
    },
    {
      name: "ACS712",
      description: "Current sensor for measuring AC/DC current",
      connections: ["ESP32", "Power Line"]
    },
    {
      name: "ZMPT101B",
      description: "Voltage sensor for measuring AC voltage",
      connections: ["ESP32", "Power Line"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Smart Energy Meter
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor your power consumption in real-time with our advanced ESP32-based energy meter. 
              Get detailed insights and optimize your energy usage with precision.
            </p>
          </motion.div>

          {/* Hardware Setup Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8">
                <div className="w-full h-full rounded-xl bg-gray-900/50 backdrop-blur-sm p-6">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* ESP32 */}
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <FaMicrochip className="w-12 h-12 text-green-400 mb-2" />
                      <h3 className="text-lg font-bold">ESP32</h3>
                      <div className="w-full h-0.5 bg-green-500/50 my-2" />
                      <div className="flex gap-2 mt-2">
                        <FaWifi className="w-4 h-4 text-blue-400" />
                        <FaBolt className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                    
                    {/* ACS712 */}
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <FaBolt className="w-12 h-12 text-yellow-400 mb-2" />
                      <h3 className="text-lg font-bold">ACS712</h3>
                      <div className="w-full h-0.5 bg-yellow-500/50 my-2" />
                      <p className="text-xs text-center text-gray-400">Current Sensor</p>
                    </div>

                    {/* ZMPT101B */}
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <FaBolt className="w-12 h-12 text-blue-400 mb-2" />
                      <h3 className="text-lg font-bold">ZMPT101B</h3>
                      <div className="w-full h-0.5 bg-blue-500/50 my-2" />
                      <p className="text-xs text-center text-gray-400">Voltage Sensor</p>
                    </div>

                    {/* Display */}
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-green-400 text-xs">LCD</span>
                      </div>
                      <h3 className="text-lg font-bold">Display</h3>
                      <div className="w-full h-0.5 bg-green-500/50 my-2" />
                      <p className="text-xs text-center text-gray-400">Real-time Data</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Hardware Components</h2>
                <div className="space-y-4">
                  {components.map((component, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-2">{component.name}</h3>
                      <p className="text-gray-400 mb-2">{component.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {component.connections.map((conn, i) => (
                          <span key={i} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
                            {conn}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products; 