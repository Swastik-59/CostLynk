'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/src/config/site';
import TextReveal from './text-reveal';
import MagneticButton from './magnetic-button';
import { MOTION } from '@/lib/design-tokens';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax effect on hero content
  const yContent = useTransform(scrollY, [0, 800], [0, 120]);
  const opacityContent = useTransform(scrollY, [0, 600], [1, 0]);
  const yGrid = useTransform(scrollY, [0, 1000], [0, -48]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-bg py-20 lg:py-28"
    >
      <motion.div
        style={{ y: yGrid }}
        data-parallax="0.8"
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(132,122,102,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(132,122,102,0.12)_1px,transparent_1px)] bg-[size:68px_68px]" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(77,105,141,0.12),transparent_46%)]" />
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
              className="flex flex-wrap gap-3 items-center"
            >
              <a href="#contact">
                <MagneticButton variant="primary">
                  {site.hero.ctaPrimary}
                </MagneticButton>
              </a>
              <a href="#challenge">
                <MagneticButton variant="secondary">
                  {site.hero.ctaSecondary}
                </MagneticButton>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.duration.cinematic, delay: 0.6, ease: MOTION.ease.out }}
          className="mt-20 lg:mt-28 border-t border-stone-300 pt-6 grid gap-4 md:grid-cols-3"
          data-reveal
        >
          <div className="font-mono text-micro text-stone-500">
            {site.hero.metaPrimary}
          </div>
          <div className="font-mono text-micro text-stone-500">
            {site.hero.metaSecondary}
          </div>
          <div className="font-mono text-micro text-stone-500 md:text-right">
            {site.hero.metaTertiary}
          </div>
        </motion.div>
      </div>
    </section>
  );
}