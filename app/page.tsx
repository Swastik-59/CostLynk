import { ScrollEffects } from '@/components/scroll-effects';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero';
import { ProblemSection } from '@/components/problem';
import { CapabilitiesSection } from '@/components/capabilities';
import { MethodologySection } from '@/components/methodology';
import { IndustryFocusSection } from '@/components/industry-focus';
import { TrustSection } from '@/components/trust';
import { FinalCtaSection } from '@/components/final-cta';
import SectionDivider from '@/components/section-divider';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <ScrollEffects />
      <SiteHeader />
      <main>
        {/* Hero Area */}
        <HeroSection />
        
        <SectionDivider label="01 // OPERATIONAL CHALLENGE" />
        <ProblemSection />
        
        <SectionDivider label="02 // SYSTEM CAPABILITIES" />
        <CapabilitiesSection />
        
        <SectionDivider label="03 // DELIVERY METHOD" />
        <MethodologySection />
        
        <SectionDivider label="04 // INDUSTRY APPLICATION" className="bg-graphite-900" />
        <IndustryFocusSection />
        
        <SectionDivider label="05 // DEPLOYMENT ASSURANCE" />
        <TrustSection />
        
        <SectionDivider label="06 // CONSULTATION" />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}