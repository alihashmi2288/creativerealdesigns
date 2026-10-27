import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Cpu, 
  AlertCircle,
  HelpCircle,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review our client service terms, milestone billing structures, warranty coverage, and 100% intellectual property & code ownership transfer policies.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Creative Realm Designs",
    description: "Review our client service terms, milestone billing structures, warranty coverage, and 100% intellectual property & code ownership transfer policies.",
    url: "/terms-and-conditions",
    siteName: "Creative Realm Designs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/clean-design.png",
        width: 1200,
        height: 630,
        alt: "Creative Realm Designs - Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Creative Realm Designs",
    description: "Review our client service terms, milestone billing structures, warranty coverage, and 100% intellectual property & code ownership transfer policies.",
    images: ["/clean-design.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/terms-and-conditions/#webpage`,
      "url": `${baseUrl}/terms-and-conditions`,
      "name": "Terms and Conditions | Creative Realm Designs",
      "description": "Studio engagement policies, code ownership rights, and commercial service terms.",
      "publisher": { "@id": `${baseUrl}/#agency` },
      "inLanguage": "en-US",
      "datePublished": "2026-10-27",
      "dateModified": "2026-10-27",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms and Conditions",
          "item": `${baseUrl}/terms-and-conditions`,
        },
      ],
    },
  ],
};

