'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/src/config/site';
import TextReveal from './text-reveal';
import MagneticButton from './magnetic-button';
import { MOTION } from '@/lib/design-tokens';
import { SectionAtmosphere } from '@/components/visual/section-atmosphere';

export function FinalCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-bg py-24 md:py-32 lg:py-40 overflow-hidden border-t border-stone-300"
    >
      <SectionAtmosphere variant="immersive" />

      <div className="frame relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 lg:col-span-5">
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
          <p className="font-mono text-micro text-stone-500 border-l border-accent/40 pl-4 max-w-[34ch]">
            {site.ctaSection.meta}
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: MOTION.duration.slow, delay: 0.3, ease: MOTION.ease.smooth }}
          className="panel-frame w-full space-y-8 text-left lg:col-span-7"
          onSubmit={(e) => e.preventDefault()}
          data-reveal
        >
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label={site.ctaSection.form.name} type="text" />
            <FormField label={site.ctaSection.form.email} type="email" />
          </div>
          <FormField label={site.ctaSection.form.message} type="textarea" />
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

function FormField({
  label,
  type,
}: {
  label: string;
  type: 'text' | 'email' | 'textarea';
}) {
  const inputClass =
    'peer w-full bg-transparent border-b border-stone-300 py-3 text-fg outline-none transition-colors duration-300 focus:border-accent';

  return (
    <div className="relative group">
      {type === 'textarea' ? (
        <textarea required rows={3} placeholder=" " className={`${inputClass} resize-none`} />
      ) : (
        <input type={type} required placeholder=" " className={inputClass} />
      )}
      <label className="absolute left-0 top-3 text-stone-400 pointer-events-none transition-all duration-300 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 font-sans text-body">
        {label}
      </label>
    </div>
  );
}
