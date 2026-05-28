'use client';

import { SectionShell } from '@/components/section-shell';
import { site } from '@/src/config/site';
import { SystemModule } from '@/components/visual/system-module';

export function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow={site.sections.trust.eyebrow}
      title={site.sections.trust.title}
      lead={site.sections.trust.lead}
      annotation={site.sections.trust.annotation}
      atmosphere="light"
      density="default"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {site.trustPillars.map((pillar, index) => (
          <SystemModule
            key={pillar.title}
            index={index}
            variant={index % 2 === 0 ? 'primary' : 'secondary'}
            showIndex
            indexLabel={`0${index + 1}`}
            footer={
              <div className="flex items-center justify-between font-mono text-micro">
                <span className="text-accent">{site.trustMeta}</span>
                <span className="text-stone-500">{site.trustStatus}</span>
              </div>
            }
          >
            <h3 className="font-display text-heading font-semibold text-fg tracking-tight leading-snug pr-8">
              {pillar.title}
            </h3>
            <p className="mt-4 text-body text-stone-500 font-sans leading-relaxed">{pillar.body}</p>
          </SystemModule>
        ))}
      </div>
    </SectionShell>
  );
}
