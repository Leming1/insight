'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  words: string[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ 
  words, 
  interval = 1500, 
  className = '', 
  style = {} 
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) {
      console.log('No animation needed - only one word');
      return;
    }

    console.log('Starting animation with', words.length, 'words, interval:', interval);
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % words.length;
        console.log('Animation tick:', words[prev], '->', words[next]);
        return next;
      });
    }, interval);

    return () => {
      console.log('Stopping animation');
      clearInterval(timer);
    };
  }, [words, interval]);

  return (
    <div 
      className={`inline-block ${className}`}
      style={{
        ...style,
        width: 'max-content',
        minWidth: 'max-content',
        flexShrink: 0,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut",
            opacity: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 0.6, ease: "easeInOut" }
          }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
