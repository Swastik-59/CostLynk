'use client';

import { motion } from 'framer-motion';
import { SectionShell } from '@/components/section-shell';
import { IconGlyph } from '@/components/icon-glyph';
import { site } from '@/src/config/site';
import { MOTION } from '@/lib/design-tokens';
import { createStaggeredReveal } from '@/lib/motion-presets';
import { theme } from '@/lib/theme';

const iconByService: Record<string, Parameters<typeof IconGlyph>[0]['kind']> = {
  forecasting: 'forecast',
  automation: 'automation',
  exceptions: 'exceptions',
  visibility: 'visibility',
  optimization: 'optimization',
  'digital-twin': 'twin',
  integration: 'integration'
};

const cardVariants = createStaggeredReveal(MOTION.duration.base / 1000, MOTION.stagger.normal);

export function SolutionsSection() {
  return (
    <SectionShell id="solutions" eyebrow={site.sections.solutions.eyebrow} title={site.sections.solutions.title} lead={site.sections.solutions.lead}>
      <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-line/60 bg-white/74 p-6 shadow-soft lg:sticky lg:top-24">
          <div className={theme.typography.label + ' text-muted'}>Core offers</div>
          <p className="mt-5 max-w-[28ch] text-base leading-8 text-muted">
            A focused portfolio of operational systems, each designed to reduce friction at a different point in the chain.
          </p>
          <div className="mt-8 rounded-[1.25rem] border border-line/60 bg-[#f6f4ee] p-4 text-sm leading-7 text-fg">
            We tune the entry point by system, not by marketing slogan.
          </div>
        </div>

        <motion.div
          variants={cardVariants.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {site.services.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants.item}
              whileHover={{ y: -2, transition: { duration: MOTION.duration.fast / 1000 } }}
              className="group rounded-[1.25rem] border border-line/50 bg-white/72 p-6 transition-colors duration-200 hover:border-line/75 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-line/50 bg-[#f7f6f1] transition-colors duration-200 group-hover:border-line/70 group-hover:bg-white">
                  <IconGlyph kind={iconByService[service.id] ?? 'forecast'} />
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted/80 transition-colors duration-200 group-hover:text-muted">
                  {service.id.replace('-', ' ')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-fg">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {service.summary}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-5 border-t border-line/40 pt-4 text-sm font-medium leading-6 text-fg"
              >
                {service.benefit}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}