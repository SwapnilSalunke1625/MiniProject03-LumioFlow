import React from 'react';
import { motion } from 'framer-motion';

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

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-400">Discover what makes our solution unique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all"
            >
              <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} text-transparent bg-clip-text`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 