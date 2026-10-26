import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  Clock, 
  Lock
} from "lucide-react";
import { 
  packagesData, 
  comparisonFeatures, 
  addOnServices, 
  packagesFaqs 
} from "@/lib/packages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProposalDialog from "@/components/ProposalDialog";

export const metadata: Metadata = {
  title: "Web Design Packages & Pricing",
  description: "Web design and Google SEO packages starting from $3,200. Flexible scopes, transparent guidelines, guaranteed sub-second load times, and 100% code ownership.",
  alternates: {
    canonical: "/packages"
  },
  openGraph: {
    title: "Web Design Packages & Pricing | Creative Realm Designs",
    description: "Web design and Google SEO packages starting from $3,200. Flexible scopes, transparent guidelines, guaranteed sub-second load times, and 100% code ownership.",
    url: "/packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Packages & Pricing | Creative Realm Designs",
    description: "Web design and Google SEO packages starting from $3,200. Flexible scopes, transparent guidelines, guaranteed sub-second load times, and 100% code ownership.",
  }
};

export default function PackagesPage() {
  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Creative Realm Designs Packages",
    "description": "Bespoke website design, custom web engineering, and Google SEO packages.",
    "itemListElement": packagesData.map((pkg, idx) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": pkg.name,
        "description": pkg.description,
      },
      "price": pkg.price.replace(/[^0-9]/g, "") || "11500",
      "priceCurrency": "USD",
      "position": idx + 1
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packagesFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([offerCatalogSchema, faqSchema]) }}
      />

      <div className="py-12 sm:py-20 md:py-24 px-6 sm:px-12 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
              Transparent Pricing • Flexible Scopes
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight mb-6">
              Tailored Web Design &amp; <br className="hidden sm:inline" />
              <span className="text-[#003c33]">Growth Packages</span>
            </h1>
            <p className="text-[#616161] max-w-2xl mx-auto text-base sm:text-lg font-sans mb-8 leading-relaxed">
              Transparent baseline packages in US Dollars ($), zero hidden extras, and guaranteed 98+ Google PageSpeed. Our prices are flexible guidelines—we can discuss and decide on pricing together to match your exact goals.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#fafaf9] border border-[#e5e7eb] text-xs font-mono text-[#616161]">
              <span className="w-2 h-2 rounded-full bg-[#003c33]" aria-hidden="true" />
              <span>Currently onboarding select projects for this quarter</span>
            </div>
          </header>

          {/* Packages 3-Card Grid */}
          <section aria-labelledby="packages-grid-heading" className="mb-20 sm:mb-28">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Transparent Scopes
              </span>
              <h2 id="packages-grid-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Available Investment Tiers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {packagesData.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-8 sm:p-10 relative flex flex-col justify-between rounded-[16px] transition-all ${
                    pkg.recommended 
                      ? "border-2 border-[#17171c] bg-[#eeece7] shadow-md" 
                      : "border border-[#e5e7eb] bg-[#fafaf9] hover:border-[#d9d9dd]"
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#17171c] text-white text-xs font-mono uppercase tracking-wider font-medium">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-[#616161] text-xs font-sans mb-6 min-h-[32px]">
                      {pkg.tagline}
                    </p>

                    <div className="mb-6 p-5 rounded-[12px] bg-white border border-[#e5e7eb]">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl sm:text-4xl font-bold font-display text-[#17171c] tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#616161] font-mono font-medium">
                          {pkg.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#003c33] font-mono font-medium">
                        <Clock size={13} aria-hidden="true" />
                        <span>Timeline: {pkg.turnaround}</span>
                      </div>
                    </div>

                    <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="pt-4 border-t border-[#d9d9dd] mb-8">
                      <div className="text-xs font-mono font-semibold text-[#616161] mb-3">
                        Included Deliverables:
                      </div>
                      <ul className="space-y-3">
                        {pkg.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#212121] font-sans">
                            <CheckCircle2 size={16} className="text-[#003c33] flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 text-xs text-[#616161] font-sans italic">
                      Ideal for: {pkg.idealFor}
                    </div>

                    <ProposalDialog defaultPackage={pkg.name}>
                      <button
                        type="button"
                        aria-label={`Choose ${pkg.name}: Request project proposal`}
                        className={`w-full text-center py-3.5 min-h-[44px] rounded-full font-medium font-sans text-xs transition-all block cursor-pointer ${
                          pkg.recommended 
                            ? "btn-primary" 
                            : "btn-pill-outline"
                        }`}
                      >
                        <span>Choose {pkg.name}</span>
                      </button>
                    </ProposalDialog>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Triple Contractual Guarantee Strip */}
          <section className="mb-16 sm:mb-24 md:mb-32 p-8 sm:p-12 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb]" aria-labelledby="guarantees-heading">
            <div className="text-center mb-8">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-1 block font-semibold">
                Guaranteed Standards
              </span>
              <h2 id="guarantees-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight">
                Our Triple Contractual Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <Gauge size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display text-sm tracking-tight mb-1">
                    98+ Google PageSpeed (&lt;800ms Load Time)
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    Zero bloated page builders. Hand-written clean code guarantees sub-second page loads and all-green Google Core Web Vitals on mobile and desktop.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <Lock size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display text-sm tracking-tight mb-1">
                    100% Code &amp; Design Ownership
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    You hold complete legal ownership of your designs, code repository, and brand assets with zero proprietary builder lock-in or recurring platform fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display text-sm tracking-tight mb-1">
                    Guaranteed Turnaround &amp; Clear Milestones
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    Firm delivery deadlines and transparent stage payments tied to agreed milestones. You test and verify your completed website before final public launch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Full Side-by-Side Comparison Table */}
          <section className="mb-16 sm:mb-24 md:mb-32" aria-labelledby="comparison-heading">
            <div className="text-center mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Side-by-Side Analysis
              </span>
              <h2 id="comparison-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Detailed Package Comparison
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Evaluate every feature, capability, and deliverable across each tier to select the ideal scope for your business.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[16px] border border-[#d9d9dd] bg-white">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#d9d9dd] bg-[#fafaf9]">
                    <th scope="col" className="p-5 text-xs font-mono uppercase tracking-wider text-[#616161] w-2/5">
                      Scope &amp; Capabilities
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#17171c] w-1/5">
                      Starter Showcase
                      <span className="block text-[#17171c] font-bold text-sm mt-1">$3,200</span>
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#003c33] w-1/5 bg-[#edfce9]/40 border-x border-[#d9d9dd]">
                      Growth Engine
                      <span className="block text-[#003c33] font-bold text-sm mt-1">$5,800</span>
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#17171c] w-1/5">
                      Scale &amp; Authority
                      <span className="block text-[#17171c] font-bold text-sm mt-1">$11,500+</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((group) => (
                    <Fragment key={group.category}>
                      <tr>
                        <th colSpan={4} scope="colgroup" className="bg-[#eeece7] px-5 py-2.5 font-mono font-medium text-xs uppercase tracking-wider text-[#17171c] border-t border-b border-[#d9d9dd] text-left">
                          {group.category}
                        </th>
                      </tr>
                      {group.features.map((feature, fIdx) => (
                        <tr key={feature.name} className={`border-b border-[#e5e7eb] hover:bg-[#fafaf9] transition-colors ${fIdx % 2 === 0 ? "bg-white" : "bg-[#fdfdfd]"}`}>
                          <th scope="row" className="p-4 font-sans text-xs sm:text-sm font-normal text-[#212121]">
                            {feature.name}
                          </th>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#616161]">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span>{feature.starter}</span>
                            )}
                          </td>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#003c33] font-medium bg-[#edfce9]/20 border-x border-[#d9d9dd]">
                            {typeof feature.growth === "boolean" ? (
                              feature.growth ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span className="font-semibold">{feature.growth}</span>
                            )}
                          </td>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#616161]">
                            {typeof feature.scale === "boolean" ? (
                              feature.scale ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span>{feature.scale}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-on Services */}
          <section className="mb-20 sm:mb-28" aria-labelledby="addons-heading">
            <div className="text-center mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Modular Capabilities
              </span>
              <h2 id="addons-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Strategic Add-Ons &amp; Retainers
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Enhance your build with dedicated monthly support, an intuitive publishing dashboard, or targeted search ranking sprints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((addon) => (
                <div key={addon.name} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] flex flex-col justify-between hover:border-[#d9d9dd] transition-all">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-xl font-bold font-display text-[#17171c] tracking-tight">
                        {addon.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold font-display text-[#17171c]">{addon.price}</span>
                        <span className="text-xs text-[#616161] font-mono ml-1">{addon.cadence}</span>
                      </div>
                    </div>
                    <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed mb-6">
                      {addon.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {addon.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                          <CheckCircle2 size={14} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-between w-full min-h-[44px] py-3 px-6 rounded-full bg-white border border-[#d9d9dd] hover:border-[#17171c] text-[#17171c] font-sans text-xs font-medium transition-all"
                  >
                    <span>Inquire About {addon.name}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing & Billing FAQs Accordion */}
          <section className="max-w-4xl mx-auto mb-20 sm:mb-28" aria-labelledby="packages-faq-heading">
            <div className="text-center mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Common Inquiries
              </span>
              <h2 id="packages-faq-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Pricing &amp; Billing FAQs
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {packagesFaqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="rounded-[12px] border border-[#e5e7eb] px-6 py-2 bg-white data-[state=open]:border-[#17171c] transition-colors"
                >
                  <AccordionTrigger className="text-[#17171c] hover:text-[#003c33] font-bold font-display text-sm sm:text-base tracking-tight text-left py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#616161] text-sm font-sans leading-relaxed border-t border-[#f0f0f0] pt-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* High-Contrast Final Proposal CTA */}
          <section className="p-10 sm:p-16 rounded-[22px] text-center relative overflow-hidden bg-[#003c33] text-white shadow-xl cv-auto" aria-labelledby="packages-cta-heading">
            <div className="max-w-3xl mx-auto relative z-10">
              <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Start Your Project
              </span>
              <h2 id="packages-cta-heading" className="text-3xl sm:text-5xl font-normal font-display text-white tracking-tight mb-6">
                Ready for a Website That Converts?
              </h2>
              <p className="text-[#d9d9dd] text-sm sm:text-base font-sans leading-relaxed mb-8 max-w-xl mx-auto">
                Book a 20-minute strategy call with our lead designer and engineer. We will evaluate your business goals and deliver a clear, tailored proposal.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ProposalDialog>
                  <button
                    type="button"
                    className="btn-white-pill py-3.5 px-8 text-xs font-medium cursor-pointer"
                    aria-label="Book a 20-minute strategy call: Free consultation with Creative Realm"
                  >
                    Book a 20-Minute Strategy Call
                  </button>
                </ProposalDialog>
                <ProposalDialog>
                  <button
                    type="button"
                    className="btn-secondary py-3.5 px-7 text-xs font-medium cursor-pointer border border-white/20 bg-transparent text-white hover:bg-white/10"
                    aria-label="Request a Project Proposal"
                  >
                    Request a Proposal
                  </button>
                </ProposalDialog>
                <Link
                  href="/services"
                  className="text-white hover:text-[#edfce9] text-xs sm:text-sm underline underline-offset-4 transition-colors font-medium ml-2 inline-flex items-center gap-1"
                >
                  <span>View Service Details</span>
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
