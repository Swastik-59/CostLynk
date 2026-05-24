import { ScrollEffects } from '@/components/scroll-effects';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero';
import { ProblemSection } from '@/components/problem';
import { SolutionsSection } from '@/components/solutions';
import { OrchestrationSection } from '@/components/orchestration';
import { ProcessSection } from '@/components/how-it-works';
import { ImpactSection } from '@/components/impact';
import { IndustryFocusSection } from '@/components/industry-focus';
import { TrustSection } from '@/components/trust';
import { FinalCtaSection } from '@/components/final-cta';
import { site } from '@/src/config/site';

export default function HomePage() {
  return (
    <>
      <ScrollEffects />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <OrchestrationSection />
        <ProcessSection />
        <ImpactSection />
        <IndustryFocusSection />
        <TrustSection />
        <FinalCtaSection />
      </main>
      <footer className="border-t border-line/40 bg-gradient-to-b from-white/35 to-white/10">
        <div className="mx-auto flex max-w-frame flex-col gap-6 px-6 py-12 text-sm text-muted md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="space-y-2">
            <p className="font-semibold text-fg">{site.companyName}</p>
            <p className="text-xs">{site.footer.text}</p>
          </div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted/70">
            © 2024 Arcline. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}