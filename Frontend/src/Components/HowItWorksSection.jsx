import React from 'react';
import { motion } from 'framer-motion';

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

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 