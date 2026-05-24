import { brand } from './brand';

export const theme = {
  colors: {
    base: '#F5F4EF',
    baseAlt: '#ECE9E1',
    surface: '#E3E0D7',
    border: '#D4D0C7',
    borderSoft: '#C9C5BC',
    text: '#0F1115',
    textStrong: '#1A1D21',
    textMuted: '#23272F',
    accent: '#2D5BFF',
    accentSoft: '#5B84FF',
    navy: '#0A1020',
    navyAlt: '#0E1528',
    warmMetal: '#A68A64'
  },
  typography: {
    headline: 'text-[clamp(3.7rem,8.2vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]',
    sectionTitle: 'text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.06em]',
    body: 'text-base leading-8 md:text-[1.06rem] md:leading-8',
    label: 'font-mono text-[0.66rem] uppercase tracking-[0.36em]',
    micro: 'font-mono text-[0.62rem] uppercase tracking-[0.3em]'
  },
  spacing: {
    frame: 'max-w-frame',
    heroPad: 'px-6 py-20 md:px-8 lg:px-10',
    sectionPad: 'px-6 py-14 md:px-8 md:py-20 lg:px-10 lg:py-24',
    sectionPadDense: 'px-6 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20',
    gridGap: 'gap-6',
    cardGap: 'gap-5'
  },
  sections: {
    hero: 'hero',
    problem: 'problem',
    solutions: 'solutions',
    system: 'system',
    process: 'process',
    proof: 'proof',
    sectors: 'sectors',
    trust: 'trust',
    contact: 'contact'
  },
  brand
} as const;
