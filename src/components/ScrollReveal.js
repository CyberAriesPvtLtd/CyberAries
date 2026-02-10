import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollReveal.css';
/**
 * ScrollReveal Component
 * Animates children when they come into view
 * 
 * @param {ReactNode} children - Content to animate
 * @param {string} direction - Animation direction: 'left', 'right', 'up', 'down'
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} threshold - Percentage of element visible before triggering (0-1)
 */

const ScrollReveal = ({ 
  children, 
  direction = 'left', 
  delay = 5,
  threshold = 0.1 
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true, // Set to true if you want animation only once
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${inView ? 'scroll-reveal--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;