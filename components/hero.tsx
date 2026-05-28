'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/src/config/site';
import TextReveal from './text-reveal';
import MagneticButton from './magnetic-button';
import { MOTION } from '@/lib/design-tokens';
import { SectionAtmosphere } from '@/components/visual/section-atmosphere';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const yContent = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityContent = useTransform(scrollY, [0, 600], [1, 0]);
  const yAccent = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-center overflow-hidden bg-bg py-20 lg:py-28"
    >
      <SectionAtmosphere variant="hero" />

      <motion.div
        style={{ y: yAccent }}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden lg:block"
        aria-hidden
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-40">
          <rect x="20" y="20" width="60" height="40" stroke="rgba(77,105,141,0.35)" strokeWidth="1" />
          <rect x="120" y="20" width="60" height="40" stroke="rgba(77,105,141,0.25)" strokeWidth="1" />
          <rect x="70" y="100" width="60" height="40" stroke="rgba(77,105,141,0.3)" strokeWidth="1" />
          <path d="M80 60 L80 80 L100 80 L100 100" stroke="rgba(77,105,141,0.2)" strokeWidth="1" />
          <path d="M150 60 L150 80 L100 80" stroke="rgba(77,105,141,0.2)" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="frame flex flex-col justify-between h-full relative z-10">
        <motion.div
          style={{ y: yContent, opacity: opacityContent }}
          data-reveal
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="space-y-8 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
              className="font-mono text-label text-accent select-none"
            >
              {site.hero.eyebrow}
            </motion.p>

            <h1 className="font-display text-display-xl font-semibold tracking-tighter text-fg text-pretty max-w-[15ch]">
              <TextReveal text={site.hero.headline} delay={0.08} once />
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:pb-2">
            <div className="panel-frame !p-6 lg:!p-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: MOTION.duration.slow, delay: 0.3, ease: MOTION.ease.smooth }}
                className="max-w-[30ch] text-body text-stone-500 font-sans leading-relaxed text-pretty"
              >
                {site.hero.subhead}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: MOTION.duration.slow, delay: 0.44, ease: MOTION.ease.smooth }}
                className="mt-8 flex flex-wrap gap-3 items-center"
              >
                <a href="#contact">
                  <MagneticButton variant="primary">{site.hero.ctaPrimary}</MagneticButton>
                </a>
                <a href="#challenge">
                  <MagneticButton variant="secondary">{site.hero.ctaSecondary}</MagneticButton>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.duration.cinematic, delay: 0.6, ease: MOTION.ease.out }}
          className="mt-20 lg:mt-24 panel-frame !py-5 !px-5 md:!px-6"
          data-reveal
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="font-mono text-micro text-stone-500">{site.hero.metaPrimary}</div>
            <div className="font-mono text-micro text-stone-500">{site.hero.metaSecondary}</div>
            <div className="font-mono text-micro text-stone-500 md:text-right">
              {site.hero.metaTertiary}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
