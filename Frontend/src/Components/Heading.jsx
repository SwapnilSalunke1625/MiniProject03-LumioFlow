import React from 'react';
import { motion } from 'framer-motion';

const Heading = ({
  children,
  level = 1,
  className = '',
  withGradient = false,
  align = 'left',
  size = 'default',
  animate = false,
}) => {
  const sizes = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl lg:text-7xl',
    small: 'text-2xl md:text-3xl',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const baseStyles = `
    font-bold
    ${sizes[size]}
    ${alignments[align]}
    ${withGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500' : 'text-white'}
    ${className}
  `;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Tag = `h${level}`;

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Tag className={baseStyles}>{children}</Tag>
      </motion.div>
    );
  }

  return <Tag className={baseStyles}>{children}</Tag>;
};

export default Heading; 