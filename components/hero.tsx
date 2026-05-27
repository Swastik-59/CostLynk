
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { site } from '@/src/config/site';
import { layout } from '@/lib/layout';
import { motionSystem } from '@/lib/motion';
import { theme } from '@/lib/theme';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 3);
    return () => clearInterval(id);
  }, []);

  const timestamp = useMemo(() => {
    const hh = String(time.getUTCHours()).padStart(2, '0');
    const mm = String(time.getUTCMinutes()).padStart(2, '0');
    const ss = String(time.getUTCSeconds()).padStart(2, '0');
    return `SYN ${hh}:${mm}:${ss} UTC`;
  }, [time]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          data-parallax="0.35"
          className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_14%_12%,rgba(91,123,255,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.82),transparent_26%)]"
        />
        <div
          data-parallax="0.15"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,20,26,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,20,26,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(circle_at_center,black_26%,transparent_100%)]"
        />
        <div className="absolute left-1/2 top-[18%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,123,255,0.08),transparent_68%)] blur-3xl" />
      </div>

      <div className={layout.heroFrame}>
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div className="max-w-[44rem] text-left pt-10 md:pt-12 lg:pt-16">
            <motion.p
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard }}
              className={`${theme.typography.label} text-accent`}
            >
              {site.hero.eyebrow}
            </motion.p>

            <motion.h1
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: motionSystem.duration.slow / 1000, ease: motionSystem.easing.standard, delay: 0.04 }}
              className={`font-display mt-5 max-w-[11ch] ${theme.typography.headline} text-fg md:max-w-[12ch]`}
            >
              {site.hero.headline}
            </motion.h1>

            <motion.p
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard, delay: 0.1 }}
              className="mt-7 max-w-[34rem] text-base leading-8 text-muted md:text-lg"
            >
              {site.hero.subhead}
            </motion.p>

            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard, delay: 0.14 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={site.hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2"
              >
                {site.hero.primaryCta.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={site.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-line/80 px-6 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-fg hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2"
              >
                {site.hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: motionSystem.duration.base / 1000, ease: motionSystem.easing.standard, delay: 0.18 }}
              className="mt-12 grid gap-3 sm:grid-cols-3"
            >
              {site.hero.trustStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.1rem] border border-line/70 bg-white/55 p-4 backdrop-blur-sm">
                  <div className="font-mono text-[0.64rem] uppercase tracking-[0.3em] text-muted">{stat.label}</div>
                  <div className="mt-4 text-lg font-semibold tracking-[-0.03em] text-fg">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: motionSystem.duration.slow / 1000, ease: motionSystem.easing.standard, delay: 0.14 }}
            className="rounded-[1.5rem] border border-line/70 bg-[rgba(12,15,20,0.94)] p-6 text-white shadow-soft"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="font-mono text-[0.64rem] uppercase tracking-[0.34em] text-white/45">Cost savings snapshot</div>
                <div className="mt-2 text-sm text-white/70">Live AI analysis</div>
              </div>
              <div className="font-mono text-[0.64rem] uppercase tracking-[0.3em] text-white/45">{timestamp}</div>
            </div>

            <div className="mt-6 grid gap-4">
              {site.hero.trustStats.map((stat, index) => (
                <div key={stat.label} className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-white/40">0{index + 1}</div>
                      <div className="mt-2 text-sm text-white/70">{stat.label}</div>
                    </div>
                    <div className="text-right text-base font-medium tracking-[-0.02em] text-white">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[24ch] text-sm leading-7 text-white/55">
              AI-powered. Data-driven. Savings delivered.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}