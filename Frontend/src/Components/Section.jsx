import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  background = 'dark',
  padding = 'py-20',
  withGradient = false,
  withParticles = false,
  id,
}) => {
  const backgrounds = {
    dark: 'bg-black',
    main: 'bg-gray-900',
    light: 'bg-gray-800',
  };

  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${backgrounds[background]}
        ${padding}
        ${className}
      `}
    >
      {/* Gradient Background */}
      {withGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      )}

      {/* Animated Particles */}
      {withParticles && (
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
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section; 