import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SpotlightEffectProps {
  children: React.ReactNode;
  size?: number;
  opacity?: number;
  blur?: number;
  enabled?: boolean;
}

const SpotlightEffect: React.FC<SpotlightEffectProps> = ({ 
  children, 
  size = 600, 
  opacity = 0.06, 
  blur = 0,
  enabled = true 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enabled) return;
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, [enabled, theme]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, handleMouseMove, handleMouseLeave]);

  if (!enabled) {
    return <>{children}</>;
  }

  // Theme-aware spotlight colors
  const getSpotlightColor = () => {
    if (theme === 'dark') {
      return `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,${opacity * 1.5}), transparent 40%)`;
    } else {
      return `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(0,0,0,${opacity * 0.5}), transparent 40%)`;
    }
  };

  return (
    <div className="spotlight-container">
      <div
        className="spotlight"
        style={{
          background: getSpotlightColor(),
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          opacity: isVisible ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightEffect;
