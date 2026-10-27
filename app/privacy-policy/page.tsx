import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  Globe2, 
  FileCheck2, 
  Clock, 
  ExternalLink,
  Printer
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Creative Realm Designs collects, processes, and protects your business and personal data under UK GDPR, EU GDPR, CCPA, and international standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Creative Realm Designs",
    description: "Learn how Creative Realm Designs collects, processes, and protects your business and personal data under UK GDPR, EU GDPR, CCPA, and international standards.",
    url: "/privacy-policy",
    siteName: "Creative Realm Designs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/clean-design.png",
        width: 1200,
        height: 630,
        alt: "Creative Realm Designs - Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Creative Realm Designs",
    description: "Learn how Creative Realm Designs collects, processes, and protects your business and personal data under UK GDPR, EU GDPR, CCPA, and international standards.",
    images: ["/clean-design.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/privacy-policy/#webpage`,
      "url": `${baseUrl}/privacy-policy`,
      "name": "Privacy Policy | Creative Realm Designs",
      "description": "Creative Realm Designs data privacy, collection, and compliance governance specification.",
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
          "name": "Privacy Policy",
          "item": `${baseUrl}/privacy-policy`,
        },
      ],
    },
  ],
};

const tocSections = [
  { id: "business-identity", num: "01", title: "Business Identity & Scope" },
  { id: "regulatory-frameworks", num: "02", title: "Regulatory Governance" },
  { id: "information-collected", num: "03", title: "Information We Collect" },
  { id: "lawful-bases", num: "04", title: "Lawful Bases & Processing Matrix" },
  { id: "cookie-policy", num: "05", title: "Zero Non-Essential Cookies" },
  { id: "anti-spam", num: "06", title: "Anti-Spam & Communications" },
  { id: "data-retention", num: "07", title: "Data Retention & Purging" },
  { id: "data-security", num: "08", title: "Data Security Standards" },
  { id: "sub-processors", num: "09", title: "Sub-Processors & Infrastructure" },
  { id: "international-transfers", num: "10", title: "International Data Transfers" },
  { id: "privacy-rights", num: "11", title: "Your Global Privacy Rights" },
  { id: "children-privacy", num: "12", title: "Children's Privacy" },
  { id: "policy-updates", num: "13", title: "Updates & Governance Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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
              <li className="text-[#17171c] font-medium" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          {/* Document Header */}
          <header className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-[#17171c] text-white font-mono text-xs font-bold uppercase tracking-wider">
                Specification
              </span>
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                Document // CRD-PRIV-2026-V1
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight leading-tight mb-6">
              Privacy Policy &amp; <br />
              <span className="text-[#003c33]">Data Governance Standard</span>
            </h1>

            <p className="text-[#616161] text-base sm:text-lg font-sans leading-relaxed max-w-3xl mb-8">
              How Creative Realm Designs collects, processes, and protects your commercial intelligence, personal data, and proprietary project assets under UK GDPR, EU GDPR, California CCPA/CPRA, and international privacy regulations.
            </p>

            {/* Telemetry HUD Box */}
            <div className="p-5 sm:p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Effective Date</span>
                <time dateTime="2026-10-27" className="text-[#17171c] font-semibold">October 27, 2026</time>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Governance Status</span>
                <span className="text-[#003c33] font-semibold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#003c33]" aria-hidden="true" />
                  Active · v1.0.0
                </span>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Primary Geos</span>
                <span className="text-[#17171c] font-semibold">UK · US · CA · AU</span>
              </div>
              <div>
                <span className="text-[#75758a] block uppercase mb-1">Data Controller</span>
                <a 
                  href="mailto:creativerealmdesignstudio@gmail.com" 
                  className="text-[#003c33] hover:text-[#ff7759] font-semibold transition-colors truncate block"
                >
                  Direct Email Desk ↗
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
              Core Data Commitments at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans text-[#212121]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Zero Data Resale:</strong> We never sell, lease, monetize, or broker client or inquiry data to data brokers or advertising exchanges.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Zero Non-Essential Cookies:</strong> Our website runs with zero marketing trackers, zero third-party advertising pixels, and zero invasive cookies.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Strict Project Confidentiality:</strong> All technical architectures, Figma UI files, and project specifications are protected by mutual confidentiality and NDA availability.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#003c33] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p><strong>Right to Total Erasure:</strong> You retain the unrestricted right to access, rectify, port, or permanently delete your contact records upon request within 24–48 hours.</p>
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
                    <span className="font-mono text-[10px] text-[#003c33] uppercase font-semibold block mb-1">Guaranteed SLA</span>
                    24-hour response window on business days (Mon–Fri 09:00–18:00).
                  </div>
                  <a
                    href="mailto:creativerealmdesignstudio@gmail.com?subject=Privacy%20Inquiry%20Policy"
                    className="btn-primary w-full text-xs py-2.5 justify-center"
                  >
                    <span>Contact Privacy Desk</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Full Legal Policy Clauses */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16 text-[#212121] font-sans text-sm sm:text-base leading-relaxed">
              
              {/* Section 01 */}
              <section id="business-identity" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 01
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  1. Business Identity, Scope &amp; Applicability
                </h2>
                <p className="text-[#616161]">
                  This Privacy Policy governs the processing of personal data by <strong>Creative Realm Designs</strong> (&quot;Creative Realm&quot;, &quot;the Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an independent bespoke digital design, Next.js web engineering, and Google SEO consultancy operating the public website at{" "}
                  <Link href="/" className="text-[#17171c] underline underline-offset-4 decoration-[#d9d9dd] hover:text-[#ff7759] hover:decoration-[#ff7759] transition-colors">
                    creativerealmdesigns.com
                  </Link>.
                </p>
                <p className="text-[#616161]">
                  This policy applies to all prospective and existing clients, website visitors, newsletter subscribers, and business partners communicating with us via our contact interfaces, direct emails, and project scoping tools. For individual bespoke client engagements, project-specific data requirements are governed by a signed Statement of Work (SOW) or Mutual Non-Disclosure Agreement (NDA).
                </p>
                <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb] text-xs font-mono text-[#616161] space-y-1">
                  <div><strong>Operating Entity:</strong> Creative Realm Designs [Company Registration Number: Provided upon formal client engagement]</div>
                  <div><strong>Physical Notice Address:</strong> [Registered Studio Address: To be inserted by Business Owner / Provided upon formal contract execution]</div>
                  <div><strong>Official Communication Desk:</strong> creativerealmdesignstudio@gmail.com</div>
                </div>
              </section>

              {/* Section 02 */}
              <section id="regulatory-frameworks" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 02
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  2. Cross-Border Regulatory Governance
                </h2>
                <p className="text-[#616161]">
                  Creative Realm Designs works with clients and businesses across four core international jurisdictions: the <strong>United Kingdom</strong>, the <strong>United States</strong>, <strong>Canada</strong>, and <strong>Australia</strong>. Consequently, our data protection infrastructure is designed to fulfill the highest common denominator among international privacy standards, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>United Kingdom:</strong> UK General Data Protection Regulation (UK GDPR), Data Protection Act 2018, and Privacy and Electronic Communications Regulations 2003 (PECR).</li>
                  <li><strong>European Union:</strong> Regulation (EU) 2016/679 (EU GDPR) for European residents engaging our digital consultancy.</li>
                  <li><strong>United States:</strong> California Consumer Privacy Act of 2018 (CCPA) as amended by the California Privacy Rights Act (CPRA), and the CAN-SPAM Act (15 U.S.C. § 7701).</li>
                  <li><strong>Canada:</strong> Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada&apos;s Anti-Spam Legislation (CASL, SC 2010, c. 23).</li>
                  <li><strong>Australia:</strong> Privacy Act 1988 (Cth) incorporating the Australian Privacy Principles (APPs), and the Spam Act 2003 (Cth).</li>
                </ul>
              </section>

              {/* Section 03 */}
              <section id="information-collected" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 03
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  3. Categories of Information We Collect
                </h2>
                <p className="text-[#616161]">
                  In accordance with the principle of data minimization (Article 5(1)(c) GDPR), we collect only the minimum personal information necessary to deliver bespoke website design proposals, execute engineering contracts, and send our monthly digital strategy briefings.
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="p-5 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-base text-[#17171c] mb-1.5">
                      A. Strategy Call &amp; Project Inquiry Submissions
                    </h3>
                    <p className="text-[#616161] text-xs sm:text-sm mb-2">
                      When you submit an inquiry through our Contact Form or Proposal Dialog, we collect:
                    </p>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-[#616161] space-y-1">
                      <li>Full Name (minimum 2 characters for identification)</li>
                      <li>Work Email Address (for commercial correspondence and proposal delivery)</li>
                      <li>Website / Company Domain URL (optional, to conduct site speed and search competitor audits)</li>
                      <li>Primary Service Selection (e.g. Bespoke Website Design, Next.js Web Development, Google SEO Growth)</li>
                      <li>Anticipated Investment Budget Range (to recommend a commercially appropriate roadmap)</li>
                      <li>Target Launch Timeline Window</li>
                      <li>Project Overview and Requirements Narrative</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-base text-[#17171c] mb-1.5">
                      B. Strategy Briefing Newsletter Subscription
                    </h3>
                    <p className="text-[#616161] text-xs sm:text-sm">
                      When you subscribe to &quot;Stay Ahead in Digital&quot; via our footer form, we collect exclusively your email address. We do not require names, job titles, or demographic surveys for newsletter distribution.
                    </p>
                  </div>

                  <div className="p-5 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-base text-[#17171c] mb-1.5">
                      C. Edge Infrastructure &amp; Technical Server Logs
                    </h3>
                    <p className="text-[#616161] text-xs sm:text-sm">
                      When you navigate the website, standard edge infrastructure logs are recorded automatically by our cloud hosting network. These logs contain anonymized IP addresses, browser user agent strings, referring URLs, and request timestamps. They are collected strictly for DDoS mitigation, routing diagnostics, and security auditing, and are never correlated with your personal contact inquiries.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 04 */}
              <section id="lawful-bases" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 04
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  4. Lawful Bases for Processing &amp; Purpose Matrix
                </h2>
                <p className="text-[#616161]">
                  Under UK GDPR and EU GDPR (Article 6), every processing activity must have an established lawful basis. We map our specific operations below:
                </p>

                <div className="overflow-x-auto rounded-[12px] border border-[#d9d9dd] bg-white my-4">
                  <table className="w-full text-left border-collapse text-xs font-sans">
                    <thead>
                      <tr className="bg-[#eeece7] border-b border-[#d9d9dd] font-mono uppercase text-[#17171c]">
                        <th className="p-3 font-semibold">Processing Purpose</th>
                        <th className="p-3 font-semibold">Data Categories</th>
                        <th className="p-3 font-semibold">Lawful Basis (GDPR Art. 6)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb]">
                      <tr className="hover:bg-[#fafaf9]">
                        <td className="p-3 font-medium text-[#17171c]">Evaluating inquiries &amp; delivering tailored proposals</td>
                        <td className="p-3 text-[#616161]">Name, email, company URL, budget, project brief</td>
                        <td className="p-3 text-[#003c33] font-mono">Contractual Necessity (Art. 6(1)(b)) &amp; Legitimate Interests</td>
                      </tr>
                      <tr className="hover:bg-[#fafaf9]">
                        <td className="p-3 font-medium text-[#17171c]">Executing client contracts &amp; code deliverables</td>
                        <td className="p-3 text-[#616161]">Billing address, invoice metadata, project specifications</td>
                        <td className="p-3 text-[#003c33] font-mono">Performance of Contract (Art. 6(1)(b))</td>
                      </tr>
                      <tr className="hover:bg-[#fafaf9]">
                        <td className="p-3 font-medium text-[#17171c]">Monthly &quot;Stay Ahead in Digital&quot; strategy briefing</td>
                        <td className="p-3 text-[#616161]">Email address</td>
                        <td className="p-3 text-[#003c33] font-mono">Consent (Art. 6(1)(a))</td>
                      </tr>
                      <tr className="hover:bg-[#fafaf9]">
                        <td className="p-3 font-medium text-[#17171c]">Accounting, statutory audits &amp; tax compliance</td>
                        <td className="p-3 text-[#616161]">Invoices, payment records, contract receipts</td>
                        <td className="p-3 text-[#003c33] font-mono">Legal Obligation (Art. 6(1)(c))</td>
                      </tr>
                      <tr className="hover:bg-[#fafaf9]">
                        <td className="p-3 font-medium text-[#17171c]">Edge network security &amp; DDoS prevention</td>
                        <td className="p-3 text-[#616161]">Server request logs, anonymized IP</td>
                        <td className="p-3 text-[#003c33] font-mono">Legitimate Interests (Art. 6(1)(f))</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 05 */}
              <section id="cookie-policy" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 05
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  5. Zero Non-Essential Cookies &amp; Tracking Technology Policy
                </h2>
                
                {/* Binding Standard Highlight */}
                <div className="p-6 rounded-[16px] bg-[#003c33] text-white space-y-3">
                  <div className="flex items-center gap-2 text-[#edfce9] font-mono text-xs uppercase tracking-wider font-semibold">
                    <Lock className="w-4 h-4 text-[#edfce9]" aria-hidden="true" />
                    <span>Architectural Guarantee</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                    Privacy-First, Zero-Bloat Engineering
                  </h3>
                  <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans leading-relaxed">
                    Creative Realm Designs operates with zero non-essential cookies. We do not deploy Google Tag Manager, Meta (Facebook) tracking pixels, LinkedIn Insight tags, TikTok trackers, or cross-site behavioral advertising identifiers.
                  </p>
                </div>

                <p className="text-[#616161]">
                  Under Regulation 6 of the UK Privacy and Electronic Communications Regulations (PECR) and Article 5(3) of the EU ePrivacy Directive (Directive 2002/58/EC), consent banners are required exclusively for non-essential cookies and marketing trackers. Because Creative Realm Designs employs only strictly necessary, ephemeral session tokens and zero third-party advertising cookies, our website does not require or display a disruptive cookie consent popup.
                </p>
                <p className="text-[#616161]">
                  When we build client websites, we configure privacy-first visitor analytics (such as cookieless search console telemetry and privacy-preserving metrics) that pass Google Core Web Vitals automatically without compromising visitor privacy.
                </p>
              </section>

              {/* Section 06 */}
              <section id="anti-spam" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 06
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  6. Commercial Communications &amp; Anti-Spam Compliance
                </h2>
                <p className="text-[#616161]">
                  We maintain zero tolerance for unsolicited marketing (spam). All commercial electronic messages transmitted by Creative Realm Designs strictly comply with the US CAN-SPAM Act, Canada&apos;s Anti-Spam Legislation (CASL), the UK PECR Regulation 22, and the Australian Spam Act 2003:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Clear Sender Identification:</strong> All strategy emails explicitly identify Creative Realm Designs and originate from verified studio domain headers.</li>
                  <li><strong>Accurate Subject Lines:</strong> Email subject lines reflect the genuine commercial or technical nature of the communication.</li>
                  <li><strong>One-Click Opt-Out:</strong> Every newsletter and promotional briefing includes an automated, functioning unsubscribe link.</li>
                  <li><strong>5-Day Global Fulfillment SLA:</strong> While the US CAN-SPAM Act permits up to 10 business days, Creative Realm Designs enforces a global policy honoring all unsubscribe requests within <strong>5 business days</strong> (conforming to the strict benchmark under the Australian Spam Act 2003).</li>
                </ul>
              </section>

              {/* Section 07 */}
              <section id="data-retention" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 07
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  7. Data Retention &amp; Permanent Purging Schedules
                </h2>
                <p className="text-[#616161]">
                  We retain personal data only for as long as necessary to fulfill the commercial purposes for which it was gathered, or to comply with statutory accounting and tax reporting obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Inquiry Records (Non-Converting):</strong> Project inquiries that do not progress to an active contract are archived and permanently purged after 12 months, unless earlier deletion is requested by the submitter.</li>
                  <li><strong>Active Client Records:</strong> Client contact information, architectural specifications, and communication history are retained throughout the active client relationship and for the duration of the post-launch warranty period.</li>
                  <li><strong>Statutory Accounting &amp; Invoices:</strong> In accordance with corporate statutory obligations (e.g. UK HMRC and IRS compliance), financial transaction records and invoices are maintained for 7 years following contract completion.</li>
                  <li><strong>Newsletter Subscriptions:</strong> Maintained until the subscriber unsubscribes or requests removal, upon which the email address is immediately removed from the active dispatch register.</li>
                </ul>
              </section>

              {/* Section 08 */}
              <section id="data-security" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 08
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  8. Technical Data Security &amp; Trade Secret Safeguards
                </h2>
                <p className="text-[#616161]">
                  We implement robust technical and organizational security measures (Article 32 GDPR) engineered to protect personal data and client trade secrets from unauthorized access, alteration, disclosure, or destruction:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Transit Security</span>
                    <p className="text-xs text-[#616161]">All web traffic and API endpoints are encrypted in transit using Transport Layer Security (TLS 1.3 / HTTPS) with HSTS headers.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Access Control</span>
                    <p className="text-xs text-[#616161]">Strict role-based least-privilege access controls with mandatory multi-factor authentication (MFA) across all studio development environments.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">AI Tooling Confidentiality</span>
                    <p className="text-xs text-[#616161]">Client proprietary logic, code repositories, and personal data are strictly isolated and never fed into unvetted public generative AI training sets.</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <span className="font-mono text-xs text-[#003c33] font-semibold uppercase block mb-1">Mutual NDA Protection</span>
                    <p className="text-xs text-[#616161]">We sign mutual non-disclosure agreements prior to reviewing unreleased platforms, pre-launch codebases, or proprietary trade secrets.</p>
                  </div>
                </div>
              </section>

              {/* Section 09 */}
              <section id="sub-processors" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 09
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  9. Third-Party Sub-Processors &amp; Service Providers
                </h2>
                <p className="text-[#616161]">
                  We partner with selected third-party service providers to deliver hosting infrastructure, transactional email dispatch, and business communication. Each provider is vetted for compliance with GDPR, SOC 2, and international security standards:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li><strong>Vercel, Inc. (United States):</strong> Edge computing network, DNS management, and serverless hosting infrastructure.</li>
                  <li><strong>Google Workspace (Google LLC):</strong> Business email communication, strategy call scheduling, and collaborative documentation under strict enterprise Data Processing Addenda (DPA).</li>
                  <li><strong>Stripe, Inc. / Direct Banking Networks:</strong> Invoicing and commercial payment processing. Creative Realm Designs never stores raw payment card numbers on our website.</li>
                </ul>
                <p className="text-[#616161]">
                  We do not permit any sub-processor to access personal data for independent marketing, profiling, or cross-site data sharing.
                </p>
              </section>

              {/* Section 10 */}
              <section id="international-transfers" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 10
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  10. International Data Transfers &amp; Transfer Mechanisms
                </h2>
                <p className="text-[#616161]">
                  Because Creative Realm Designs operates internationally and engages cloud edge infrastructure located in the United States and the United Kingdom, your data may be processed in jurisdictions outside your country of residence.
                </p>
                <p className="text-[#616161]">
                  Where data originating in the United Kingdom or European Economic Area is transferred to countries that do not have an adequacy decision from the UK Government or European Commission, transfers are executed under standard contractual safeguards, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#616161]">
                  <li>The UK International Data Transfer Addendum to the EU Standard Contractual Clauses (SCCs).</li>
                  <li>Standard Contractual Clauses approved by the European Commission (Implementing Decision (EU) 2021/914).</li>
                  <li>The EU-U.S. Data Privacy Framework and UK Extension to the EU-U.S. Data Privacy Framework where certified providers are engaged.</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section id="privacy-rights" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 11
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  11. Your Statutory Privacy Rights
                </h2>
                <p className="text-[#616161]">
                  Depending on your geographic location and applicable local legislation, you possess enforceable legal rights regarding your personal data:
                </p>

                <div className="space-y-4 mt-4">
                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      United Kingdom &amp; European Union (UK &amp; EU GDPR)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      You have the right to access your personal data (Art. 15), rectify inaccurate information (Art. 16), request permanent erasure (&quot;right to be forgotten&quot;, Art. 17), restrict processing (Art. 18), obtain data portability (Art. 20), and object to processing based on legitimate interests (Art. 21). You also have the right to lodge a formal complaint with the UK Information Commissioner&apos;s Office (ICO, <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff7759]">ico.org.uk</a>) or your local EU supervisory authority.
                    </p>
                  </div>

                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      California Residents (CCPA &amp; CPRA)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      Under the California Consumer Privacy Act (CCPA/CPRA), California residents have the right to know the categories and specific pieces of personal information collected, request deletion, correct inaccurate personal information, and be free from discriminatory treatment for exercising their privacy rights. <strong>Notice of No Sale:</strong> Creative Realm Designs does not sell personal information and has not sold or shared personal information in the preceding 12 months.
                    </p>
                  </div>

                  <div className="p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb]">
                    <h3 className="font-display font-bold text-sm text-[#17171c] mb-1">
                      Canada (PIPEDA) &amp; Australia (Privacy Act 1988)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
                      Canadian residents retain rights of access and challenge under PIPEDA, and Australian residents retain rights under the Australian Privacy Principles (APPs) to access and request correction of personal information held by us, or complain to the Office of the Australian Information Commissioner (OAIC).
                    </p>
                  </div>
                </div>

                <p className="text-[#616161] text-xs sm:text-sm pt-2">
                  To exercise any of these rights, email us at <a href="mailto:creativerealmdesignstudio@gmail.com" className="font-medium text-[#17171c] underline hover:text-[#ff7759]">creativerealmdesignstudio@gmail.com</a> with the subject line &quot;Data Rights Request&quot;. We verify all identity requests securely and respond within 30 calendar days (or sooner where mandated by local statutes).
                </p>
              </section>

              {/* Section 12 */}
              <section id="children-privacy" className="scroll-mt-32 pb-10 border-b border-[#e5e7eb] space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 12
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  12. Children&apos;s Privacy Protection
                </h2>
                <p className="text-[#616161]">
                  Creative Realm Designs provides professional digital engineering and website design services directed exclusively to adult founders, corporate entities, and business professionals. Our website and services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If you believe a minor has provided information to our studio, please notify us immediately, and we will purge the record promptly.
                </p>
              </section>

              {/* Section 13 */}
              <section id="policy-updates" className="scroll-mt-32 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                    Section // 13
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                  13. Revisions, Updates &amp; Privacy Officer Contact
                </h2>
                <p className="text-[#616161]">
                  We review and update this Privacy Policy periodically to reflect technological advancements, statutory amendments, or changes in studio operations. When revisions occur, we update the &quot;Effective Date&quot; at the top of this document. Material modifications affecting active clients will be communicated via direct email or conspicuous notice on our website.
                </p>

                {/* Direct Contact Panel */}
                <div className="p-8 sm:p-10 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb] mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                      Legal Compliance Desk
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17171c] tracking-tight mb-3">
                    Privacy Inquiries &amp; Data Rights Requests
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mb-6">
                    If you have questions regarding this policy, wish to execute a mutual NDA, or desire to exercise your statutory rights of access, correction, or permanent erasure, please contact our senior data protection lead:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <address className="not-italic p-4 rounded-[12px] bg-white border border-[#e5e7eb]">
                      <span className="text-[#75758a] font-mono uppercase block mb-1">Direct Privacy Officer</span>
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
                    href="/terms-and-conditions" 
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17171c] font-semibold hover:text-[#ff7759] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-sm"
                  >
                    <span>Read Terms &amp; Conditions</span>
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
