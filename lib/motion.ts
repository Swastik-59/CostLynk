export const motionSystem = {
  duration: {
    instant: 120,
    fast: 220,
    base: 360,
    slow: 520,
    slower: 700
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    soft: [0.3, 0, 0.2, 1] as const,
    linear: [0, 0, 1, 1] as const
  },
  stagger: {
    tight: 0.04,
    subtle: 0.08,
    normal: 0.12
  },
  parallax: {
    slow: 0.35,
    normal: 0.65,
    fast: 1
  }
} as const;

export const calmReveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionSystem.duration.base / 1000,
      ease: motionSystem.easing.standard
    }
  }
} as const;
