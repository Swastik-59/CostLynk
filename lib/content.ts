import { BRAND } from './brand';

export const site = {
  companyName: BRAND.name,
  tagline: 'Operational intelligence for supply-chain enterprises.',
  headerCta: 'Book Consultation',
  mobileMenuClose: 'Close',
  mobileMenuCta: 'Request Consultation',
  footerRights: 'All rights reserved.',
  capabilityMeta: 'DEPLOYMENT READY',
  trustMeta: 'ASSURANCE LAYER',
  trustStatus: 'VERIFIED',
  methodologyRail: '01 / CURRENT STATE MAPPING\n02 / BOTTLENECK DIAGNOSIS\n03 / SYSTEM ARCHITECTURE\n04 / EMBEDDED DEPLOYMENT\n05 / ITERATIVE IMPROVEMENT',
  methodologyNoteLabel: 'ENGAGEMENT MODEL',
  methodologyNote: 'We work in practical rollout phases, starting with a workflow audit and ending in measured production deployment against agreed KPIs.',
  navLinks: [
    { label: 'Challenge', href: '#challenge' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: BRAND.descriptor,
    headline: 'Your operations already have data. They need system-level intelligence.',
    subhead: 'CostLynk designs and integrates AI systems directly into live supply-chain workflows so teams spend less time on manual coordination and more time on high-value decisions.',
    ctaPrimary: 'Start a Consultation',
    ctaSecondary: 'View Method',
    metaPrimary: 'LOGISTICS · MANUFACTURING · WAREHOUSING · DISTRIBUTION · RETAIL',
    metaSecondary: 'PRIVATE DEPLOYMENT OPTIONS (VPC / PRIVATE CLOUD / ON-PREM PATHWAYS)',
    metaTertiary: 'OPERATIONAL AUTOMATION · COST VISIBILITY · DECISION SUPPORT',
  },
  sections: {
    challenge: {
      eyebrow: 'The Problem',
      title: 'Most operational teams still rely on manual coordination to keep systems moving.',
      lead: 'Data exists across ERP, WMS, TMS, procurement tools, and inboxes, but decisions are still stitched together by people. That gap creates delay, inconsistency, and avoidable cost.',
      annotation: 'Where manual effort replaces missing system logic.',
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'AI capability, embedded where operational decisions actually happen.',
      lead: 'We build practical intelligence systems that connect to your existing stack and automate repetitive workflow layers without forcing a platform reset.',
      annotation: 'From quotation intake to cost and procurement control.',
    },
    methodology: {
      eyebrow: 'Method',
      title: 'A disciplined delivery method from process audit to production rollout.',
      lead: 'We start by understanding how your team currently handles cost engineering and workflow handoffs, then implement targeted automation and AI where it reduces real operational friction.',
      annotation: 'Measured implementation with clear checkpoints.',
    },
    industries: {
      eyebrow: 'Industries',
      title: 'Designed for industries where timing, margin, and execution quality are non-negotiable.',
      lead: 'Each environment has different constraints. We adapt architecture, automation depth, and model behavior to the operating reality of each sector.',
      annotation: 'Industry-specific implementation patterns.',
    },
    trust: {
      eyebrow: 'Deployment Assurance',
      title: 'Built for enterprise governance, security boundaries, and operational continuity.',
      lead: 'Our deployments respect existing controls, infrastructure constraints, and internal accountability standards from day one.',
      annotation: 'Security, integration, and governance by default.',
    },
    cta: {
      headline: 'Start with one workflow. Improve it end-to-end.',
      subhead: 'Share your current process, constraints, and timeline. We will identify where AI and automation can deliver measurable impact without operational disruption.',
    },
  },
  challenges: [
    {
      label: '01',
      title: 'Fragmented workflows',
      body: 'Critical information still moves through inboxes, calls, and spreadsheets. Every manual handoff adds latency and creates avoidable quality risk.',
    },
    {
      label: '02',
      title: 'Manual cost engineering',
      body: 'Cost estimates, RFQ responses, and approval loops are often rebuilt manually every cycle. Teams lose time, and consistency depends on individual memory.',
    },
    {
      label: '03',
      title: 'Opaque operational leaks',
      body: 'Cost leakage is usually distributed across many small failures: invoice mismatches, late exception handling, and poor visibility into recurring margin erosion.',
    },
    {
      label: '04',
      title: 'AI without workflow integration',
      body: 'Many AI pilots fail because they sit outside the real workflow. Without system integration, governed data access, and adoption design, value does not scale.',
    },
  ],
  capabilitiesList: [
    {
      title: 'Quotation Automation',
      body: 'AI-assisted RFQ intake, specification parsing, and quote drafting that shortens response cycles while preserving review controls.',
    },
    {
      title: 'Enterprise LLM Systems',
      body: 'Private enterprise LLMs tuned to your terminology, product context, and SOPs so teams can access relevant answers inside day-to-day workflows.',
    },
    {
      title: 'RAG Implementation',
      body: 'RAG systems that connect model responses to governed internal documents, project archives, contracts, and specifications.',
    },
    {
      title: 'Workflow Automation',
      body: 'Workflow automation across disconnected systems, replacing repetitive coordination tasks with event-driven process logic.',
    },
    {
      title: 'Cost Intelligence',
      body: 'Continuous monitoring of invoices, procurement flows, and rate compliance to surface exceptions before they become recurring loss.',
    },
    {
      title: 'Procurement Intelligence',
      body: 'Supplier intelligence for scoring, bid support, and sourcing recommendations grounded in historical performance and current constraints.',
    },
  ],
  methodologySteps: [
    {
      phase: 'Map',
      title: 'Current-State Mapping',
      body: 'We map how work is actually done today across systems, teams, and exception paths, not just how process diagrams describe it.',
    },
    {
      phase: 'Diagnose',
      title: 'Bottleneck Diagnosis',
      body: 'We isolate fragile handoffs, repetitive manual loops, and decision points that lack usable context.',
    },
    {
      phase: 'Architect',
      title: 'Solution Architecture',
      body: 'We design the right mix of AI, automation, and retrieval systems for your environment, with clear ownership and governance design.',
    },
    {
      phase: 'Integrate',
      title: 'Embedded Deployment',
      body: 'We deploy into your current stack so teams can use improved workflows inside tools they already operate.',
    },
    {
      phase: 'Compound',
      title: 'Continuous Refinement',
      body: 'After go-live, we improve model quality, exception handling, and automation logic using operational feedback and performance metrics.',
    },
  ],
  industriesList: [
    {
      name: 'Logistics',
      headline: 'Automated transport decisions with tighter cost control.',
      body: 'Support dispatch and freight teams with better carrier decisions, exception routing, and invoice validation.',
      points: [
        'Rate verification and freight invoice audit workflows',
        'Carrier performance scoring from live operational data',
        'Exception routing rules for delay and disruption events',
      ],
    },
    {
      name: 'Manufacturing',
      headline: 'Faster quotation and BOM decision support.',
      body: 'Reduce engineering effort in quotation and sourcing with better context retrieval and structured review workflows.',
      points: [
        'BOM cost analysis and alternate part matching',
        'RFQ ingestion with assisted cost estimation',
        'Supplier and production feasibility visibility',
      ],
    },
    {
      name: 'Warehousing',
      headline: 'Better slotting, labor planning, and receiving accuracy.',
      body: 'Use operational signals to improve warehouse layout decisions and reduce manual exception handling at receiving and picking.',
      points: [
        'Inventory slotting and spacing intelligence',
        'Labor allocation forecasting by throughput patterns',
        'Receiving validation and discrepancy flagging',
      ],
    },
    {
      name: 'Distribution',
      headline: 'Regional distribution planning with clearer unit economics.',
      body: 'Improve allocation and fulfillment decisions with stronger visibility into cost-per-unit behavior and exception causes.',
      points: [
        'SKU-level cost and margin tracking',
        'Regional inventory balancing recommendations',
        'Fulfillment exception triage automation',
      ],
    },
    {
      name: 'Retail Supply Chain',
      headline: 'Demand-aware procurement and replenishment support.',
      body: 'Link demand signals with vendor and replenishment workflows to reduce stock risk and purchasing inefficiency.',
      points: [
        'Demand-linked purchase order recommendations',
        'Margin leakage detection across retail operations',
        'Supplier SLA compliance monitoring',
      ],
    },
  ],
  trustPillars: [
    {
      title: 'Secure Deployment Boundaries',
      body: 'Deployments respect your infrastructure and data policies, including private cloud and controlled access environments.',
    },
    {
      title: 'Integration with Existing Stack',
      body: 'We integrate with ERP, WMS, TMS, procurement systems, and internal data services without forcing workflow replacement.',
    },
    {
      title: 'Phased Rollout',
      body: 'We release in controlled stages with measurable targets so stakeholders can validate performance before wider expansion.',
    },
    {
      title: 'Senior Engineering Access',
      body: 'Your team works directly with implementation engineers who own architecture decisions and delivery quality.',
    },
  ],
  ctaSection: {
    kicker: 'Consultation',
    meta: 'Typical kickoff includes current-state review, systems map, and an implementation shortlist.',
    headline: 'Start with one workflow. Improve it end-to-end.',
    subhead: 'Share your current process, constraints, and timeline. We will identify where AI and automation can deliver measurable impact without operational disruption.',
    form: {
      name: 'Name',
      email: 'Work email',
      message: 'Describe your workflow challenge, current systems, and timeline...',
    },
    submit: 'Request Consultation',
  },
} as const;

export type SiteConfig = typeof site;
