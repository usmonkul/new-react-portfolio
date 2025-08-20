import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  style = {}
}) => {
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)"
    }
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHeading;
