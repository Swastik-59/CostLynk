/**
 * MOTION PRESETS
 * Framer Motion animation variants and choreography patterns.
 * Used for consistent animation language across the site.
 */

import { MOTION } from './design-tokens';

// ========================================
// FADE & OPACITY VARIANTS
// ========================================
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0, y: 20 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0, x: -20 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0, x: 20 },
};

// ========================================
// STAGGER CONTAINER FOR CHILDREN
// ========================================
export const containerVariants = (delayMultiplier = MOTION.stagger.normal) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: delayMultiplier,
      delayChildren: 0.1,
    },
  },
});

// ========================================
// SCROLL-TRIGGERED REVEALS
// ========================================
export const scrollReveal = {
  hidden: { opacity: 0, y: 40 },
  show: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.slow / 1000,
      delay: custom * MOTION.stagger.normal,
      ease: MOTION.easing.smooth,
    },
  }),
};

// ========================================
// HOVER INTERACTION VARIANTS
// ========================================
export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: MOTION.duration.fast / 1000,
      ease: MOTION.easing.default,
    },
  },
};

export const hoverGlow = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: MOTION.duration.fast / 1000,
      ease: MOTION.easing.default,
    },
  },
};

// ========================================
// SCALE & SIZE ANIMATIONS
// ========================================
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: MOTION.duration.fast / 1000,
      ease: MOTION.easing.snappy,
    },
  },
};

// ========================================
// ROTATION VARIANTS (subtle)
// ========================================
export const subtleRotate = {
  rest: { rotate: 0 },
  hover: {
    rotate: 2,
    transition: {
      duration: MOTION.duration.micro / 1000,
      ease: MOTION.easing.default,
    },
  },
};

// ========================================
// WIDTH EXPANSION (for underlines, borders)
// ========================================
export const expandWidth = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: MOTION.duration.fast / 1000,
      ease: MOTION.easing.default,
      originX: 0,
    },
  },
};

// ========================================
// SLIDE TRANSITIONS
// ========================================
export const slideInFromLeft = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: MOTION.duration.slow / 1000,
      ease: MOTION.easing.default,
    },
  },
};

export const slideInFromRight = {
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: MOTION.duration.slow / 1000,
      ease: MOTION.easing.default,
    },
  },
};

// ========================================
// PARALLAX / SCROLL-LINKED MOTION
// ========================================
export const parallaxVariant = (speed: number = 0.8) => ({
  initial: { y: 0 },
});

// ========================================
// TEXT REVEAL / MASK PATTERNS
// ========================================
export const textReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: MOTION.duration.slow / 1000,
      ease: MOTION.easing.smooth,
    },
  },
};

// ========================================
// BACKGROUND ANIMATION (gradient shift, etc.)
// ========================================
export const bgShift = {
  initial: { backgroundPosition: '0% 0%' },
  animate: {
    backgroundPosition: '100% 100%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'linear',
    },
  },
};

// ========================================
// COMMON CHOREOGRAPHY: SEQUENTIAL REVEALS
// ========================================
export const createStaggeredReveal = (duration = MOTION.duration.base / 1000, staggerAmount = MOTION.stagger.normal) => ({
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount,
        delayChildren: 0.08,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: MOTION.easing.default },
    },
  },
});

// ========================================
// DRAW STROKE ANIMATION
// ========================================
export const drawStroke = (totalLength: number, duration: number = 2) => ({
  initial: { strokeDashoffset: totalLength },
  animate: { strokeDashoffset: 0 },
  transition: { duration, ease: 'easeInOut' as const },
});

// ========================================
// PULSE / BREATHING EFFECT
// ========================================
export const breathe = {
  animate: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export const subtlePulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

// ========================================
// FLOATING / DRIFT MOTION
// ========================================
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

// ========================================
// MODAL / DIALOG PATTERNS
// ========================================
export const modalBackdrop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: MOTION.duration.fast / 1000 },
  },
  exit: { opacity: 0 },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.base / 1000,
      ease: MOTION.easing.default,
    },
  },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};
