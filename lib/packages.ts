export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period: string;
  turnaround: string;
  description: string;
  idealFor: string;
  recommended: boolean;
  deliverables: string[];
  keyHighlights: {
    pages: string;
    design: string;
    code: string;
    seo: string;
    support: string;
  };
}

export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    tooltip?: string;
    starter: string | boolean;
    growth: string | boolean;
    scale: string | boolean;
  }[];
}

export interface AddOnService {
  name: string;
  price: string;
  cadence: string;
  description: string;
  deliverables: string[];
}

export const packagesData: PackageTier[] = [
  {
    id: "starter",
    name: "Starter Showcase",
    badge: "Targeted Launch Scope",
    tagline: "Custom visual credibility designed to turn visitors into paying clients",
    price: "$3,200",
    period: "General Baseline",
    turnaround: "2 to 3 Weeks",
    description: "Built for founders, consultants, and service businesses that need an impressive web presence to build immediate trust and convert visitors into qualified inquiries.",
    idealFor: "Businesses launching a new brand or replacing an outdated, slow template.",
    recommended: false,
    deliverables: [
      "5 custom pages designed and hand-coded from scratch",
      "Loads in under a second so visitors never bounce",
      "Engineered for easy one-thumb browsing on all smartphones",
      "Zero slow plugins, security vulnerabilities, or template bloat",
      "Full Google search indexing and sitemap setup",
      "Clean inquiry form that sends leads straight to your inbox",
      "Domain connection, security certificate, and global hosting setup",
      "100% full intellectual property and code ownership",
      "30 days post-launch warranty with dedicated fixes"
    ],
    keyHighlights: {
      pages: "Up to 5 Custom Pages",
      design: "Bespoke Visual Design",
      code: "Sub-Second Load Time",
      seo: "Google Search Indexing",
      support: "30 Days Direct Support"
    }
  },
  {
    id: "growth",
    name: "Growth Engine",
    badge: "Most Popular Scope",
    tagline: "The complete client-acquisition engine to rank on Google and win business",
    price: "$5,800",
    period: "General Baseline",
    turnaround: "3 to 5 Weeks",
    description: "Our flagship package for established companies ready to outrank competitors on Google, command premium pricing, and convert visitors into steady client consultations.",
    idealFor: "Growing companies looking to generate steady client inquiries, rank on Google, and establish market authority.",
    recommended: true,
    deliverables: [
      "Up to 10 custom pages designed to guide visitors toward booking a call",
      "Interactive design mockups for your review before any code is written",
      "Guaranteed 98+ Google PageSpeed score (loads in under 800ms)",
      "Targeted Google search setup to rank for your most profitable services",
      "Google Search Console integration and privacy-first visitor analytics",
      "Custom qualification form tailored to filter your ideal high-value clients",
      "Polished interactive animations that keep visitors engaged",
      "Intuitive publishing dashboard so your team can update text and images",
      "100% complete ownership of your code, designs, and domain",
      "90 days priority support and ongoing speed monitoring"
    ],
    keyHighlights: {
      pages: "Up to 10 Custom Pages",
      design: "Complete Custom Visual System",
      code: "Under 800ms Load Guarantee",
      seo: "Targeted Search Optimization",
      support: "90 Days Priority Support"
    }
  },
  {
    id: "scale",
    name: "Scale & Authority",
    badge: "Enterprise Scope",
    tagline: "Custom web platforms built for high-traffic companies and multi-service brands",
    price: "$11,500+",
    period: "Custom Scope",
    turnaround: "6 to 8 Weeks",
    description: "An end-to-end custom build for high-traffic companies, funded businesses, and multi-service brands requiring custom portals, multi-region search architecture, or complex workflows.",
    idealFor: "Established companies and scaling teams requiring custom workflows, multi-region search expansion, or client portals.",
    recommended: false,
    deliverables: [
      "15+ custom pages or custom web application interface",
      "Easy publishing dashboard for marketing teams to add articles and case studies",
      "Custom connections with your CRM, payment processors, and scheduling tools",
      "Multi-location and regional Google search architecture",
      "Interactive customer tools, quote calculators, or private client portals",
      "Instant global loading speeds backed by a 99.9% uptime standard",
      "Bank-grade security hardening and full accessibility compliance",
      "Dedicated lead designer and senior technical director",
      "Comprehensive step-by-step video walkthrough library for your staff",
      "6 months dedicated priority maintenance and guaranteed response times"
    ],
    keyHighlights: {
      pages: "15+ Pages or Custom Portal",
      design: "Multi-Brand Design System",
      code: "Custom CRM & Workflow Tools",
      seo: "Multi-Region Search Strategy",
      support: "6 Months Priority Support"
    }
  }
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    category: "Design & Buyer Experience",
    features: [
      { name: "Custom Pages Included", starter: "Up to 5 Pages", growth: "Up to 10 Pages", scale: "15+ or Custom Portal" },
      { name: "Bespoke Visual Design (No Templates)", starter: true, growth: true, scale: true },
      { name: "Interactive Clickable Prototype", starter: "Key Flow Only", growth: "Full Interactive Prototype", scale: "Complete Multi-Device Prototype" },
      { name: "Conversion Rate Architecture", starter: "Proven Conversion Layouts", growth: "Tailored Buyer Journey Mapping", scale: "Advanced Multi-Funnel Strategy" },
      { name: "Reusable Design Component Library", starter: false, growth: true, scale: "Enterprise Design System" }
    ]
  },
  {
    category: "Speed & Performance",
    features: [
      { name: "Google PageSpeed Score Guarantee", starter: "95+ on Mobile & Desktop", growth: "98+ Verified on Mobile", scale: "Near-Perfect 99-100 Across All" },
      { name: "Under 1-Second Page Load Guarantee", starter: true, growth: true, scale: true },
      { name: "Zero Slow Plugins or Template Bloat", starter: true, growth: true, scale: true },
      { name: "One-Thumb Mobile Experience", starter: true, growth: true, scale: true },
      { name: "Custom Micro-Animations & Interactivity", starter: "Subtle Transitions", growth: "Engaging Hover & Scroll Effects", scale: "Custom Interactive 3D & Data Visuals" },
      { name: "Private Team Publishing Dashboard", starter: "Add-on Available", growth: "Available as Add-on", scale: "Included" }
    ]
  },
  {
    category: "Google Search & Lead Capture",
    features: [
      { name: "Google Search Setup & Sitemap Indexing", starter: true, growth: true, scale: true },
      { name: "Google Search Markup (Schema.org)", starter: "Business Profile Schema", growth: "Full Service & FAQ Search Results", scale: "Custom Dynamic Search Results" },
      { name: "High-Intent Keyword Mapping", starter: "Core Brand Keywords", growth: "Targeted Service Search Strategy", scale: "Multi-Market National Search Plan" },
      { name: "Visitor Analytics & Goal Tracking", starter: "Standard Traffic Tracking", growth: "Custom Inquiry Conversion Tracking", scale: "Full Funnel & Revenue Attribution" },
      { name: "Custom Lead Capture Form", starter: "Standard Contact Form", growth: "Qualification-Filtered Form", scale: "Multi-Step Interactive Funnel" }
    ]
  },
  {
    category: "Ownership & Peace of Mind",
    features: [
      { name: "100% Code & Asset Ownership", starter: true, growth: true, scale: true },
      { name: "Zero Mandatory Monthly Platform Fees", starter: true, growth: true, scale: true },
      { name: "Post-Launch Warranty & Free Fixes", starter: "30 Days", growth: "90 Days", scale: "6 Months Priority Support" },
      { name: "Dedicated Direct Communication", starter: "Direct Email Support", growth: "Dedicated Shared Slack Channel", scale: "VIP Slack & Direct Phone Access" },
      { name: "Step-by-Step Video Training", starter: "Standard User Guide", growth: "Custom Video Training Library", scale: "Live Team Workshops + Video Guides" }
    ]
  }
];

