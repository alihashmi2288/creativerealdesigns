import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Palette, 
  Code2, 
  Search, 
  Smartphone, 
  Target, 
  Wrench, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { packagesData } from "@/lib/packages";
import ProposalDialog from "@/components/ProposalDialog";

export const metadata: Metadata = {
  title: "Custom Web Design & SEO Services",
  description: "Custom web design and Google SEO services built to win clients. Sub-second load times, higher Google rankings, and 100% code ownership with zero monthly fees.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Custom Web Design & SEO Services | Creative Realm Designs",
    description: "Custom web design and Google SEO services built to win clients. Sub-second load times, higher Google rankings, and 100% code ownership with zero monthly fees.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design & SEO Services | Creative Realm Designs",
    description: "Custom web design and Google SEO services built to win clients. Sub-second load times, higher Google rankings, and 100% code ownership with zero monthly fees.",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const services = [
  {
    id: "website-design",
    title: "Bespoke Interface Design",
    subtitle: "Custom Visual Identity & Brand Layouts",
    desc: "We design every screen from scratch around your sales goals, never from generic templates. High-contrast typography, clear visual hierarchy, and prominent call buttons build immediate credibility and guide visitors to request a consultation.",
    icon: Palette,
    deliverables: [
      "Custom visual design system tailored to your brand",
      "Interactive prototype for your feedback before code begins",
      "High-contrast typography engineered for effortless reading",
      "Tested layouts built for easy one-thumb mobile browsing"
    ]
  },
  {
    id: "web-development",
    title: "High-Speed Web Development",
    subtitle: "Clean Hand-Coded Architecture",
    desc: "We write clean, lightweight code that loads in under 800 milliseconds on mobile networks. No bloated WordPress plugins, no fragile visual builders, and zero monthly software fees. Your visitors get an instant browsing experience that keeps them from bouncing.",
    icon: Code2,
    deliverables: [
      "Guaranteed under 800ms load time on mobile and desktop",
      "Zero slow plugins, security vulnerabilities, or template bloat",
      "100% full legal ownership of your complete code repository",
      "Flawless rendering across Chrome, Safari, Firefox, and Edge"
    ]
  },
  {
    id: "seo-services",
    title: "Technical Google SEO",
    subtitle: "Search Engine Indexing & Rich Results",
    desc: "A beautiful website produces zero revenue if potential clients cannot find it on Google. We structure your code, metadata, and sitemaps so search engines index and rank your highest-margin services for buyers searching in your market.",
    icon: Search,
    deliverables: [
      "Structured Google search markup (Schema.org) for rich search results",
      "High-intent keyword mapping across all service headings",
      "Google Search Console setup and automatic XML sitemaps",
      "Verified all-green scores across Google Core Web Vitals"
    ]
  },
  {
    id: "mobile-optimization",
    title: "Mobile-First Experience",
    subtitle: "Built for Quick Smartphone Inquiries",
    desc: "Over 60% of prospective clients visit your business from a mobile phone. We design for quick thumb reach, instant cellular loading, and large tap targets so mobile visitors can call or submit an inquiry with zero frustration.",
    icon: Smartphone,
    deliverables: [
      "Sub-second loading speeds on 4G and 5G cellular connections",
      "Large tap targets placed within comfortable thumb reach",
      "Automatically optimized lightweight images and media",
      "Tested and verified across modern iPhone and Android screen sizes"
    ]
  },
  {
    id: "conversion-optimization",
    title: "Conversion Rate Optimization",
    subtitle: "Turning Visitors Into Paying Inquiries",
    desc: "Traffic without inquiries is a wasted investment. We arrange your pages to resolve buyer doubts, present transparent pricing signals, and make booking a consultation the easiest next step.",
    icon: Target,
    deliverables: [
      "Short, friction-free inquiry forms sent directly to your inbox",
      "Clear objection-handling blocks that answer buyer questions",
      "Accurate tracking for calls, clicks, and form submissions",
      "Layout structures tested to maximize booked client calls"
    ]
  },
  {
    id: "speed-maintenance",
    title: "Ongoing Care & Speed Maintenance",
    subtitle: "Continuous Performance & Security",
    desc: "Keep your website secure, fast, and up to date without adding to your weekly workload. We run weekly speed audits, apply software security updates, maintain offsite backups, and implement your content updates on demand.",
    icon: Wrench,
    deliverables: [
      "Weekly automated speed and performance monitoring",
      "Proactive software updates and security protection",
      "Automated weekly offsite backups for peace of mind",
      "Direct communication for fast text and image updates"
    ]
  }
];

export default function ServicesPage() {
  const serviceFaqs = [
    {
      q: "Why choose custom code over WordPress or Webflow templates?",
      a: "Custom code websites load in under 800 milliseconds because they render lightweight, clean pages without dozens of heavy plugins or bloated builder scripts. This delivers top Google Core Web Vitals scores, eliminates frequent plugin security vulnerabilities, and protects your business from recurring platform subscription fees and vendor lock-in."
    },
    {
      q: "What does Google SEO setup include in your services?",
      a: "Our Google SEO service includes structured rich snippet markup (Schema.org), semantic page heading architecture, automated XML sitemaps, and direct Google Search Console verification. We also tune Core Web Vitals performance so search engines recognize your site as fast, authoritative, and easy for prospective clients to browse."
    },
    {
      q: "Are there mandatory monthly hosting fees or platform taxes?",
      a: "No. You own 100% of your website code, design files, and digital assets. We deploy your site on high-performance global content networks that include generous free hosting tiers. You never pay proprietary builder subscription fees or hostage charges. Ongoing maintenance retainers are entirely optional."
    },
    {
      q: "How long does a complete website design and launch take?",
      a: "A standard custom website project takes 2 to 5 weeks from kickoff consultation to public launch. We work in structured stages: initial strategy in week one, custom design and interactive reviews in weeks two and three, and final code build, speed testing, and Google indexing in launch week."
    },
    {
      q: "Can our team update text and publish articles after launch?",
      a: "Yes. We can include an intuitive content publishing dashboard that lets your internal team publish blog articles, update team bios, and edit text in seconds. Your staff can manage day-to-day updates easily through a private interface without writing any code or risking broken layouts."
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Creative Realm Designs Core Services",
    "description": "Bespoke web design, high-speed engineering, and Google SEO services that generate qualified client inquiries.",
    "itemListElement": services.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "serviceType": service.subtitle,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Creative Realm Designs",
          "url": baseUrl
        },
        "areaServed": "Worldwide"
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([servicesSchema, faqSchema]) }}
      />

      <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-20 text-center">
            <div>
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Core Capabilities &amp; Business Deliverables
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight mb-6">
                Custom Web Design &amp; Google SEO Services Built to Convert
              </h1>
              <p className="text-[#616161] max-w-2xl mx-auto text-base sm:text-lg font-sans leading-relaxed">
                We combine custom visual design that wins client trust immediately, hand-coded speed that loads in under a second, and targeted Google search optimization that captures high-value client inquiries.
              </p>
            </div>
          </header>

          {/* 6 Capability Cards */}
          <section aria-labelledby="services-list-heading" className="mb-20 sm:mb-28">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Full Scope Breakdown
              </span>
              <h2 id="services-list-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Six Specialized Disciplines. Zero Agency Bloat.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  id={service.id}
                  className="p-8 sm:p-10 group relative flex flex-col justify-between rounded-[16px] bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all scroll-mt-28"
                >
                  <div>
                    <div className="size-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                      <service.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-[#17171c] tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#616161] text-sm leading-relaxed font-sans mb-6">
                      {service.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-[#e5e7eb] mb-8">
                      <div className="text-xs font-mono font-semibold text-[#616161] mb-2.5">Key Deliverables:</div>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                            <CheckCircle2 size={13} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <ProposalDialog defaultPackage={service.title}>
                    <button 
                      type="button"
                      aria-label={`Discuss your project: Inquire about ${service.title}`}
                      className="btn-pill-outline w-full justify-between min-h-[44px] py-2.5 px-5 text-xs font-medium cursor-pointer group"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </ProposalDialog>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table: Why Custom Web Engineering Outperforms WordPress & Webflow Templates */}
          <section className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-[22px] bg-[#fafaf9] border border-[#e5e7eb] cv-auto" aria-labelledby="comparison-table-heading">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Architectural Reality
              </span>
              <h2 id="comparison-table-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Why Custom Web Engineering Outperforms WordPress &amp; Webflow Templates
              </h2>
              <p className="text-[#616161] text-sm sm:text-base font-sans max-w-xl mx-auto mt-2">
                Compare clean custom code against template builders across the performance metrics that directly impact your bottom line.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[16px] border border-[#d9d9dd] bg-white">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#d9d9dd] bg-[#eeece7]">
                    <th scope="col" className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-[#17171c] w-2/5">
                      Metric &amp; Capability
                    </th>
                    <th scope="col" className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-[#616161] w-3/10">
                      WordPress / Webflow Templates
                    </th>
                    <th scope="col" className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-[#003c33] w-3/10 bg-[#edfce9]/60 font-bold">
                      Creative Realm (Custom Build)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb] text-xs sm:text-sm">
                  <tr>
                    <th scope="row" className="p-4 font-normal text-[#17171c]">Mobile Load Speed (4G)</th>
                    <td className="p-4 text-[#93939f]">3.0s to 5.5s (High visitor bounce rate)</td>
                    <td className="p-4 text-[#003c33] font-semibold bg-[#edfce9]/20">&lt; 800ms (Loads in under a second)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-normal text-[#17171c]">Plugin &amp; Script Bloat</th>
                    <td className="p-4 text-[#93939f]">20 to 35 third-party plugins that break</td>
                    <td className="p-4 text-[#003c33] font-semibold bg-[#edfce9]/20">Zero plugins. Clean hand-written code.</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-normal text-[#17171c]">Code Ownership &amp; IP Rights</th>
                    <td className="p-4 text-[#93939f]">Locked into proprietary hosting platforms</td>
                    <td className="p-4 text-[#003c33] font-semibold bg-[#edfce9]/20">100% full ownership of all code and design files</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-normal text-[#17171c]">Google Core Web Vitals</th>
                    <td className="p-4 text-[#93939f]">Fails Google speed benchmarks on mobile</td>
                    <td className="p-4 text-[#003c33] font-semibold bg-[#edfce9]/20">Verified 98+ PageSpeed, all green scores</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-normal text-[#17171c]">Monthly Platform Taxes</th>
                    <td className="p-4 text-[#93939f]">$50 to $250/mo mandatory subscription fees</td>
                    <td className="p-4 text-[#003c33] font-semibold bg-[#edfce9]/20">$0 mandatory monthly builder fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          {/* 4-Step Delivery Process */}
          <section className="mb-20 sm:mb-28 p-8 sm:p-14 rounded-[22px] bg-[#003c33] text-white cv-auto" aria-labelledby="process-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-2 block">
                  How We Deliver
                </span>
                <h2 id="process-heading" className="text-3xl sm:text-4xl font-normal font-display text-white tracking-tight mb-4">
                  Our Four-Step Delivery Process
                </h2>
                <p className="text-[#d9d9dd] mb-8 font-sans text-sm sm:text-base">
                  Clear milestones, direct communication, and firm delivery dates with zero confusing agency jargon.
                </p>
                
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Strategy & Scope", desc: "We review your commercial goals, target clients, and main competitors to establish your page structure, messaging, and tailored scope." },
                    { step: "02", title: "Custom Interface Design", desc: "We design your layouts from scratch. You review interactive prototypes, request adjustments, and approve every screen before any code is written." },
                    { step: "03", title: "Clean Code Build", desc: "We hand-code your website with clean architecture, engineered for sub-second load times and effortless smartphone navigation." },
                    { step: "04", title: "Launch & Google Indexing", desc: "We verify speed benchmarks, connect your custom domain, submit sitemaps to Google Search Console, and launch cleanly." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span className="font-mono text-xs font-bold size-8 rounded-full bg-[#004d42] text-[#edfce9] flex items-center justify-center shrink-0" aria-hidden="true">{item.step}</span>
                      <div>
                        <h3 className="text-white font-bold font-display text-sm mb-1">{item.title}</h3>
                        <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square bg-[#002b24] rounded-[16px] overflow-hidden border border-[#004d42]">
                <Image 
                  src="/projects/process.png" 
                  alt="Illustration of the collaborative four-step web design and development process from strategy to launch" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90" 
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Flexible Investment Packages */}
          <section className="mb-20 sm:mb-28 cv-auto" aria-labelledby="packages-heading">
            <div className="text-center mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Transparent Pricing • Flexible Scopes
              </span>
              <h2 id="packages-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Flexible Investment Packages
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Our packages provide general baseline pricing in US Dollars ($). Scope and pricing can be discussed and tailored to your exact needs, backed by under-second speeds and 100% intellectual property ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {packagesData.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-8 sm:p-10 relative flex flex-col justify-between rounded-[16px] transition-all ${
                    pkg.recommended 
                      ? "border-2 border-[#17171c] bg-[#eeece7]" 
                      : "border border-[#e5e7eb] bg-[#fafaf9] hover:border-[#d9d9dd]"
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#17171c] text-white text-xs uppercase font-mono font-medium tracking-wider mb-3">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold font-display text-[#17171c] mb-2 tracking-tight">{pkg.name}</h3>
                    <div className="text-3xl sm:text-4xl font-bold font-display text-[#17171c] mb-1 tracking-tight">{pkg.price}</div>
                    <div className="text-xs text-[#616161] font-mono mb-4">{pkg.period} • {pkg.turnaround}</div>
                    <p className="text-[#616161] text-xs sm:text-sm font-sans mb-8 leading-relaxed">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8 pt-4 border-t border-[#d9d9dd]">
                      {pkg.deliverables.slice(0, 6).map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#212121] font-sans">
                          <CheckCircle2 size={15} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/contact?package=${pkg.id}`} 
                    aria-label={`Choose ${pkg.name}: Request proposal`}
                    className={`w-full text-center py-3.5 px-6 rounded-full font-medium font-sans text-xs transition-all min-h-[44px] flex items-center justify-center cursor-pointer ${
                      pkg.recommended 
                        ? "btn-primary" 
                        : "btn-pill-outline"
                    }`}
                  >
                    Choose {pkg.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/packages"
                className="btn-secondary text-sm inline-flex items-center gap-2 font-medium"
              >
                <span>View Full Side-by-Side Comparison &amp; Add-Ons</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* Quote-Ready FAQs for AI Search Engines & Google AI Overviews */}
          <section className="max-w-4xl mx-auto cv-auto" aria-labelledby="faq-heading">
            <div className="text-center mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Clear Answers
              </span>
              <h2 id="faq-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Frequently Asked Questions About Our Services &amp; Process
              </h2>
            </div>

            <div className="space-y-4">
              {serviceFaqs.map((faq, i) => (
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
          </section>

          {/* High-Contrast Closing Call-To-Action Section */}
          <section className="mt-20 sm:mt-28 p-10 sm:p-16 rounded-[22px] bg-[#003c33] text-white text-center shadow-xl cv-auto" aria-labelledby="services-cta-heading">
            <div className="max-w-4xl mx-auto">
              <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Start Your Project
              </span>
              <h2 id="services-cta-heading" className="text-3xl sm:text-5xl md:text-6xl font-normal font-display text-white tracking-tight mb-6 leading-tight">
                Ready for a Website That <br className="hidden sm:inline" />
                <span className="text-[#ffad9b]">Generates Real Business?</span>
              </h2>
              <p className="text-[#d9d9dd] text-base sm:text-lg mb-8 max-w-2xl mx-auto font-sans leading-relaxed">
                Schedule a 20-minute strategy call. We will review your current website speed, analyze your Google search competitors, and outline a tailored roadmap to win more qualified inquiries.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ProposalDialog>
                  <button 
                    type="button"
                    className="btn-white-pill text-xs sm:text-sm px-8 py-3.5 cursor-pointer font-medium"
                    aria-label="Book a 20-minute strategy call: Free consultation with Creative Realm"
                  >
                    Book a 20-Minute Strategy Call
                  </button>
                </ProposalDialog>
                <ProposalDialog>
                  <button 
                    type="button"
                    className="btn-secondary text-xs sm:text-sm px-7 py-3.5 cursor-pointer font-medium border border-white/20 bg-transparent text-white hover:bg-white/10"
                    aria-label="Request a project proposal"
                  >
                    Request a Proposal
                  </button>
                </ProposalDialog>
                <Link 
                  href="/packages" 
                  className="text-white hover:text-[#edfce9] text-xs sm:text-sm underline underline-offset-4 transition-colors font-medium ml-2 inline-flex items-center gap-1"
                  aria-label="Compare all packages and pricing"
                >
                  <span>Compare packages &amp; pricing</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
