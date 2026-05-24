import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        line: 'hsl(var(--line))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      maxWidth: {
        frame: '72rem',
        prose: '44rem'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.08)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'noise-grid':
          'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;