export const addOnServices: AddOnService[] = [
  {
    name: "Ongoing Care & Speed Retainer",
    price: "$450",
    cadence: "/ month",
    description: "Proactive monthly speed checks, security updates, offsite backups, and up to 4 hours of design or content updates so your site stays fast and current.",
    deliverables: [
      "Continuous Google speed monitoring",
      "Security checks and software updates",
      "Automated offsite backups every week",
      "Up to 4 hours of monthly design or copy changes"
    ]
  },
  {
    name: "Existing Website Speed Overhaul",
    price: "$750",
    cadence: "One-time",
    description: "Slash loading times on your current slow website to under a second, cut mobile bounce rates in half, and achieve all-green scores on Google.",
    deliverables: [
      "Sub-second mobile speed optimization",
      "Image and asset weight reduction",
      "Removal of slow scripts and bloated code",
      "Before-and-after Google speed audit report"
    ]
  },
  {
    name: "Targeted Google Search Sprint",
    price: "$1,400",
    cadence: "One-time",
    description: "Comprehensive search analysis to identify what your ideal buyers type into Google, followed by complete search optimization across your key service pages.",
    deliverables: [
      "Competitor keyword gap analysis",
      "10 High-intent service page search blueprints",
      "Google search markup and snippet setup",
      "Google Business profile optimization"
    ]
  },
  {
    name: "Private Team Publishing Dashboard",
    price: "$950",
    cadence: "One-time",
    description: "A simple, secure dashboard that lets your internal team publish blog articles, case studies, and team updates in seconds without writing code.",
    deliverables: [
      "Intuitive article and case study editor",
      "Custom formatting for images and quotes",
      "Automatic social media preview generation",
      "Staff author profiles and category filters"
    ]
  }
];

