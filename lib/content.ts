import { brand } from './brand';

export const site = {
  companyName: brand.name,
  tagline: brand.tagline,
  navLinks: [
    { label: 'Problem', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'System', href: '#system' },
    { label: 'Process', href: '#process' },
    { label: 'Proof', href: '#proof' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    eyebrow: brand.discipline,
    headline: 'The operating layer for supply chain decisions.',
    subhead:
      'Arcline turns fragmented ERP, WMS, and TMS signals into governed decisions, exception routing, and coordinated execution.',
    primaryCta: { label: 'Request the first diagnostic', href: '#contact' },
    secondaryCta: { label: 'Review the system topology', href: '#system' },
    trustStats: [
      { value: '7–12 weeks', label: 'diagnostic to pilot' },
      { value: 'ERP • WMS • TMS', label: 'integration coverage' },
      { value: 'Governed', label: 'audit and control by design' }
    ]
  },
  sections: {
    problem: {
      eyebrow: 'Operational audit',
      title: 'Most supply chain risk starts in the gaps between systems.',
      lead:
        'We begin with a clear diagnostic: what matters, where it breaks, and which decisions deserve automation first.'
    },
    solutions: {
      eyebrow: 'Core offers',
      title: 'A focused set of systems that change operational outcomes.',
      lead: 'Each offer has a defined scope, explicit data inputs, and a measurable operational effect.'
    },
    system: {
      eyebrow: 'System topology',
      title: 'Signals are resolved through a governed decision layer, not decorative visual language.',
      lead:
        'The stack captures operational signals, ranks exceptions, routes the next best action, and sends the decision back into execution systems.'
    },
    process: {
      eyebrow: 'Delivery model',
      title: 'A disciplined sequence from audit to autonomous execution.',
      lead: 'Understand the operating model. Shape the decision logic. Integrate the systems. Automate only what is ready.'
    },
    proof: {
      eyebrow: 'Representative impact',
      title: 'Results that are measurable and operationally meaningful.',
      lead: 'Representative outcomes from comparable programs. Actual results vary by context and adoption.'
    }
  },
  services: [
    {
      id: 'forecasting',
      title: 'Demand forecasting',
      summary: 'Clean signal models from orders, seasonality, and external movement.',
      benefit: 'Plan inventory with fewer manual adjustments.'
    },
    {
      id: 'automation',
      title: 'Autonomous workflow automation',
      summary: 'Move routine decisions and handoffs into governed workflows.',
      benefit: 'Reduce operational friction across planning and execution.'
    },
    {
      id: 'exceptions',
      title: 'Exception detection & response',
      summary: 'Detect deviations early and route the next best action to the right team.',
      benefit: 'Shorten response times when service is at risk.'
    },
    {
      id: 'visibility',
      title: 'Supply chain visibility',
      summary: 'Unify status across warehouses, lanes, vendors, and internal systems.',
      benefit: 'See bottlenecks before they spread.'
    },
    {
      id: 'optimization',
      title: 'Optimization & decision support',
      summary: 'Surface the best move across cost, service, labor, and capacity constraints.',
      benefit: 'Align planning with execution more reliably.'
    },
    {
      id: 'digital-twin',
      title: 'Digital twin & simulation',
      summary: 'Test operational changes before release to the network or the floor.',
      benefit: 'Make changes with less risk and more clarity.'
    },
    {
      id: 'integration',
      title: 'Systems integration',
      summary: 'Connect ERP, WMS, TMS, CRM, and analytics through governed interfaces.',
      benefit: 'Coordinate decisions across systems instead of between them.'
    }
  ],
  proofMetrics: [
    { value: '38%', label: 'faster exception response' },
    { value: '17%', label: 'forecast accuracy lift' },
    { value: '29%', label: 'fewer manual touches' },
    { value: '21%', label: 'lower stockouts' },
    { value: '2.4x', label: 'faster planning cycles' }
  ],
  sectors: {
    logistics: {
      headline: 'Logistics',
      summary: 'Reduce routing drift, delay response, and lane-level uncertainty.',
      points: [
        'Live exception routing for at-risk shipments.',
        'Load and lane visibility through the day.',
        'Decision support for service recovery.'
      ]
    },
    manufacturing: {
      headline: 'Manufacturing',
      summary: 'Keep production aligned with supply, labor, and downstream demand.',
      points: [
        'Forecast-to-plan alignment for materials.',
        'Earlier detection of line-side bottlenecks.',
        'Simulation of schedule changes before release.'
      ]
    },
    warehousing: {
      headline: 'Warehousing',
      summary: 'Stabilize throughput, congestion, and labor allocation.',
      points: [
        'Queue and congestion detection across shifts.',
        'Task prioritization for high-risk orders.',
        'Slotting and labor guidance based on demand.'
      ]
    },
    distribution: {
      headline: 'Distribution',
      summary: 'Coordinate replenishment, service targets, and inventory flow.',
      points: [
        'Network visibility from source to store or customer.',
        'Reorder guidance tuned to service thresholds.',
        'Faster exception handling across nodes.'
      ]
    },
    retail: {
      headline: 'Retail supply chain',
      summary: 'Protect availability while reducing overstock and noise.',
      points: [
        'Store and region-level demand sensing.',
        'Inventory balancing across nodes.',
        'Replenishment support with clearer signals.'
      ]
    }
  },
  trustPillars: [
    { title: 'Integrations', text: 'ERP, WMS, TMS, CRM, BI, and event streams connected with governed handoffs.' },
    { title: 'Security', text: 'Least-privilege access, auditability, and clear ownership.' },
    { title: 'Scalability', text: 'Support pilots and enterprise rollouts without redesign.' },
    { title: 'Deployment', text: 'Phased delivery aligned to operational windows and change control.' },
    { title: 'Enterprise readiness', text: 'Governance, monitoring, and support expectations for larger teams.' },
    { title: 'Implementation', text: 'Strategy, integration, and enablement from one delivery partner.' }
  ],
  cta: {
    headline: 'Make the operating system easier to trust.',
    subhead:
      'We map where signal is breaking down, prioritize the highest-friction decisions, and define the first actionable step.',
    form: { name: 'Name', email: 'Work email', message: 'What needs attention' },
    submit: 'Request the first diagnostic'
  },
  footer: {
    text: 'Arcline. Intelligence infrastructure for supply chain operations.'
  }
} as const;

export type SiteConfig = typeof site;