const tocSections = [
  { id: "introduction", num: "01", title: "Introduction & Scope" },
  { id: "studio-services", num: "02", title: "Studio Services" },
  { id: "proposals-pricing", num: "03", title: "Proposals & Pricing" },
  { id: "milestones-billing", num: "04", title: "Milestone Billing & Payment" },
  { id: "client-responsibilities", num: "05", title: "Client Responsibilities" },
  { id: "revisions-scope", num: "06", title: "Revisions & Change Orders" },
  { id: "ip-code-ownership", num: "07", title: "100% IP & Code Ownership" },
  { id: "confidentiality-nda", num: "08", title: "Confidentiality & NDA" },
  { id: "technical-warranty", num: "09", title: "Technical Warranty & Retainers" },
  { id: "third-party-disclaimer", num: "10", title: "Third-Party Infrastructure" },
  { id: "performance-seo", num: "11", title: "Speed & Google SEO Disclaimer" },
  { id: "ai-tooling", num: "12", title: "AI & Modern Tooling Disclosure" },
  { id: "limitation-liability", num: "13", title: "Limitation of Liability" },
  { id: "indemnification", num: "14", title: "Indemnification" },
  { id: "termination", num: "15", title: "Suspension & Termination" },
  { id: "disputes-governing-law", num: "16", title: "Governing Law & Disputes" },
  { id: "contact-notices", num: "17", title: "Legal Notices & Contact" },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <article className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-[#75758a]">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-[#17171c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#17171c] font-medium" aria-current="page">Terms and Conditions</li>
            </ol>
          </nav>

          {/* Document Header */}
          <header className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#17171c] text-white font-mono text-xs font-bold uppercase tracking-wider">
                Specification
              </span>
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                Document // CRD-TERMS-2026-V1
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight leading-tight mb-6">
              Terms &amp; Conditions &amp; <br />
              <span className="text-[#003c33]">Commercial Client Agreement</span>
            </h1>

            <p className="text-[#616161] text-base sm:text-lg font-sans leading-relaxed max-w-3xl mb-8">
              Commercial terms of service, intellectual property ownership transfer standards, milestone billing policies, and technical service parameters for Creative Realm Designs.
            </p>

            {/* Telemetry HUD Box */}
            <div className="p-5 sm:p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Effective Date</span>
                <time dateTime="2026-10-27" className="text-[#17171c] font-semibold">October 27, 2026</time>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Version</span>
                <span className="text-[#003c33] font-semibold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#003c33]" aria-hidden="true" />
                  Production · v1.0.0
                </span>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Engagement Type</span>
                <span className="text-[#17171c] font-semibold">Statement of Work (SOW)</span>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Legal Contact</span>
                <a 
                  href="mailto:creativerealmdesignstudio@gmail.com" 
                  className="text-[#003c33] hover:text-[#ff7759] font-semibold transition-colors truncate block"
                >
                  Direct Legal Desk ↗
                </a>
              </div>
            </div>
          </header>

          {/* Executive Summary / "Plain English" TL;DR Strip */}
          <div className="mb-14 p-6 sm:p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb]">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-2 rounded-full bg-[#003c33]" aria-hidden="true" />
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                Executive Summary • Plain English
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#17171c] tracking-tight mb-4">
              Core Commercial Commitments at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans text-[#212121]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>100% Code &amp; IP Ownership:</strong> You own all Figma UI systems, hand-written Next.js code, and bespoke assets the moment final milestone payment is complete.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Zero Platform Lock-In:</strong> No proprietary builder lock-ins, no monthly code licenses, and no hostage hosting markups. You are free to host anywhere.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Milestone-Based Billing:</strong> Standard 50% deposit before kickoff and 50% upon final staging approval. Enterprise projects billed in 40/30/30 phases.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Post-Launch Warranty:</strong> Every custom website includes a 30 to 90-day technical warranty ensuring responsive fidelity and Core Web Vitals speed.</p>
              </div>
            </div>
          </div>

          {/* Two-Column Command Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Sticky Command Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] space-y-6">
                <div className="border-b border-[#e5e7eb] pb-3">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
                    Index &amp; Navigation
                  </span>
                  <h3 className="text-base font-bold font-display text-[#17171c] tracking-tight">
                    Document Sections
                  </h3>
                </div>

                <nav aria-label="Table of Contents" className="space-y-1">
                  {tocSections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center justify-between px-3 py-2 rounded-[8px] text-xs font-sans text-[#616161] hover:text-[#17171c] hover:bg-[#eeece7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c]"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="font-mono text-[10px] text-[#75758a] group-hover:text-[#003c33]">
                          {sec.num}
                        </span>
                        <span className="font-medium truncate">{sec.title}</span>
                      </span>
                      <span className="text-[#93939f] group-hover:text-[#17171c] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                        →
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-[#e5e7eb] space-y-2.5">
                  <div className="p-3.5 rounded-[12px] bg-white border border-[#e5e7eb] text-xs text-[#616161]">
                    <span className="font-mono text-[10px] text-[#003c33] uppercase font-semibold block mb-1">Binding Agreement</span>
                    Statements of Work (SOWs) govern individual project milestones and deliverables.
                  </div>
                  <a
                    href="mailto:creativerealmdesignstudio@gmail.com?subject=Commercial%20Terms%20Inquiry"
                    className="btn-primary w-full text-xs py-2.5 justify-center"
                  >
                    <span>Contact Studio Lead</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Full Legal Terms Clauses */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16 text-[#212121] font-sans text-sm sm:text-base leading-relaxed">

              {/* Section 01 */}
              <section id="introduction" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 01
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  1. Introduction, Acceptance &amp; Governance Scope
                </h2>
                <p className="text-[#616161]">
                  These Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a binding agreement between <strong>Creative Realm Designs</strong> (&quot;the Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) and you (&quot;Client&quot;, &quot;User&quot;, &quot;you&quot;, or &quot;your&quot;). They govern your use of our website (<Link href="/" className="text-[#17171c] underline underline-offset-4 decoration-[#d9d9dd] hover:text-[#ff7759] hover:decoration-[#ff7759] transition-colors">creativerealmdesigns.com</Link>) and set forth the standard contractual framework under which we provide website design, web engineering, Core Web Vitals optimization, and Google SEO services.
                </p>
                <p className="text-[#616161]">
                  By browsing this website, requesting a project proposal, or executing a Statement of Work (SOW) with Creative Realm Designs, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you are entering into this Agreement on behalf of a corporation, partnership, or legal entity, you represent and warrant that you possess full legal authority to bind that entity.
                </p>
                <p className="text-[#616161]">
                  Where a separately executed Statement of Work, Master Services Agreement (MSA), or mutual Non-Disclosure Agreement (NDA) conflicts with these Terms, the specific terms of the separately executed document shall take precedence.
                </p>
              </section>

              {/* Section 02 */}
              <section id="studio-services" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 02
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  2. Studio Services &amp; Delivery Model
                </h2>
                <p className="text-[#616161]">
                  Creative Realm Designs operates as an independent digital consultancy. We do not sell generic website templates or mass-market hosting. We specialize in custom, production-grade solutions, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Bespoke Figma UI/UX Design Systems:</strong> Custom interface wireframes, component design tokens, interactive prototypes, and vector brand assets.</li>
                  <li><strong>High-Speed Next.js Web Engineering:</strong> Production frontend and full-stack development using modern Next.js App Router, React, TypeScript, and Tailwind CSS architectures engineered for sub-second mobile speeds.</li>
                  <li><strong>Core Web Vitals &amp; Speed Optimization:</strong> Comprehensive audits, asset budgeting, script tree-shaking, and performance refactoring targeting 98+ Google Lighthouse scores.</li>
                  <li><strong>Google SEO Architecture:</strong> Day-1 semantic HTML hierarchies, structured JSON-LD schemas (Schema.org), canonical route strategies, and technical indexing pipelines.</li>
                </ul>
                <p className="text-[#616161]">
                  Website descriptions, package overviews, and case study metrics published on our website are informational and illustrative; they do not constitute an automatic binding offer until incorporated into a formal, counter-signed Statement of Work.
                </p>
              </section>

              {/* Section 03 */}
              <section id="proposals-pricing" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 03
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  3. Project Proposals, Estimates &amp; Tiered Packages
                </h2>
                <p className="text-[#616161]">
                  Following an introductory strategy consultation, Creative Realm Designs issues a written proposal detailing the project scope, technical stack, deliverable timeline, and fixed investment amount. Our published package baselines reflect typical scope boundaries:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Starter Package</span>
                    <div className="text-lg font-bold font-display text-[#17171c] mb-1">$3,200</div>
                    <p className="text-xs text-[#616161]">Custom 5-page business site, sub-800ms speed, 30-day technical warranty.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#eeece7] border border-[#d9d9dd]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Growth Engine</span>
                    <div className="text-lg font-bold font-display text-[#17171c] mb-1">$5,800</div>
                    <p className="text-xs text-[#616161]">10-page flagship platform, regional SEO, micro-animations, 90-day warranty.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Custom / Store Build</span>
                    <div className="text-lg font-bold font-display text-[#17171c] mb-1">$11,500+</div>
                    <p className="text-xs text-[#616161]">Bespoke e-commerce/web app, third-party APIs, 6-month dedicated support.</p>
                  </div>
                </div>

                <p className="text-[#616161]">
                  Written proposals remain valid for thirty (30) calendar days from the date of issuance. If unaccepted within 30 days, Creative Realm Designs reserves the right to adjust pricing or schedule availability based on production calendar capacity.
                </p>
              </section>

              {/* Section 04 */}
              <section id="milestones-billing" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 04
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  4. Milestone Billing, Payment Schedules &amp; Invoicing
                </h2>
                <p className="text-[#616161]">
                  To align incentives and ensure transparent delivery, all client projects are executed against clear milestone payment schedules:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Standard Engagements (under $10,000):</strong> 50% upfront deposit invoiced upon contract execution to secure studio calendar reservation and initiate discovery/design sprints; 50% final balance invoiced upon client approval of the staging site prior to production domain DNS deployment.</li>
                  <li><strong>Enterprise Engagements ($10,000 and above):</strong> Billed across a 40/30/30 milestone structure: 40% kickoff deposit, 30% upon approval of the interactive Figma prototype and core engineering architecture, and 30% upon final pre-launch staging verification.</li>
                  <li><strong>Accepted Currencies &amp; Methods:</strong> Invoices are denominated in US Dollars (USD) or British Pounds (GBP). Payments are accepted via direct wire transfer (ACH / BACS / SWIFT) or verified corporate credit card processing.</li>
                  <li><strong>Payment Due Dates &amp; Suspension:</strong> Invoices are payable within seven (7) calendar days of receipt. In the event of an overdue balance exceeding 14 calendar days, Creative Realm Designs reserves the right to pause ongoing development and withhold production deployment until the outstanding balance is reconciled.</li>
                </ul>
              </section>

              {/* Section 05 */}
              <section id="client-responsibilities" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 05
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  5. Client Responsibilities &amp; Feedback Schedules
                </h2>
                <p className="text-[#616161]">
                  High-velocity custom engineering requires structured collaboration. The Client agrees to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Provide Necessary Materials:</strong> Supply high-resolution brand assets, vector logos, authorized copy, and required media in a timely manner.</li>
                  <li><strong>Designate a Decision Maker:</strong> Provide a single primary point of contact authorized to approve milestone deliverables, design iterations, and scope change requests.</li>
                  <li><strong>Timely Feedback Window:</strong> Review submitted milestone deliverables and provide consolidated written feedback within five (5) business days.</li>
                  <li><strong>Project Pausing Policy:</strong> If a client becomes unresponsive or fails to provide required content or feedback for thirty (30) consecutive calendar days, the project may be formally paused. Resumption may require re-scheduling based on studio availability and an administrative re-onboarding fee.</li>
                </ul>
              </section>

              {/* Section 06 */}
              <section id="revisions-scope" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 06
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  6. Design Revisions &amp; Scope Change Orders
                </h2>
                <p className="text-[#616161]">
                  Every SOW includes defined iterative review cycles (typically up to two rounds of structural feedback during the Figma prototyping stage). Revisions must align with the originally agreed project brief.
                </p>
                <p className="text-[#616161]">
                  Requests for new functionality, additional page templates, structural redesigns following code implementation, or third-party API integrations not specified in the original SOW fall outside scope. Such additions will be formally documented in a written Change Order specifying any additional investment and timeline adjustments before work proceeds.
                </p>
              </section>

              {/* Section 07 */}
              <section id="ip-code-ownership" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 07
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  7. 100% Intellectual Property &amp; Code Ownership Assignment
                </h2>

                {/* Sovereign Guarantee Callout */}
                <div className="p-6 rounded-[16px] bg-[#003c33] text-white space-y-3">
                  <div className="flex items-center gap-2 text-[#edfce9] font-mono text-xs uppercase tracking-wider font-semibold">
                    <Code2 className="w-4 h-4 text-[#edfce9]" aria-hidden="true" />
                    <span>Irrevocable Legal Standard</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white tracking-tight">
                    Full Code &amp; Asset Ownership Transfer
                  </h3>
                  <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans leading-relaxed">
                    Creative Realm Designs transfers 100% full, unencumbered legal ownership of all custom Figma design systems, React/Next.js source code repositories, and brand vector assets immediately upon receipt of final milestone payment. We never assess monthly licensing charges or enforce proprietary builder lock-in.
                  </p>
                </div>

                <div className="space-y-4 mt-4">
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      7.1 Timing of Transfer (The Paid-in-Full Rule)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      All intellectual property rights in custom deliverables remain the property of Creative Realm Designs until full and cleared payment of all milestone invoices has been received. Upon payment completion, all custom code, component architectures, and Figma files vest fully and exclusively in the Client.
                    </p>
                  </div>

                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      7.2 Agency Background IP &amp; Scaffolding
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      Creative Realm Designs retains ownership of its proprietary pre-existing developer tooling, boilerplates, internal component scaffolding, and development workflows (&quot;Background IP&quot;). The Client is granted an irrevocable, perpetual, worldwide, non-exclusive, royalty-free license to use, modify, and host such Background IP solely as integrated into the delivered website.
                    </p>
                  </div>

                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      7.3 Open-Source Software Components
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      Projects incorporate battle-tested, permissive open-source libraries (e.g. Next.js, React, Tailwind CSS, Lucide, Radix UI under MIT or Apache 2.0 licenses). Ownership of such open-source dependencies remains governed by their respective open-source licenses.
                    </p>
                  </div>

                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      7.4 Client Asset Warranties &amp; Portfolio Rights
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      The Client warrants that all text, logos, trademarks, and photography provided to the Studio are owned by the Client or licensed with full rights for publication. Creative Realm Designs reserves the right to showcase non-confidential screenshots, design case studies, and performance benchmarks on our public website and agency channels (LinkedIn, X, Instagram, Facebook) unless a signed mutual NDA specifies otherwise.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 08 */}
              <section id="confidentiality-nda" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 08
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  8. Confidentiality &amp; Mutual Non-Disclosure
                </h2>
                <p className="text-[#616161]">
                  Both parties agree to treat all non-public commercial, technical, and strategic information disclosed during the engagement as strictly confidential (&quot;Confidential Information&quot;). Neither party shall disclose Confidential Information to any third party without prior written consent, except to professional advisors bound by confidentiality or as required by law.
                </p>
                <p className="text-[#616161]">
                  For enterprise clients, pre-launch startups, and proprietary platforms, Creative Realm Designs readily executes a standalone mutual Non-Disclosure Agreement (NDA) prior to reviewing confidential specifications. Confidentiality obligations survive termination of the engagement for three (3) years.
                </p>
              </section>

              {/* Section 09 */}
              <section id="technical-warranty" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 09
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  9. Technical Warranty &amp; Ongoing Care Retainers
                </h2>
                <p className="text-[#616161]">
                  We stand firmly behind our code craft. Every bespoke build deployed by Creative Realm Designs includes a structured technical warranty period:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Warranty Durations:</strong> Starter Package (30 calendar days); Growth Engine (90 calendar days); Custom / Store Build (6 months).</li>
                  <li><strong>Warranty Scope:</strong> Remediation of reproducible bugs, script errors, broken links, or responsive layout misalignments in the code as originally delivered, across modern evergreen desktop and mobile browsers (Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox).</li>
                  <li><strong>Warranty Exclusions:</strong> This warranty does not cover defects resulting from post-launch code modifications by the client or third parties, browser updates deprecating obsolete standards, third-party hosting outages, or changes to external APIs.</li>
                  <li><strong>Optional Ongoing Care Retainer:</strong> Following warranty expiration, clients may engage our Growth &amp; Care Retainer ($450/month) for continuous dependency patching, monthly Core Web Vitals audits, and reserved engineering hours. Retainers operate month-to-month and are cancellable upon thirty (30) days written notice.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section id="third-party-disclaimer" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 10
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  10. Third-Party Infrastructure, Hosting &amp; API Disclaimers
                </h2>
                <p className="text-[#616161]">
                  While we architect solutions for enterprise reliability, websites interact with third-party infrastructure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Cloud Hosts &amp; DNS:</strong> Hosting platforms (e.g. Vercel, AWS, Cloudflare) and domain registrars are third-party services. Creative Realm Designs is not liable for upstream cloud server outages, global DNS propagation delays, or hosting infrastructure downtime.</li>
                  <li><strong>Third-Party APIs:</strong> Third-party integrations (e.g. Stripe checkout, CRM systems, transactional email gateways) are subject to external platform availability and terms. We are not responsible for API rate-limiting, pricing changes, or deprecation by third-party providers.</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section id="performance-seo" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 11
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  11. Speed Benchmarks &amp; Google SEO Ranking Disclaimers
                </h2>
                <p className="text-[#616161]">
                  Creative Realm Designs rigorously optimizes code to achieve sub-800ms load speeds and 98+ Google Lighthouse benchmarks upon initial deployment. However, the Client acknowledges that subsequent content additions (e.g. uncompressed images, unvetted marketing tags, bloated third-party embeds) may adversely affect speed scores.
                </p>
                <p className="text-[#616161]">
                  While we implement best-in-class Google SEO architecture (semantic schema, clean URLs, Core Web Vitals optimization, and keyword targeting), organic search rankings are governed by proprietary and constantly shifting algorithms operated by Google and other search engines. Consequently, <strong>Creative Realm Designs cannot and does not guarantee specific #1 organic rankings, guaranteed search traffic volumes, or specific revenue outcomes.</strong>
                </p>
              </section>

              {/* Section 12 */}
              <section id="ai-tooling" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 12
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  12. Generative AI &amp; Modern Engineering Tooling Disclosure
                </h2>
                <p className="text-[#616161]">
                  We utilize modern software development and design tools (including syntax checkers, automated accessibility linters, and engineering assistants) to accelerate delivery and maintain clean code standards.
                </p>
                <p className="text-[#616161]">
                  <strong>Human-in-the-Loop Guarantee:</strong> Every user interface, component hierarchy, database model, and custom algorithm shipped by Creative Realm Designs is directly designed, reviewed, refactored, and verified by senior human specialists. We strictly safeguard client confidential information: no client trade secrets, proprietary algorithms, or personal data are submitted to public, unvetted AI model training corpora.
                </p>
              </section>

              {/* Section 13 */}
              <section id="limitation-liability" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 13
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  13. Limitation of Liability
                </h2>
                <p className="text-[#616161]">
                  To the maximum extent permitted by applicable law in the governing jurisdiction:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Liability Cap:</strong> In no event shall the total aggregate liability of Creative Realm Designs, its founders, or contractors arising out of or related to this Agreement or the services exceed the total fees actually paid by the Client to the Studio under the specific Statement of Work giving rise to the claim.</li>
                  <li><strong>Exclusion of Consequential Damages:</strong> In no event shall Creative Realm Designs be liable for any indirect, special, incidental, punitive, or consequential damages, including loss of profits, loss of revenue, loss of business data, or business interruption, regardless of whether the Studio was advised of the possibility of such damages.</li>
                </ul>
              </section>

              {/* Section 14 */}
              <section id="indemnification" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 14
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  14. Client Indemnification
                </h2>
                <p className="text-[#616161]">
                  The Client agrees to defend, indemnify, and hold harmless Creative Realm Designs against any claims, damages, liabilities, costs, and legal fees arising out of: (a) any materials, text, logos, or media provided by the Client that infringe third-party intellectual property, privacy, or trademark rights; or (b) the commercial operation of the Client&apos;s live website, product offerings, or regulatory compliance failures in the Client&apos;s industry.
                </p>
              </section>

              {/* Section 15 */}
              <section id="termination" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 15
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  15. Project Suspension, Termination &amp; Cancellation
                </h2>
                <p className="text-[#616161]">
                  Either party may terminate an active project upon written notice if the other party materially breaches this Agreement and fails to remedy the breach within fourteen (14) calendar days of receiving written notice.
                </p>
                <p className="text-[#616161]">
                  If the Client elects to terminate a project for convenience prior to completion, the initial kickoff deposit is non-refundable (as it covers production scheduling and initial discovery sprints), and the Client shall be invoiced for all work completed up to the date of termination at our standard hourly rates. Upon payment of all accrued amounts, the Client will receive all completed design files and code produced to date.
                </p>
              </section>

              {/* Section 16 */}
              <section id="disputes-governing-law" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 16
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  16. Dispute Resolution, Governing Law &amp; Severability
                </h2>
                <p className="text-[#616161]">
                  In the event of any controversy or dispute arising out of this Agreement, the parties agree to first engage in good-faith executive negotiations for a minimum of thirty (30) calendar days prior to initiating formal legal proceedings.
                </p>
                <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb] text-xs font-mono text-[#616161] space-y-1 my-3">
                  <div><strong>Operating Agency:</strong> Creative Realm Designs [Company Registration Number: Provided upon formal client engagement]</div>
                  <div><strong>Governing Jurisdiction:</strong> [Governing Law: Courts of England and Wales / State of Delaware — to be finalized by Business Owner]</div>
                  <div><strong>Primary Language:</strong> English</div>
                </div>
                <p className="text-[#616161]">
                  If any provision of this Agreement is held invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              {/* Section 17 */}
              <section id="contact-notices" className="scroll-mt-32 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 17
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  17. Legal Notices &amp; Commercial Inquiries
                </h2>
                <p className="text-[#616161]">
                  All formal legal notices, contract inquiries, and proposed SOW agreements must be transmitted in writing to our official legal desk:
                </p>

                {/* Direct Contact Panel */}
                <div className="p-8 sm:p-10 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb] mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                      Legal Desk
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17171c] tracking-tight mb-3">
                    Contract Inquiries &amp; SOW Execution
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mb-6">
                    To request a bespoke Statement of Work, execute a mutual NDA, or submit formal legal notices regarding our terms:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <address className="not-italic p-4 rounded-[12px] bg-white border border-[#e5e7eb]">
                      <span className="text-[#75758a] font-mono uppercase block mb-1">Direct Commercial Desk</span>
                      <a 
                        href="mailto:creativerealmdesignstudio@gmail.com" 
                        className="text-[#17171c] hover:text-[#ff7759] font-medium text-sm transition-colors block"
                      >
                        creativerealmdesignstudio@gmail.com
                      </a>
                      <p className="text-[#616161] mt-1 text-[11px]">Guaranteed response within 24 hours Mon–Fri.</p>
                    </address>

                    <div className="p-4 rounded-[12px] bg-white border border-[#e5e7eb]">
                      <span className="text-[#75758a] font-mono uppercase block mb-1">Operating Agency</span>
                      <span className="text-[#17171c] font-medium text-sm block">Creative Realm Designs Studio</span>
                      <p className="text-[#616161] mt-1 text-[11px]">Serving United Kingdom · United States · Canada · Australia</p>
                    </div>
                  </div>
                </div>

                {/* Back to Home Link */}
                <div className="pt-8 flex items-center justify-between">
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#003c33] font-semibold hover:text-[#ff7759] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-sm"
                  >
                    <ArrowLeft size={14} aria-hidden="true" />
                    <span>Return to Studio Home</span>
                  </Link>

                  <Link 
                    href="/privacy-policy" 
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17171c] font-semibold hover:text-[#ff7759] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-sm"
                  >
                    <span>Read Privacy Policy</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
