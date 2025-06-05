import React from 'react';
import { motion } from 'framer-motion';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  className = '',
  disabled = false,
  required = false,
  name,
  id,
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-gray-800/50 border
            ${error ? 'border-red-500' : 'border-gray-700'}
            focus:border-green-500 focus:ring-2 focus:ring-green-500/20
            outline-none transition-all duration-300
            ${icon ? 'pl-10' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            text-white placeholder-gray-500
          `}
          {...props}
        />
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input; 