'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  // Position motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring settings for physical responsiveness
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Displacement vector from button center to cursor
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Pull intensity factor (max translation around 8px)
    const pullFactor = 0.15;
    x.set(distanceX * pullFactor);
    y.set(distanceY * pullFactor);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-mono text-label rounded-pill px-8 py-3.5 transition-all duration-300 select-none';
  const variantStyles =
    variant === 'primary'
      ? 'bg-fg text-bg hover:bg-stone-900 border border-transparent'
      : 'bg-transparent text-fg hover:bg-stone-100 border border-stone-300';

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10 block transition-transform duration-300">
        {children}
      </span>
    </motion.button>
  );
}
