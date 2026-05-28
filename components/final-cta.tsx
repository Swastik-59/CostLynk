'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/src/config/site';
import TextReveal from './text-reveal';
import MagneticButton from './magnetic-button';
import { MOTION } from '@/lib/design-tokens';

export function FinalCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-bg py-24 md:py-30 lg:py-36 overflow-hidden border-t border-stone-300"
    >
      <div className="frame grid gap-14 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: MOTION.duration.slow, ease: MOTION.ease.smooth }}
            className="font-mono text-micro text-accent font-semibold block uppercase"
          >
            {site.ctaSection.kicker}
          </motion.span>
          <h2 className="font-display text-display font-semibold text-fg tracking-tight text-pretty max-w-[18ch]">
            <TextReveal text={site.sections.cta.headline} once />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: MOTION.duration.slow, delay: 0.2, ease: MOTION.ease.smooth }}
            className="text-body text-stone-500 font-sans leading-relaxed text-pretty max-w-[40ch]"
          >
            {site.sections.cta.subhead}
          </motion.p>
          <p className="font-mono text-micro text-stone-500 border-l border-stone-300 pl-4 max-w-[34ch]">
            {site.ctaSection.meta}
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: MOTION.duration.slow, delay: 0.3, ease: MOTION.ease.smooth }}
          className="w-full space-y-8 text-left lg:col-span-7 lg:mt-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative group">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-stone-300 py-3 text-fg outline-none transition-colors duration-300 focus:border-accent"
              />
              <label className="absolute left-0 top-3 text-stone-400 pointer-events-none transition-all duration-300 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 font-sans text-body">
                {site.ctaSection.form.name}
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-stone-300 py-3 text-fg outline-none transition-colors duration-300 focus:border-accent"
              />
              <label className="absolute left-0 top-3 text-stone-400 pointer-events-none transition-all duration-300 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 font-sans text-body">
                {site.ctaSection.form.email}
              </label>
            </div>
          </div>
          <div>
            <div className="relative group">
              <textarea
                required
                rows={3}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-stone-300 py-3 text-fg outline-none transition-colors duration-300 focus:border-accent resize-none"
              />
              <label className="absolute left-0 top-3 text-stone-400 pointer-events-none transition-all duration-300 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 font-sans text-body">
                {site.ctaSection.form.message}
              </label>
            </div>
          </div>

          <div className="flex justify-start pt-2">
            <MagneticButton variant="primary" type="submit">
              {site.ctaSection.submit}
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}