import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F2EA',
        fg: '#16181D',
        stone: {
          50: '#FBF8F3',
          100: '#F2ECE3',
          200: '#E4DCCD',
          300: '#CCC2AF',
          400: '#A89D88',
          500: '#847A66',
        },
        graphite: {
          800: '#252A33',
          900: '#171B22',
          950: '#0D1016',
        },
        slate: {
          800: '#2B3442',
          900: '#1F2733',
        },
        accent: {
          DEFAULT: '#4D698D',
          soft: '#6E86A8',
          muted: 'rgba(77, 105, 141, 0.12)',
        },
        line: '#CCC2AF',
        card: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.1rem, 7vw, 6.6rem)', { lineHeight: '0.9', letterSpacing: '-0.048em' }],
        'display-lg': ['clamp(2.4rem, 5vw, 4.4rem)', { lineHeight: '0.94', letterSpacing: '-0.038em' }],
        display: ['clamp(1.85rem, 3.25vw, 3rem)', { lineHeight: '0.98', letterSpacing: '-0.028em' }],
        heading: ['clamp(1.3rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.018em' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.78' }],
        body: ['0.975rem', { lineHeight: '1.72' }],
        caption: ['0.8125rem', { lineHeight: '1.5' }],
        label: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.15em' }],
        micro: ['0.625rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
      maxWidth: {
        frame: '76rem',
        prose: '38rem',
        narrow: '28rem',
      },
      borderRadius: {
        card: '0.75rem',
        panel: '1.125rem',
        pill: '100px',
      },
      boxShadow: {
        soft: '0 20px 72px rgba(18, 22, 28, 0.08)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        physical: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};

export default config;