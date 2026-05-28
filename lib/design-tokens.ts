/**
 * DESIGN TOKEN SYSTEM
 * Centralized motion configuration tokens.
 * Colors, typography, and spacing are handled via TailwindCSS and CSS variables.
 */

export const MOTION = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    base: 0.5,
    slow: 0.75,
    slower: 0.95,
    cinematic: 1.25,
  },
  ease: {
    smooth: [0.2, 0.88, 0.24, 1],
    physical: [0.25, 0.1, 0.25, 1],
    out: [0, 0, 0.2, 1],
    inOut: [0.4, 0, 0.2, 1],
  },
  stagger: {
    tight: 0.025,
    subtle: 0.05,
    normal: 0.085,
    relaxed: 0.15,
  },
} as const;
