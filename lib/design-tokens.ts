/**
 * DESIGN TOKEN SYSTEM
 * Centralized values for spacing, colors, shadows, and typography.
 * Designed for maintainability and easy future brand replacement.
 */

// ========================================
// SPACING SYSTEM
// ========================================
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem', // 48px
  '4xl': '4rem', // 64px
  '5xl': '6rem', // 96px
  '6xl': '8rem', // 128px
} as const;

// Section spacing: asymmetrical for narrative pacing
export const SECTION_SPACING = {
  compact: '3rem', // 48px - tight sections
  normal: '4rem', // 64px - default breathing room
  expanded: '6rem', // 96px - expansive moments
  dramatic: '8rem', // 128px - hero/closing moments
} as const;

// ========================================
// ANIMATION & MOTION TOKENS
// ========================================
export const MOTION = {
  // Durations
  duration: {
    micro: 120, // quick feedback
    fast: 220, // restrained interactions
    base: 360, // standard transitions
    slow: 520, // deliberate reveals
    slower: 700, // cinematic moments
  },
  // Easing curves (Framer Motion compatible)
  easing: {
    // Framer Motion uses array [x1, y1, x2, y2] for cubic-bezier
    default: [0.22, 1, 0.36, 1], // controlled entrance, smooth exit
    smooth: [0.3, 0.0, 0.2, 1], // very smooth
    snappy: [0.2, 0.8, 0.2, 1], // restrained responsiveness
    ease_in: [0.25, 0.1, 0.25, 1],
    ease_out: [0.25, 0.46, 0.45, 0.94],
    ease_in_out: [0.25, 0.1, 0.25, 1],
  },
  // Stagger patterns for sequential animations
  stagger: {
    minimal: 0.04,
    subtle: 0.08,
    normal: 0.12,
    generous: 0.16,
  },
  // Parallax speeds
  parallax: {
    slow: 0.35,
    normal: 0.65,
    fast: 1,
  },
} as const;

// ========================================
// SHADOW & DEPTH SYSTEM
// ========================================
export const SHADOWS = {
  // Soft, layered shadows for premium feel
  none: 'none',
  xs: '0 2px 4px rgba(0, 0, 0, 0.06)',
  sm: '0 4px 12px rgba(0, 0, 0, 0.08)',
  base: '0 8px 24px rgba(0, 0, 0, 0.10)',
  lg: '0 12px 40px rgba(0, 0, 0, 0.12)',
  xl: '0 18px 60px rgba(0, 0, 0, 0.15)',
  '2xl': '0 24px 80px rgba(0, 0, 0, 0.18)',
  // Inset highlights for card depth
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
} as const;

// ========================================
// BORDER RADIUS SYSTEM
// ========================================
export const BORDER_RADIUS = {
  none: '0',
  xs: '0.25rem', // 4px - subtle
  sm: '0.5rem', // 8px - tight
  base: '0.75rem', // 12px - standard
  lg: '1rem', // 16px - generous
  xl: '1.25rem', // 20px - cards
  '2xl': '1.5rem', // 24px - larger modules
  '3xl': '2rem', // 32px - featured
  full: '9999px', // pills and circles
} as const;

// ========================================
// TYPOGRAPHY SCALE
// ========================================
export const TYPOGRAPHY = {
  // Headings: h1 through h6
  h1: {
    size: 'clamp(2.5rem, 5vw, 5rem)', // Responsive hero
    weight: 'font-black',
    leading: 'leading-[0.92]',
    tracking: 'tracking-[-0.04em]',
  },
  h2: {
    size: 'clamp(2rem, 4vw, 3.5rem)',
    weight: 'font-bold',
    leading: 'leading-[0.95]',
    tracking: 'tracking-[-0.03em]',
  },
  h3: {
    size: 'clamp(1.5rem, 3vw, 2.5rem)',
    weight: 'font-bold',
    leading: 'leading-[1]',
    tracking: 'tracking-[-0.02em]',
  },
  // Body text
  body: {
    lg: 'text-lg leading-7',
    base: 'text-base leading-7',
    sm: 'text-sm leading-6',
  },
  // Labels and UI text
  label: {
    size: 'text-[0.7rem]',
    weight: 'font-mono',
    tracking: 'tracking-[0.32em]',
    transform: 'uppercase',
  },
  // Mono/code
  mono: {
    size: 'text-[0.75rem]',
    family: 'font-mono',
    tracking: 'tracking-[0.18em]',
  },
} as const;

// ========================================
// Z-INDEX LAYERS
// ========================================
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal_backdrop: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
} as const;

// ========================================
// COLOR PALETTE (for reference; actual colors in CSS vars)
// ========================================
export const COLOR_ROLES = {
  // Primary colors
  background: 'hsl(var(--bg))',
  foreground: 'hsl(var(--fg))',
  muted: 'hsl(var(--muted))',
  // Structural
  line: 'hsl(var(--line))',
  card: 'hsl(var(--card))',
  // Accent
  accent: 'hsl(var(--accent))',
} as const;

// ========================================
// TRANSITION PRESETS
// ========================================
export const TRANSITIONS = {
  fast: {
    duration: MOTION.duration.fast,
    easing: MOTION.easing.default,
  },
  standard: {
    duration: MOTION.duration.base,
    easing: MOTION.easing.default,
  },
  smooth: {
    duration: MOTION.duration.slow,
    easing: MOTION.easing.smooth,
  },
  cinematic: {
    duration: MOTION.duration.slower,
    easing: MOTION.easing.smooth,
  },
} as const;

// ========================================
// GRID SYSTEM
// ========================================
export const GRID = {
  // Background grid opacity levels
  opacity: {
    hidden: 0,
    subtle: 0.12,
    light: 0.18,
    normal: 0.25,
    pronounced: 0.35,
  },
  // Grid sizes
  size: {
    tight: '24px',
    normal: '32px',
    spacious: '48px',
  },
} as const;

// ========================================
// CONTAINER SIZES
// ========================================
export const CONTAINERS = {
  full: '100vw',
  max: '72rem', // 1152px
  prose: '44rem', // 704px
  narrow: '36rem', // 576px
} as const;
