import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({ className = "" }) => {
  const elements = [
    { icon: '⚡', size: 'text-2xl', delay: 0, duration: 6 },
    { icon: '🚀', size: 'text-3xl', delay: 1, duration: 8 },
    { icon: '💻', size: 'text-xl', delay: 2, duration: 7 },
    { icon: '🔧', size: 'text-2xl', delay: 3, duration: 9 },
    { icon: '🎯', size: 'text-xl', delay: 4, duration: 6 },
    { icon: '⭐', size: 'text-sm', delay: 5, duration: 10 },
  ];

  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-20`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          variants={floatingVariants}
          animate="animate"
          custom={element}
        >
          {element.icon}
        </motion.div>
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-500/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
        animate={{
          rotate: [0, 45, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-10 w-8 h-8 border-2 border-cyan-500/30"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 0.8, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingElements;

