import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Wait for fade out transition
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#191A18] text-[#F7F4EE] px-4"
    >
      <div className="text-center space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-medium block"
        >
          Jos, Plateau State
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-serif tracking-widest font-normal"
        >
          JEMIS INTERIOR
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
          className="h-[1px] w-32 md:w-48 bg-[#B99A65] mx-auto origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs uppercase tracking-widest text-[#D9D0C4] pt-2"
        >
          Thoughtfully Designed · Beautifully Furnished
        </motion.p>
      </div>
    </motion.div>
  );
};
