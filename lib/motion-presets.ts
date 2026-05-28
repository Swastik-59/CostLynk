/**
 * MOTION PRESETS
 * Framer Motion animation variants and choreography patterns.
 * Optimized for cinematic, premium transitions.
 */

import { MOTION } from '@/lib/design-tokens';

// Scroll-triggered reveal variants
export const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.slow,
      ease: MOTION.ease.smooth,
      delay,
    },
  }),
};

// Staggered container
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION.stagger.normal,
      delayChildren: 0.08,
    },
  },
};

// Horizontal line reveal
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: MOTION.duration.slower,
      ease: MOTION.ease.smooth,
    },
  },
};

// Character-by-character text reveal
export const charReveal = {
  hidden: { y: '110%', rotateX: -80 },
  visible: (i: number) => ({
    y: '0%',
    rotateX: 0,
    transition: {
      duration: MOTION.duration.base,
      ease: MOTION.ease.smooth,
      delay: i * MOTION.stagger.tight,
    },
  }),
};

// Fade in from direction
export const fadeFrom = (direction: 'up' | 'down' | 'left' | 'right', distance = 40) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: MOTION.duration.slow,
      ease: MOTION.ease.smooth,
    },
  },
});

// Magnetic hover (for buttons, links)
export const magneticHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: MOTION.duration.fast,
      ease: MOTION.ease.out,
    },
  },
  tap: { scale: 0.97 },
};
