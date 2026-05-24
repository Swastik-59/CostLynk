export const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'System', href: '#system' },
  { label: 'Process', href: '#process' },
  { label: 'Proof', href: '#proof' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Contact', href: '#contact' }
];

export const solutions = [
  {
    id: 'forecasting',
    title: 'Demand forecasting',
    summary: 'Models demand with cleaner signals from orders, seasonality, and external movement.',
    benefit: 'Plan inventory with fewer manual adjustments.'
  },
  {
    id: 'automation',
    title: 'Autonomous workflow automation',
    summary: 'Moves routine decisions and handoffs out of inboxes and into governed workflows.',
    benefit: 'Reduce operational friction across planning and execution.'
  },
  {
    id: 'exceptions',
    title: 'Exception detection and response',
    summary: 'Detects deviations early and routes the next best action to the right team.',
    benefit: 'Shorten response times when service is at risk.'
  },
  {
    id: 'visibility',
    title: 'Supply chain visibility',
    summary: 'Unifies status across warehouses, lanes, vendors, and internal systems.',
    benefit: 'See bottlenecks before they spread.'
  },
  {
    id: 'optimization',
    title: 'Optimization and decision support',
    summary: 'Surfaces the best move across cost, service, labor, and capacity constraints.',
    benefit: 'Align planning with execution more reliably.'
  },
  {
    id: 'digital-twin',
    title: 'Digital twin and simulation',
    summary: 'Tests operational changes before they hit the floor or the network.',
    benefit: 'Make changes with less risk and more clarity.'
  },
  {
    id: 'integration',
    title: 'Systems integration',
    summary: 'Connects ERP, WMS, TMS, CRM, and analytics stacks through governed interfaces.',
    benefit: 'Coordinate decisions across systems instead of between them.'
  }
];

export const impactCards = [
  { value: '38%', label: 'faster exception response' },
  { value: '17%', label: 'forecast accuracy lift' },
  { value: '29%', label: 'fewer manual touches' },
  { value: '21%', label: 'lower stockouts' },
  { value: '2.4x', label: 'faster planning cycles' }
];

export const trustPillars = [
  {
    title: 'Integrations',
    text: 'ERP, WMS, TMS, CRM, BI, and event streams connected with governed handoffs.'
  },
  {
    title: 'Security',
    text: 'Least-privilege access, auditability, and clear ownership across environments.'
  },
  {
    title: 'Scalability',
    text: 'Built to support site-level pilots and enterprise rollouts without redesign.'
  },
  {
    title: 'Deployment',
    text: 'Phased delivery aligned to operational windows, change control, and adoption.'
  },
  {
    title: 'Enterprise readiness',
    text: 'Governance, monitoring, and support expectations designed for larger teams.'
  },
  {
    title: 'Implementation support',
    text: 'Strategy, build, integration, and team enablement from one delivery partner.'
  }
];

export const sectors = {
  logistics: {
    headline: 'Logistics',
    summary: 'Reduce routing drift, delay response, and lane-level uncertainty.',
    points: [
      'Live exception routing for shipments at risk.',
      'Load and lane visibility across the day.',
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
      'Replenishment support with cleaner signals.'
    ]
  }
} as const;