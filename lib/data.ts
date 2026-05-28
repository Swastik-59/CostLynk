export const navLinks = [
  { label: 'Challenge', href: '#problem' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#system' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#proof' },
  { label: 'Industries', href: '#sectors' },
  { label: 'Get started', href: '#contact' }
];

export const solutions = [
  {
    id: 'cost-analysis',
    title: 'AI cost analysis',
    summary: 'Our AI scans every transaction, contract, and invoice to surface hidden costs and savings opportunities.',
    benefit: 'Find savings you didn\'t know existed.'
  },
  {
    id: 'procurement',
    title: 'Smart procurement',
    summary: 'AI-driven supplier analysis, contract optimisation, and automated sourcing to reduce procurement spend.',
    benefit: 'Pay less for every input without sacrificing quality.'
  },
  {
    id: 'forecasting',
    title: 'Demand forecasting',
    summary: 'Predict demand with AI models that learn from your data, market signals, and seasonal patterns.',
    benefit: 'Reduce overstock and stockouts simultaneously.'
  },
  {
    id: 'logistics',
    title: 'Logistics optimisation',
    summary: 'Optimise routing, carrier selection, and shipment consolidation to cut transportation costs.',
    benefit: 'Move goods at the lowest cost per unit.'
  },
  {
    id: 'automation',
    title: 'Workflow automation',
    summary: 'Automate repetitive processes like PO creation, invoice matching, and approval workflows.',
    benefit: 'Free your team to focus on strategic decisions.'
  },
  {
    id: 'visibility',
    title: 'Cost visibility dashboard',
    summary: 'Real-time spend analytics across every category, supplier, and location in one unified view.',
    benefit: 'See exactly where your money goes — live.'
  }
];

export const impactCards = [
  { value: '28%', label: 'average cost reduction' },
  { value: '3.2x', label: 'ROI in first year' },
  { value: '42%', label: 'faster procurement cycles' },
  { value: '19%', label: 'lower logistics spend' },
  { value: '$2.4M', label: 'avg. annual savings per client' }
];

export const trustPillars = [
  {
    title: 'Easy integration',
    text: 'Connects to your ERP, WMS, TMS, and procurement systems in days, not months.'
  },
  {
    title: 'Enterprise security',
    text: 'SOC 2 compliant. Your data is encrypted, isolated, and never shared.'
  },
  {
    title: 'Scales with you',
    text: 'From a single site pilot to enterprise-wide rollout without re-architecture.'
  },
  {
    title: 'Fast deployment',
    text: 'First insights in under 4 weeks. Full deployment within a quarter.'
  },
  {
    title: 'Continuous learning',
    text: 'Our AI gets smarter over time — finding deeper savings as it learns your data.'
  },
  {
    title: 'Dedicated support',
    text: 'A named cost optimisation expert works with your team from day one.'
  }
];

export const sectors = {
  logistics: {
    headline: 'Logistics & freight',
    summary: 'Cut freight costs by optimising routes, consolidating shipments, and negotiating better rates with AI.',
    points: [
      'AI-powered carrier selection and rate benchmarking.',
      'Shipment consolidation to reduce per-unit costs.',
      'Real-time cost tracking across every lane and mode.'
    ]
  },
  manufacturing: {
    headline: 'Manufacturing',
    summary: 'Reduce material costs, minimise waste, and align production with demand using AI.',
    points: [
      'Material cost optimisation through smarter sourcing.',
      'Waste reduction with AI-driven production planning.',
      'Energy and overhead cost analysis per product line.'
    ]
  },
  warehousing: {
    headline: 'Warehousing & fulfilment',
    summary: 'Lower warehousing costs through better space utilisation, labour planning, and inventory placement.',
    points: [
      'AI-optimised slotting to reduce pick times and labour.',
      'Dynamic labour allocation based on demand patterns.',
      'Inventory carrying cost reduction through better turns.'
    ]
  },
  distribution: {
    headline: 'Distribution',
    summary: 'Optimise distribution costs by balancing inventory, service levels, and network efficiency.',
    points: [
      'Network cost modelling across distribution centres.',
      'AI-driven replenishment to reduce safety stock costs.',
      'Last-mile delivery cost optimisation.'
    ]
  },
  retail: {
    headline: 'Retail & e-commerce',
    summary: 'Protect margins by reducing supply chain costs from supplier to shelf.',
    points: [
      'Markdown and overstock cost reduction with demand AI.',
      'Supplier cost benchmarking and negotiation insights.',
      'Omnichannel fulfilment cost optimisation.'
    ]
  }
} as const;