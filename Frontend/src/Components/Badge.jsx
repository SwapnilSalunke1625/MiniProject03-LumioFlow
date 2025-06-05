import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  onClick,
}) => {
  const variants = {
    default: 'bg-gray-800 text-gray-300',
    success: 'bg-green-500/20 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20',
    error: 'bg-red-500/20 text-red-400 border border-red-500/20',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center
        rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </motion.span>
  );
};

export default Badge; 