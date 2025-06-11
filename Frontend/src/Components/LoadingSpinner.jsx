import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = "md", color = "green" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28"
  };

  const colorClasses = {
    green: {
      primary: "text-green-500",
      secondary: "text-green-400",
      glow: "shadow-green-500/50",
      gradient: "from-green-500 to-emerald-500"
    },
    blue: {
      primary: "text-blue-500",
      secondary: "text-blue-400",
      glow: "shadow-blue-500/50",
      gradient: "from-blue-500 to-cyan-500"
    },
    white: {
      primary: "text-white",
      secondary: "text-gray-200",
      glow: "shadow-white/50",
      gradient: "from-white to-gray-200"
    }
  };

  const currentColor = colorClasses[color];

  return (
    <div className="relative flex items-center justify-center">
      {/* Main spinning ring */}
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring with energy nodes */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={currentColor.primary}
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Energy nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + 45 * Math.cos(i * Math.PI / 6)}
              cy={50 + 45 * Math.sin(i * Math.PI / 6)}
              r="2"
              fill={currentColor.primary}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Central energy core */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center`}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={`relative ${sizeClasses[size]}`}>
          {/* Glowing core */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentColor.gradient} blur-md opacity-50`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Lightning bolts */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ rotate: i * 90 }}
            >
              <motion.path
                d="M50 20 L55 40 L50 40 L55 60 L45 50 L50 50 L45 30 Z"
                fill={currentColor.primary}
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}

          {/* Energy field */}
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${currentColor.primary} ${currentColor.glow}`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Floating energy particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${currentColor.secondary}`}
          style={{
            left: `calc(50% + ${Math.cos(i * Math.PI / 4) * 60}px)`,
            top: `calc(50% + ${Math.sin(i * Math.PI / 4) * 60}px)`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner; 