export const packagesFaqs = [
  {
    question: "How much does a custom website cost?",
    answer: "Creative Realm Designs provides web design packages typically starting between $3,200 and $11,500 USD with zero hidden fees. The Starter package is generally around $3,200, our Growth Engine around $5,800, and enterprise projects start from $11,500. These figures are general baseline guidelines rather than fixed rates. Every project is unique, and we welcome open discussion with our clients so we can decide together on pricing and deliverables that fit your scope and budget."
  },
  {
    question: "What is your milestone payment schedule?",
    answer: "We require a 50% deposit before kickoff to secure your studio calendar window, and the remaining 50% only after you review and approve the final website. For projects over $10,000, we split payments into three agreed milestones. Once scope and pricing are agreed upon with you, every milestone is transparent, protecting you from unexpected hourly bills."
  },
  {
    question: "Do I own 100% of the website, code, and design assets?",
    answer: "Yes. You hold complete legal ownership of your website code, custom Figma designs, and brand graphics immediately upon final payment. We never charge monthly software licensing fees, proprietary hosting markups, or lock you into closed platforms. Your company owns all code outright and can host it anywhere."
  },
  {
    question: "How long does it take to design and launch a custom website?",
    answer: "Most custom websites launch within two to five weeks. Our Starter Showcase takes two to three weeks, our flagship Growth Engine takes three to five weeks, and complex platforms take six to eight weeks. We share weekly working previews and guarantee agreed launch dates in your written project scope."
  },
  {
    question: "How do you guarantee a 98+ Google PageSpeed score?",
    answer: "We guarantee page loads under 800 milliseconds on mobile phones by writing hand-crafted code without slow WordPress plugins, heavy themes, or bloated page builders. We optimize images automatically and test every page with Google Lighthouse to verify green 98+ speed scores before your site goes live."
  },
  {
    question: "What ongoing support or maintenance do you provide after launch?",
    answer: "Every custom website includes 30 to 90 days of post-launch warranty support with free technical fixes. We also offer an optional Growth & Care Retainer for $450 per month, which provides continuous Google speed monitoring, offsite backups, security updates, and up to four hours of monthly content updates."
  }
];
