import type { Metadata } from "next";
import Link from "next/link";
import PortfolioFilter from "@/components/PortfolioFilter";
import { projects, categories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Client Case Studies & Results",
  description: "Explore verified client case studies. See how custom website design, sub-second speed, and Google SEO generated qualified inbound inquiries and revenue.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Client Case Studies & Results | Creative Realm Designs",
    description: "Explore verified client case studies. See how custom website design, sub-second speed, and Google SEO generated qualified inbound inquiries and revenue.",
    url: "/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Results | Creative Realm Designs",
    description: "Explore verified client case studies. See how custom website design, sub-second speed, and Google SEO generated qualified inbound inquiries and revenue.",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const caseStudyFaqs = [
  {
    q: "How do you verify the performance metrics in your case studies?",
    a: "We verify all metrics using Google Lighthouse mobile audits, live analytics data, and Google Search Console rankings. Every case study reflects real commercial outcomes measured before and after launch.",
  },
  {
    q: "Why do your custom websites generate more inquiries than templates?",
    a: "Custom websites load in under a second, removing the friction that causes mobile visitors to bounce. We design clear inquiry paths and prominent calls to action tailored to how your specific buyers make purchasing decisions.",
  },
  {
    q: "Can I review live examples and client references before hiring you?",
    a: "Yes. During our free 20-minute strategy call, we share live client sites, review Google search ranking proof, and explain exactly how each project was planned and delivered.",
  },
  {
    q: "How quickly do new websites begin ranking on Google after launch?",
    a: "New pages typically index within 72 hours of launch because we submit structured search blueprints directly to Google. Meaningful ranking gains for competitive search terms typically emerge within 4 to 8 weeks.",
  },
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "Verified Case Studies & Proven Commercial Results",
      "description": "Verified case studies highlighting custom website design, web engineering, and Google SEO outcomes.",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "name": project.title,
          "headline": project.title,
          "url": `${baseUrl}/portfolio/${project.slug}`,
          "description": project.description,
          "image": `${baseUrl}${project.image}`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": caseStudyFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-14 sm:mb-20">
            <div className="max-w-3xl">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Verified Client Outcomes
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight leading-tight mb-6">
                Verified Case Studies &amp; <br />
                <span className="text-[#003c33]">Proven Commercial Results</span>
              </h1>
              <p className="text-[#616161] text-base md:text-lg font-sans leading-relaxed">
                Explore how custom design, sub-second speed, and targeted Google search optimization helped growing businesses replace slow, outdated websites with platforms that consistently generate qualified inquiries.
              </p>
            </div>
          </header>

          {/* Client Interactive Filter & Grid */}
          <section aria-labelledby="portfolio-cases-heading" className="mb-8">
            <div className="mb-8 sm:mb-10">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Industry Track Record
              </span>
              <h2 id="portfolio-cases-heading" className="text-2xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Proven Results Across High-Stakes Industries
              </h2>
              <p className="text-[#616161] text-sm sm:text-base font-sans mt-2 max-w-2xl leading-relaxed">
                Filter by service discipline to inspect real client challenges, our custom solutions, and audited commercial metrics.
              </p>
            </div>

            <PortfolioFilter projects={projects} categories={categories} />
          </section>

          {/* Agency Performance Standards */}
          <section className="mt-20 sm:mt-28 py-14 sm:py-20 border-y border-[#e5e7eb] cv-auto" aria-labelledby="standards-heading">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest block mb-2 font-semibold">
                Contractual Performance Standards
              </span>
              <h2 id="standards-heading" className="text-2xl sm:text-4xl font-normal font-display tracking-tight text-[#17171c]">
                Every Website We Build Delivers These Standards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
              {[
                {
                  title: "98+ Google PageSpeed",
                  value: "98+",
                  desc: "Sub-second load times on mobile devices so visitors never bounce while waiting for pages to open.",
                },
                {
                  title: "Day 1 Organic Search Architecture",
                  value: "Day 1",
                  desc: "Built from day one with structured search blueprints and automated site maps so Google indexes your pages immediately.",
                },
                {
                  title: "100% Code Ownership",
                  value: "100%",
                  desc: "Full transfer of all design files, source code, and assets upon completion. No recurring licensing fees or vendor lock-in.",
                },
              ].map((stat) => (
                <div key={stat.title} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] text-center">
                  <div className="text-5xl font-bold font-display text-[#17171c] mb-2">{stat.value}</div>
                  <h3 className="text-[#17171c] font-sans text-sm font-bold mb-1.5">{stat.title}</h3>
                  <p className="text-[#616161] text-xs font-sans leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quote-Ready FAQ Section */}
          <section className="mt-20 sm:mt-28 max-w-4xl mx-auto cv-auto" aria-labelledby="portfolio-faq-heading">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Evidence &amp; Verification
              </span>
              <h2 id="portfolio-faq-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Frequently Asked Questions About Our Case Studies
              </h2>
            </div>

            <div className="space-y-4">
              {caseStudyFaqs.map((faq, i) => (
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

          {/* Deep Green CTA Band */}
          <section className="mt-20 sm:mt-28 py-16 sm:py-24 text-center relative overflow-hidden rounded-[22px] bg-[#003c33] text-white cv-auto" aria-labelledby="portfolio-cta-heading">
            <div className="relative z-10 max-w-3xl mx-auto px-6">
              <span className="text-[#ffad9b] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Start Your Project
              </span>
              <h2 id="portfolio-cta-heading" className="text-4xl md:text-6xl font-normal font-display text-white tracking-tight mb-6">
                Ready to Turn Visitors Into <br />
                <span className="text-[#ffad9b]">Qualified Client Inquiries?</span>
              </h2>
              <p className="text-[#d9d9dd] text-base md:text-lg font-sans mb-10 leading-relaxed max-w-2xl mx-auto">
                Schedule a free 20-minute strategy call with our senior team. We will review your current website speed, analyze competitor search rankings in your industry, and deliver a clear, tailored proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <Link
                  href="/contact"
                  className="btn-white-pill text-sm px-9 py-3.5 font-medium inline-block"
                  aria-label="Schedule free strategy call with Creative Realm"
                >
                  Schedule Free Strategy Call
                </Link>
                <Link
                  href="/packages"
                  className="btn-pill-outline border-white/30 text-white hover:bg-white/10 text-sm px-8 py-3.5 font-medium inline-block"
                  aria-label="View transparent project packages and pricing"
                >
                  View Packages &amp; Pricing
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#d9d9dd] font-sans">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#ffad9b]" aria-hidden="true">✓</span>
                  24-Hour Guaranteed Reply
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#ffad9b]" aria-hidden="true">✓</span>
                  Mutual NDA Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#ffad9b]" aria-hidden="true">✓</span>
                  Direct Senior Access
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
