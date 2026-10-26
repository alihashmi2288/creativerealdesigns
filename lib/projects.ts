export interface Project {
  id: number;
  title: string;
  slug: string;
  category: "Website Design" | "Website Development" | "SEO & Growth";
  clientIndustry: string;
  image: string;
  description: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lumina Studio",
    slug: "lumina-e-commerce",
    category: "Website Design",
    clientIndustry: "E-Commerce & Retail",
    image: "/projects/ecommerce.png",
    description: "A custom online store built for speed, effortless mobile browsing, and a clear two-step checkout that keeps shoppers buying.",
    tags: ["Mobile E-Commerce", "Checkout Optimization", "Conversion Design"],
    metrics: [
      { label: "Mobile Orders", value: "+42%" },
      { label: "Mobile Load Speed", value: "680ms" },
      { label: "Checkout Drop-off", value: "-28%" }
    ],
    challenge: "The previous online store took 4.2 seconds to load on mobile phones. Shoppers faced a clunky, multi-step checkout that asked for redundant information, causing more than 70% of mobile visitors to abandon their carts before paying.",
    solution: "We rebuilt the shopping experience from the ground up with a 680ms mobile load time, thumb-friendly product navigation, and a simplified two-step checkout flow that cut purchase completion time in half.",
    deliverables: ["Custom Storefront Design", "Two-Step Mobile Checkout Flow", "High-Speed Product Page Layouts", "Speed & Conversion Audit"]
  },
  {
    id: 2,
    title: "Vantage Analytics",
    slug: "vantage-saas",
    category: "Website Development",
    clientIndustry: "B2B Software & SaaS",
    image: "/projects/saas.png",
    description: "A fast corporate website with interactive product walkthroughs that let enterprise buyers test features instantly without waiting for a sales rep.",
    tags: ["Corporate Web Platform", "Interactive Demos", "Sub-Second Performance"],
    metrics: [
      { label: "Enterprise Demo Bookings", value: "+185%" },
      { label: "Mobile PageSpeed Score", value: "99/100" },
      { label: "Global Load Time", value: "620ms" }
    ],
    challenge: "The company's previous marketing site took more than five seconds to load. Corporate buyers abandoned the page before discovering what the software actually does, causing demo requests to stagnate.",
    solution: "We engineered a clean web platform that opens in 620 milliseconds worldwide, paired with hands-on feature previews that turn passive visitors into qualified sales meetings.",
    deliverables: ["High-Speed Web Platform", "Self-Guided Product Walkthroughs", "Sub-Second Mobile Architecture", "Enterprise Security Audit"]
  },
  {
    id: 3,
    title: "Apex Architectural Group",
    slug: "creative-folio",
    category: "Website Design",
    clientIndustry: "Architecture & High-End Real Estate",
    image: "/projects/portfolio.png",
    description: "A bespoke digital portfolio built to showcase multi-million pound commissions and win high-value private client contracts.",
    tags: ["Luxury Portfolio", "Regional Search SEO", "High-Value Inquiries"],
    metrics: [
      { label: "Qualified Client Inquiries", value: "+142%" },
      { label: "Top-3 Google Rankings", value: "48+" },
      { label: "Mobile Bounce Rate", value: "-35%" }
    ],
    challenge: "The firm relied on an outdated website template that made world-class architectural projects look generic, hurting credibility with wealthy property developers and private homeowners seeking high-budget commissions.",
    solution: "We designed an editorial portfolio with high-resolution visual storytelling that loads instantly, regional Google search optimization, and a private consultation booking flow that qualifies prospects upfront.",
    deliverables: ["Bespoke Digital Portfolio", "Regional Google SEO Structure", "High-Resolution Gallery System", "Private Consultation Inquiry Flow"]
  },
  {
    id: 4,
    title: "Aura Living Spaces",
    slug: "aura-interiors",
    category: "SEO & Growth",
    clientIndustry: "Interior Design & Renovations",
    image: "/projects/interior.png",
    description: "A regional Google search structure and sub-second mobile rebuild that took a boutique showroom from invisible to #1 in local search results.",
    tags: ["Google Search Visibility", "Local SEO Architecture", "Qualified Inquiries"],
    metrics: [
      { label: "#1 Google Rankings", value: "24 Terms" },
      { label: "Inbound Consultation Calls", value: "3.2x" },
      { label: "Mobile Load Speed", value: "540ms" }
    ],
    challenge: "Despite an award-winning showroom, the studio was invisible on Google searches when homeowners in their area looked for high-end interior designers, losing high-value contracts to lower-tier competitors.",
    solution: "We restructured the website with dedicated location and service pages, built clean search signals for Google, and cut mobile loading time to 540 milliseconds so interested homeowners can book calls effortlessly.",
    deliverables: ["Regional Google SEO Campaign", "Location Page Architecture", "Sub-Second Mobile Rebuild", "Search Console & Inbound Tracking"]
  }
];

export const categories = ["All", "Website Design", "Website Development", "SEO & Growth"] as const;
