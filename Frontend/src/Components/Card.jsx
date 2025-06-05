import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  description, 
  icon, 
  gradient = 'from-green-500 to-blue-500',
  onClick,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6 shadow-xl border border-gray-800 hover:border-green-500/20 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 hover:opacity-10 transition-opacity duration-300" />
      
      {/* Icon */}
      {icon && (
        <div className="mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white`}
          >
            {icon}
          </motion.div>
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};

export default Card; 