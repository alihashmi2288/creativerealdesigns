import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Palette, 
  Code2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  TrendingUp, 
  Clock 
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import BlurText from "@/components/react-bits/BlurText";
import CountUp from "@/components/react-bits/CountUp";
import ProposalDialog from "@/components/ProposalDialog";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Custom High-Speed Websites & SEO | Creative Realm Designs",
  description: "We build custom websites that load in under a second and rank at the top of Google. Turn search visitors into booked client inquiries. 100% code ownership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom High-Speed Websites & SEO | Creative Realm Designs",
    description: "We build custom websites that load in under a second and rank at the top of Google. Turn search visitors into booked client inquiries. 100% code ownership.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/clean-design.png",
        width: 1200,
        height: 630,
        alt: "Creative Realm Designs - Custom High-Speed Websites and Google SEO",
      },
    ],
  },
};

const homeFaqs = [
  {
    q: "How much does a custom website cost?",
    a: "Creative Realm Designs provides web design packages typically starting between $3,200 and $11,500 USD with zero hidden fees. The Starter package is generally around $3,200, our Growth Engine around $5,800, and enterprise projects start from $11,500. These figures are standard baseline prices rather than rigid or fixed rates. Customers can talk with us to discuss and decide on pricing and deliverables tailored to your specific requirements and budget.",
  },
  {
    q: "How long does it take to design and launch a custom website?",
    a: "Most custom websites launch within two to five weeks. Our Starter Showcase takes two to three weeks, our flagship Growth Engine takes three to five weeks, and complex platforms take six to eight weeks. We share weekly working previews and guarantee agreed launch dates in your written project scope.",
  },
  {
    q: "Do we own 100% of our website code and design assets?",
    a: "Yes. You hold complete legal ownership of your website code, custom Figma designs, and brand graphics immediately upon final payment. We never charge monthly software licensing fees, proprietary hosting markups, or lock you into closed platforms. Your company owns all code outright and can host it anywhere.",
  },
  {
    q: "How do you guarantee sub-second mobile loading speed?",
    a: "We guarantee page loads under 800 milliseconds on mobile phones by writing hand-crafted code without slow WordPress plugins, heavy themes, or bloated page builders. We optimize images automatically and test every page with Google Lighthouse to verify green 98+ speed scores before your site goes live.",
  },
  {
    q: "How does Creative Realm help our website rank on Google?",
    a: "We build search engine optimization directly into your website before launch. We add verified Google structured data, clear heading hierarchies, and submit search sitemaps directly to Google Search Console. Most client pages index within 72 hours, building organic search ranking momentum within four to eight weeks.",
  },
  {
    q: "Why choose custom web development over WordPress or Webflow?",
    a: "WordPress and Webflow websites rely on third-party plugins and heavy visual builders that slow page loading, break during updates, and cost recurring monthly subscriptions. Our custom-built websites load in under a second, eliminate security vulnerabilities, convert more visitors into client inquiries, and run forever with zero platform subscriptions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

const featuredProjects = [
  {
    title: "Lumina Studio Online Store",
    category: "High-Speed E-Commerce Storefront",
    tag: "+42% Mobile Orders",
    problem: "Sluggish 4.6-second WordPress WooCommerce template caused high cart abandonment and lost sales on mobile phones.",
    solution: "Engineered a custom, instant-loading digital storefront with a streamlined 1-tap checkout flow and clean product browsing.",
    result: "Achieved a 620ms mobile load time, dropped checkout drop-off by 35%, and increased completed mobile orders by +42% within 30 days.",
    image: "/projects/ecommerce.png",
    slug: "lumina-e-commerce",
  },
  {
    title: "Vantage Analytics Software Platform",
    category: "Corporate Web Platform & UI Design",
    tag: "Sub-0.8s Global Load",
    problem: "Complex analytics platform struggled to explain its business value, resulting in low demo booking rates from enterprise visitors.",
    solution: "Designed a clean visual hierarchy in Figma and hand-coded a high-speed web application with interactive product previews.",
    result: "Sub-0.8s global load time and a 115% increase in qualified inbound enterprise demo requests within eight weeks of rollout.",
    image: "/projects/saas.png",
    slug: "vantage-saas",
  },
  {
    title: "Apex Architectural Group Portfolio",
    category: "Bespoke Portfolio & Technical Google SEO",
    tag: "48+ Top 3 Google Rankings",
    problem: "Zero organic search visibility for commercial architecture searches in their primary metropolitan service area.",
    solution: "Built a high-performance visual portfolio with structured local business schemas, semantic headings, and instant mobile loading.",
    result: "Captured 48 top-3 Google rankings for regional commercial search terms and drove 28 high-value project inquiries in the first quarter.",
    image: "/projects/portfolio.png",
    slug: "creative-folio",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page-level FAQ JSON-LD Schema for Google AI Overviews and AI Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center text-center px-6 sm:px-12 md:px-24 overflow-hidden pt-6 pb-16 sm:py-20" aria-labelledby="hero-title">
        <HeroBackground />

        <div className="max-w-5xl z-10 px-4 py-8 sm:py-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="emerald" className="px-3.5 py-1 text-xs uppercase tracking-widest font-mono font-medium">
                <span className="size-1.5 rounded-full bg-[#003c33] mr-2 inline-block" aria-hidden="true" />
                <span>HIGH-SPEED WEBSITES &amp; GOOGLE SEO</span>
              </Badge>
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal font-display text-[#17171c] leading-[1.05] tracking-tight mb-8">
              <BlurText 
                text="Custom Websites" 
                delay={50} 
                className="justify-center"
                as="span"
              />
              <br />
              <span className="text-[#ff7759] inline-block">
                <BlurText 
                  text="Built to Rank Fast" 
                  delay={70} 
                  className="justify-center text-[#ff7759]"
                  as="span"
                />
              </span>
              <br />
              <BlurText 
                text="and Win More Clients" 
                delay={90} 
                className="justify-center"
                as="span"
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[#616161] max-w-2xl mx-auto mb-10 font-normal leading-relaxed font-sans">
              We design and build custom websites that open in under a second on mobile phones, rank on page 1 of Google, and turn search visitors into booked client calls. You get complete code ownership with zero monthly platform fees.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <ProposalDialog>
                <button
                  type="button"
                  className="btn-primary text-sm px-8 py-3.5 cursor-pointer font-medium"
                  aria-label="Book a 20-Minute Strategy Call: Free consultation with Creative Realm"
                >
                  <span>Book a 20-Minute Strategy Call</span>
                </button>
              </ProposalDialog>
              <ProposalDialog>
                <button
                  type="button"
                  className="btn-secondary text-sm px-7 py-3.5 cursor-pointer font-medium"
                  aria-label="Request a Proposal: Get a tailored project quote"
                >
                  <span>Request a Proposal</span>
                </button>
              </ProposalDialog>
              <Link 
                href="/portfolio" 
                prefetch={false}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#17171c] hover:text-[#003c33] underline underline-offset-4 px-3 py-2 transition-colors"
                aria-label="View Verified Case Studies: Client outcomes and performance data"
              >
                <span>View Verified Case Studies</span>
                <ArrowRight className="w-4 h-4 ml-0.5 inline" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-[#e5e7eb] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-4xl mx-auto">
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <Gauge className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">&lt;800ms Mobile Load Time</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <ShieldCheck className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Zero Fragile Plugins</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <TrendingUp className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Day-1 Google Search Indexing</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <Clock className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">100% Code &amp; Asset Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Slow Code Section */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-y border-[#e5e7eb] cv-auto" aria-labelledby="cost-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Why Speed Drives Revenue
              </span>
              <h2 id="cost-heading" className="text-3xl sm:text-4xl md:text-5xl font-normal font-display text-[#17171c] tracking-tight mb-6 leading-tight">
                A 4-Second Mobile Load Time <br />
                <span className="text-[#003c33]">Costs You Qualified Inquiries.</span>
              </h2>
              <p className="text-[#616161] text-base md:text-lg mb-6 leading-relaxed font-sans">
                Over 60% of prospective clients evaluate your business on a smartphone before ever contacting you. When a website takes four seconds to load on a mobile network, more than half of those visitors leave before seeing your offer. They click straight back to Google and hire a competitor.
              </p>
              <p className="text-[#616161] text-base md:text-lg mb-8 leading-relaxed font-sans">
                We replace slow site builder templates and crash-prone plugins with clean, custom-built websites that load in under 800 milliseconds. Your visitors get an instant, clear experience that turns clicks into booked client inquiries.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e7eb]">
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] mb-1">
                    <CountUp to={98} suffix="+" duration={1.5} />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#616161] font-mono">Mobile Speed Score</div>
                </div>
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-2xl sm:text-3xl font-normal font-display text-[#17171c] mb-1 pt-1">
                    &lt;0.8s
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#616161] font-mono">Mobile Load Time</div>
                </div>
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-2xl sm:text-3xl font-normal font-display text-[#17171c] mb-1 pt-1">
                    Day 1
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#616161] font-mono">Google Indexing</div>
                </div>
              </div>
              <p className="text-xs text-[#616161] font-sans mt-4 leading-normal">
                *Verified using Google Lighthouse mobile performance audits and Google Search Console indexing.
              </p>
            </div>
            
            <div className="relative">
              <div className="p-4 sm:p-6 rounded-[22px] bg-white border border-[#d9d9dd] relative flex flex-col justify-end overflow-hidden group shadow-sm">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-4 bg-[#eeece7]">
                  <Image 
                    src="/clean-design.png" 
                    alt="Mockup of high-speed mobile website interface engineered for fast conversions and sub-second load times" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-[12px] bg-[#eeece7] border border-[#e5e7eb]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#003c33]" aria-hidden="true" />
                    <span className="text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider">Engineered for Mobile Inquiries</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#17171c] mb-1">A Direct Path From First Click to Inbound Lead</h3>
                  <p className="text-[#616161] text-xs font-sans">High-contrast typography, clear value messaging, and one-tap inquiry forms tested across real iPhone and Android devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 cv-auto" aria-labelledby="disciplines-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
              Core Disciplines
            </span>
            <h2 id="disciplines-heading" className="text-3xl md:text-5xl font-normal font-display text-[#17171c] tracking-tight mb-4">
              Custom Design, High-Speed Development &amp; Google Search Built as One System
            </h2>
            <p className="text-[#616161] font-sans text-base max-w-xl mx-auto">
              We integrate bespoke visual design, high-speed code, and technical search ranking to turn search visitors into paying client inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Interface Design",
                icon: Palette,
                highlight: "Turn Visitors Into Inquiries",
                desc: "We design custom, brand-tailored layouts in Figma that build instant credibility. Every screen guides visitors toward booking a call or requesting a quote, with clear typography and zero template clutter.",
                features: [
                  "Custom Figma designs built for your exact audience",
                  "Mobile-first layouts tested for effortless thumb navigation",
                  "High-contrast visual hierarchy that guides action",
                  "Frictionless inquiry forms placed at high-intent points"
                ]
              },
              {
                title: "High-Speed Web Development",
                icon: Code2,
                highlight: "Sub-Second Mobile Load Times",
                desc: "We hand-code every page with clean, modern web standards. Your website opens in under a second on mobile networks, never crashes from plugin conflicts, and stays secure without constant maintenance headaches.",
                features: [
                  "Loads in under 800ms so mobile visitors never bounce",
                  "Zero third-party plugin bloat or vulnerability risks",
                  "Rock-solid reliability during high traffic spikes",
                  "100% full code ownership with zero platform lock-in"
                ]
              },
              {
                title: "Technical Google SEO",
                icon: Search,
                highlight: "First-Page Search Visibility",
                desc: "We structure your website so Google immediately understands what you do and where you operate. Your pages get indexed properly to attract high-intent searchers looking to hire your services.",
                features: [
                  "Rich business data schema for Google & AI search",
                  "Clean heading hierarchy targeted for buyer searches",
                  "Instant Day-1 Google Search Console verification",
                  "Top-tier speed scores that Google rewards in rankings"
                ]
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="p-8 sm:p-10 flex flex-col justify-between rounded-[16px] relative bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all duration-200 group"
              >
                <div>
                  <div className="size-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {feature.highlight}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#17171c] mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#616161] text-sm leading-relaxed font-sans mb-6">
                    {feature.desc}
                  </p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-[#e5e7eb] mb-8">
                    {feature.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-[#212121] font-sans">
                        <CheckCircle2 size={14} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/services" 
                  prefetch={false}
                  className="btn-secondary text-xs inline-flex items-center gap-1.5 font-medium"
                  aria-label={`Explore Details: ${feature.title}`}
                >
                  <span>{feature.title === "Custom Interface Design" ? "See Design Services" : feature.title === "High-Speed Web Development" ? "See Development Services" : "See Google SEO Services"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictable Milestones Section */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#003c33] text-white cv-auto" aria-labelledby="milestones-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block">
              Predictable Milestones
            </span>
            <h2 id="milestones-heading" className="text-3xl md:text-5xl font-normal font-display text-white tracking-tight mb-4">
              From Kickoff to Live Launch in Four Predictable Weeks
            </h2>
            <p className="text-[#d9d9dd] font-sans text-base max-w-xl mx-auto">
              Every project follows an agreed timeline and transparent quote. You review working progress each week with complete visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                phase: "Milestone 01",
                timeline: "Week 1",
                title: "Strategy & Architecture",
                desc: "We audit your top competitors, define your site structure, and produce a clear conversion blueprint with tailored deliverables and a transparent quote.",
                deliverables: [
                  "20-minute scope consultation",
                  "Information architecture blueprint",
                  "Agreed project scope & pricing plan"
                ]
              },
              {
                phase: "Milestone 02",
                timeline: "Weeks 2 to 3",
                title: "Custom Design & Build",
                desc: "We design high-fidelity Figma layouts for your review, refine every detail based on your feedback, and hand-code fast, responsive web pages.",
                deliverables: [
                  "Interactive Figma design prototype",
                  "High-speed custom web development",
                  "Mobile and cross-device testing"
                ]
              },
              {
                phase: "Milestone 03",
                timeline: "Launch Week",
                title: "Verification & Google Indexing",
                desc: "We verify sub-800ms mobile speed benchmarks, test lead capture forms, configure your custom domain with SSL, and submit your site for Google indexing.",
                deliverables: [
                  "Sub-800ms mobile speed verification",
                  "Google Search Console indexing",
                  "Full code handover & 100% IP ownership"
                ]
              }
            ].map((item) => (
              <div 
                key={item.phase}
                className="p-8 sm:p-10 flex flex-col justify-between rounded-[22px] bg-[#002b24] border border-[#004d42] text-white transition-colors duration-200 hover:border-[#006657]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#004d42]">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#edfce9] uppercase">
                      {item.phase}
                    </span>
                    <span className="text-xs font-mono text-[#d9d9dd] py-1 px-2.5 rounded-full bg-[#003c33] border border-[#005a4d]">
                      {item.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#d9d9dd] text-sm leading-relaxed font-sans mb-6">
                    {item.desc}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-[#004d42]/70">
                    {item.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-center gap-2 text-xs text-[#edfce9] font-sans">
                        <CheckCircle2 size={13} className="text-[#c3eec0] flex-shrink-0" aria-hidden="true" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Package Selector */}
          <div className="p-6 sm:p-10 rounded-[22px] bg-white text-[#212121] border border-[#e5e7eb] shadow-xl">
            <div className="text-center mb-8">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Transparent Packages
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight mb-2">
                Flexible Packages. Tailored Deliverables.
              </h3>
              <p className="text-[#616161] text-xs sm:text-sm font-sans max-w-lg mx-auto">
                These prices serve as standard baseline guidelines. We can talk through your specific needs and agree on pricing and scope that fit your exact goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter Website",
                  price: "$3,200",
                  tagline: "Built for independent practices, consultancies, and local businesses that need immediate credibility and inbound inquiries.",
                  features: [
                    "Up to 5 Custom-Designed Web Pages",
                    "Sub-800ms Mobile Load Guarantee",
                    "Google Search Console & Indexing Setup",
                    "Inquiry Form with Spam Defense",
                    "100% Code & Asset Ownership"
                  ],
                  recommended: false,
                  cta: "Choose Starter ($3,200)"
                },
                {
                  name: "Business Growth",
                  price: "$5,800",
                  tagline: "Our flagship build for established companies competing to win top organic Google rankings and high-value leads.",
                  features: [
                    "Up to 10 Custom-Designed Web Pages",
                    "Full Regional Google Search SEO",
                    "Interactive Lead Capture & Booking Flow",
                    "Custom Micro-Animations & Polished UI",
                    "Priority Launch Verification"
                  ],
                  recommended: true,
                  cta: "Choose Business Growth ($5,800)"
                },
                {
                  name: "Custom / Store",
                  price: "$11,500",
                  tagline: "For scaling brands requiring online e-commerce stores, client portals, or custom third-party integrations.",
                  features: [
                    "Bespoke E-Commerce Store or Portal",
                    "Unlimited Scalable Architecture",
                    "Custom Payment Gateway & API Sync",
                    "Dedicated 90-Day Post-Launch Support",
                    "Full Team Training & Documentation"
                  ],
                  recommended: false,
                  cta: "Choose Custom / Store ($11,500)"
                }
              ].map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`p-6 sm:p-8 rounded-[16px] flex flex-col justify-between transition-all ${
                    pkg.recommended 
                      ? "bg-[#eeece7] border-2 border-[#17171c]" 
                      : "bg-[#fafaf9] border border-[#e5e7eb]"
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-bold font-display text-[#17171c] mb-1">
                      {pkg.name}
                    </h4>
                    <div className="text-3xl font-bold font-display text-[#17171c] mb-3">
                      {pkg.price}
                    </div>
                    <p className="text-[#616161] text-xs font-sans mb-6 leading-relaxed">
                      {pkg.tagline}
                    </p>
                    <ul className="space-y-2 mb-6 pt-4 border-t border-[#d9d9dd]">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                          <CheckCircle2 size={13} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ProposalDialog defaultPackage={pkg.name}>
                    <button
                      type="button"
                      className={`w-full py-3 px-4 rounded-full font-sans text-xs font-medium cursor-pointer min-h-[44px] transition-all ${
                        pkg.recommended 
                          ? "btn-primary" 
                          : "btn-pill-outline"
                      }`}
                      aria-label={`Choose ${pkg.name}: Select package`}
                    >
                      {pkg.cta}
                    </button>
                  </ProposalDialog>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/packages"
                prefetch={false}
                className="btn-secondary text-xs inline-flex items-center gap-2 font-medium"
              >
                <span>View Full Feature Comparison &amp; Add-Ons</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contractual Standards Section */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-b border-[#e5e7eb] cv-auto" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
              Contractual Standards
            </span>
            <h2 id="standards-heading" className="text-3xl md:text-5xl font-normal font-display text-[#17171c] tracking-tight">
              Four Commitments Guaranteed on Every Contract
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { 
                label: "<800ms Mobile Load", 
                content: (
                  <span className="inline-flex items-baseline justify-center tracking-tight">
                    <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-[#616161] font-light mr-0.5 select-none" aria-hidden="true">&lt;</span>
                    <span>800</span>
                    <span className="text-xl sm:text-2xl lg:text-lg xl:text-2xl font-mono text-[#616161] ml-0.5">ms</span>
                  </span>
                ),
                desc: "Independently verified on 4G mobile devices using Google Lighthouse audits." 
              },
              { 
                label: "Verified Day-1 Search Indexing", 
                content: <span>Day 1</span>, 
                desc: "Structured business schema, XML sitemaps, and Google Search Console submitted before launch." 
              },
              { 
                label: "100% Full Code & Asset Ownership", 
                content: <CountUp to={100} prefix="" suffix="%" duration={1.6} className="font-normal" />, 
                desc: "All design files, custom code, and assets transferred to you with zero licensing fees." 
              },
              { 
                label: "Guaranteed Milestone Dates", 
                content: <span>Agreed</span>, 
                desc: "Firm milestone dates and weekly working previews agreed in writing before kickoff." 
              }
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-7 sm:px-6 sm:py-8 rounded-[16px] bg-white border border-[#e5e7eb] text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal font-display text-[#17171c] mb-3 tracking-tight whitespace-nowrap min-h-[48px] sm:min-h-[56px] flex items-center justify-center">
                    {stat.content}
                  </div>
                  <div className="text-xs text-[#17171c] font-bold mb-1.5 font-sans">{stat.label}</div>
                  <div className="text-xs text-[#616161] font-sans leading-relaxed">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Projects */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 cv-auto" aria-labelledby="portfolio-teaser-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 sm:mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Verified Case Studies
              </span>
              <h2 id="portfolio-teaser-heading" className="text-4xl md:text-6xl font-normal font-display text-[#17171c] tracking-tight leading-tight">
                Commercial Outcomes <br /> Built on Custom Code
              </h2>
            </div>
            <Link 
              href="/portfolio" 
              prefetch={false}
              className="btn-pill-outline text-xs px-6 py-3 min-h-[44px] group flex items-center gap-2 font-medium"
              aria-label="View All Case Studies: Selected client portfolio"
            >
              <span>View All Case Studies</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.title}
                className="p-6 flex flex-col justify-between rounded-[22px] bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all duration-200"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden mb-6 bg-[#eeece7] border border-[#e5e7eb]">
                    <Image 
                      src={project.image} 
                      alt={`Mockup for ${project.title} showing client results and design system`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#17171c] text-white">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#17171c] mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6 text-xs font-sans">
                    <div>
                      <span className="font-semibold text-[#17171c]">Problem: </span>
                      <span className="text-[#616161]">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#17171c]">Solution: </span>
                      <span className="text-[#616161]">{project.solution}</span>
                    </div>
                    <div className="pt-1.5 border-t border-[#f0f0f0]">
                      <span className="font-bold text-[#003c33]">Result: </span>
                      <span className="text-[#17171c] font-medium">{project.result}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/portfolio/${project.slug}`}
                  prefetch={false}
                  className="btn-secondary text-xs inline-flex items-center gap-1.5 font-medium"
                  aria-label={`View Case Study: ${project.title}`}
                >
                  <span>View Case Study</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-y border-[#e5e7eb] cv-auto" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
              Client Verification
            </span>
            <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-normal font-display text-[#17171c] tracking-tight mb-3">
              Verified Results From Founders and Operators
            </h2>
            <p className="text-[#616161] font-sans text-xs sm:text-sm max-w-lg mx-auto">
              How fast custom websites and Google search rankings translate into commercial growth for our clients.
            </p>
          </div>

          <TestimonialMarquee />
        </div>
      </section>

      {/* Direct, Quote-Ready FAQ Section with Schema */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white cv-auto" aria-labelledby="home-faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
              Clear Answers
            </span>
            <h2 id="home-faq-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
              Frequently Asked Questions About Our Custom Websites &amp; SEO
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="group rounded-[12px] border border-[#e5e7eb] bg-white transition-all">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-[12px]">
                  <h3 className="text-[#17171c] font-bold font-display text-sm sm:text-base tracking-tight pr-4">
                    {faq.q}
                  </h3>
                  <div className="size-7 rounded-full bg-[#eeece7] flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    <svg className="w-3.5 h-3.5 text-[#17171c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-[#616161] text-sm font-sans leading-relaxed border-t border-[#f0f0f0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-16 sm:py-24 px-5 sm:px-10 cv-auto" aria-labelledby="cta-heading">
        <div className="relative z-10 max-w-5xl mx-auto rounded-[22px] bg-[#003c33] text-white p-10 sm:p-16 text-center shadow-xl">
          <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block">
            Start Your Project
          </span>
          <h2 id="cta-heading" className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-white tracking-tight mb-8 leading-tight">
            Build a Fast, Bespoke Website <br /> <span className="text-[#ffad9b]">That Converts Visitors</span> <br /> Into Client Inquiries
          </h2>
          <p className="text-[#d9d9dd] text-base md:text-lg mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Schedule a free 20-minute strategy call. We will review your current website speed, analyze your Google search competitors, and outline a tailored roadmap to win more qualified client inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <ProposalDialog>
              <button 
                type="button"
                className="btn-white-pill text-sm px-9 py-3.5 cursor-pointer font-medium"
                aria-label="Book a 20-minute strategy call: Free consultation with Creative Realm"
              >
                Book a 20-Minute Strategy Call
              </button>
            </ProposalDialog>
            <ProposalDialog>
              <button 
                type="button"
                className="btn-secondary text-sm px-8 py-3.5 cursor-pointer font-medium border border-white/20 bg-transparent text-white hover:bg-white/10"
                aria-label="Request a Proposal: Start your project"
              >
                Request a Proposal
              </button>
            </ProposalDialog>
            <Link 
              href="/packages" 
              prefetch={false}
              className="text-white hover:text-[#edfce9] text-sm underline underline-offset-4 transition-colors font-medium ml-2"
              aria-label="Compare all packages and pricing"
            >
              Compare all packages &amp; pricing &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
