import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  Code2, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Studio & Approach",
  description: "Meet our independent web studio. We build custom websites with sub-second speeds and Day-1 Google SEO that turn visitors into qualified client inquiries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Studio & Approach | Creative Realm Designs",
    description: "Meet our independent web studio. We build custom websites with sub-second speeds and Day-1 Google SEO that turn visitors into qualified client inquiries.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Studio & Approach | Creative Realm Designs",
    description: "Meet our independent web studio. We build custom websites with sub-second speeds and Day-1 Google SEO that turn visitors into qualified client inquiries.",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const aboutFaqs = [
  {
    q: "Who builds my website at Creative Realm Designs?",
    a: "Every project is designed and built directly by senior specialists. We eliminated middle management and account executives. You speak directly with the senior design and technical leads shaping your website.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work remotely with ambitious founders and business owners across the United Kingdom, North America, Europe, and Australia with scheduled milestone reviews and transparent updates.",
  },
  {
    q: "Why do you write custom code rather than using WordPress or Webflow templates?",
    a: "Custom-built websites load in under a second, never suffer from bloated or vulnerable third-party plugins, pass Google Core Web Vitals automatically, and give you 100% ownership of your codebase with zero platform fees.",
  },
  {
    q: "What is your policy on code and design ownership?",
    a: "You own 100% of all intellectual property, Figma design files, source code, and assets the moment final payment is complete. We never charge monthly licensing fees, hosting markups, or lock you into proprietary tools.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${baseUrl}/about/#webpage`,
      "url": `${baseUrl}/about`,
      "name": "About Creative Realm Designs",
      "description": "Custom websites crafted to win clients and build authority.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Creative Realm Designs",
        "url": baseUrl,
        "logo": `${baseUrl}/brand/creative-realm-logo.svg`,
        "description": "Independent website design, web engineering, and Google SEO studio.",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": aboutFaqs.map((faq) => ({
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-24 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Direct Studio Partnership
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight leading-tight mb-6">
                Custom Websites Built to <br />
                <span className="text-[#003c33]">Win Clients and Build Industry Authority</span>
              </h1>
              <p className="text-[#616161] text-base sm:text-lg font-sans leading-relaxed mb-6">
                Creative Realm Designs is an independent custom web design and engineering studio. We partner directly with business owners and founders to replace slow, outdated websites with high-performance platforms that establish market authority and rank on Google.
              </p>
              <p className="text-[#616161] text-sm sm:text-base font-sans leading-relaxed mb-8">
                We stripped away typical agency bloat. You will never deal with commission-driven account managers, junior handoffs, or monthly platform fees. You collaborate directly with senior designers and engineers focused entirely on your commercial growth.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="btn-primary text-xs px-8 py-3.5 min-h-[44px] font-medium">
                  Schedule Free Strategy Call
                </Link>
                <Link href="/portfolio" className="btn-secondary text-xs px-4 py-3.5 min-h-[44px] font-medium">
                  <span>View Case Studies</span>
                  <ArrowRight size={13} className="ml-1 inline" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-8">
              <div className="p-3 aspect-[4/5] relative rounded-[22px] overflow-hidden bg-[#eeece7] border border-[#e5e7eb] shadow-sm">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image 
                    src="/about-hero.png" 
                    alt="Creative Realm studio workspace and design collaboration" 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[12px] bg-white/95 backdrop-blur-md border border-[#e5e7eb] text-[#212121]">
                    <div className="text-[#003c33] font-mono text-xs uppercase tracking-wider mb-1 font-semibold">Our Studio Benchmark</div>
                    <div className="text-[#17171c] font-sans text-xs sm:text-sm">Every line of code and visual detail is purposefully engineered to convert visitors into booked client inquiries.</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Values Grid: Core Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 sm:py-16 border-y border-[#e5e7eb] mb-16 sm:mb-24 cv-auto" aria-labelledby="values-heading">
            <div className="md:col-span-3 text-center mb-4">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Why Founders Choose Us
              </span>
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Why Business Owners Work With Us Directly
              </h2>
            </div>

            {[
              {
                title: "Direct Senior Collaboration",
                desc: "You collaborate directly with the senior designers and engineers building your website. No middlemen, no account reps, and no junior handoffs."
              },
              {
                title: "Sub-Second Speed & 100% Ownership",
                desc: "We write clean, lightweight code that opens in under a second on phones. You own 100% of the code and Figma files, with zero monthly platform fees."
              },
              {
                title: "Day-1 Google Search Visibility",
                desc: "We build structured search blueprints and clean metadata from day one so Google indexes your pages quickly and positions your company in front of high-intent buyers."
              }
            ].map((principle) => (
              <div key={principle.title} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-all">
                <h3 className="text-[#17171c] font-bold font-display text-xl mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-[#616161] text-sm leading-relaxed font-sans">
                  {principle.desc}
                </p>
              </div>
            ))}
          </section>

          {/* 4-Phase Execution Roadmap */}
          <section className="mb-16 sm:mb-24 cv-auto" aria-labelledby="process-roadmap-heading">
            <div className="text-center mb-14 sm:mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                4-Phase Execution Roadmap
              </span>
              <h2 id="process-roadmap-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Our 4-Phase Delivery Roadmap
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Predictable milestones, weekly video updates, and clear timelines with zero surprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: "Phase 1", time: "Week 1", title: "Commercial Strategy", desc: "We analyze your business model, ideal buyers, and competitor search rankings to map an exact commercial blueprint." },
                { phase: "Phase 2", time: "Weeks 2–3", title: "Interactive Prototyping", desc: "We design complete interactive prototypes. You review, click through, and approve every screen before any coding begins." },
                { phase: "Phase 3", time: "Weeks 4–5", title: "Production Build", desc: "We write clean, high-speed code with sub-second page loads, responsive mobile layouts, and secure contact forms." },
                { phase: "Phase 4", time: "Week 6", title: "Speed Audit & Launch", desc: "We verify 98+ Google PageSpeed scores, connect domains, submit search blueprints to Google, and launch smoothly." }
              ].map((step) => (
                <div 
                  key={step.title}
                  className="p-8 rounded-[16px] bg-white border border-[#d9d9dd] flex flex-col justify-between hover:border-[#17171c] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#17171c] text-white font-mono text-xs font-bold uppercase">
                        {step.phase}
                      </span>
                      <span className="text-xs text-[#616161] font-mono font-medium">{step.time}</span>
                    </div>
                    <h3 className="text-[#17171c] font-bold font-display text-base mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[#616161] text-xs sm:text-sm leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dedicated Specialists on Every Project */}
          <section className="mb-16 sm:mb-24 cv-auto" aria-labelledby="team-heading">
            <div className="text-center mb-14 sm:mb-16">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Direct Accountability
              </span>
              <h2 id="team-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight">
                Dedicated Senior Leads on Every Project
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Every project is delivered directly by senior specialists across design, engineering, and organic search growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  role: "UI/UX Design Lead",
                  lead: "Visual Architecture",
                  icon: Palette,
                  focus: "Custom Prototypes • Buyer Ergonomics • Conversion Flow",
                  desc: "Shapes clean, authoritative visual layouts that establish immediate credibility and make booking client inquiries effortless."
                },
                {
                  role: "Web Engineering Lead",
                  lead: "Technical Development",
                  icon: Code2,
                  focus: "Sub-Second Loading • Clean Code • Mobile Perfection",
                  desc: "Builds high-performance websites engineered for sub-second page loads across every phone, tablet, and desktop display."
                },
                {
                  role: "SEO & Growth Lead",
                  lead: "Organic Search Growth",
                  icon: Search,
                  focus: "Google Indexing • Regional Keywords • Search Architecture",
                  desc: "Structures site architecture and technical signals so your business ranks at the top of Google searches for high-intent client queries."
                }
              ].map((discipline) => (
                <div
                  key={discipline.role}
                  className="p-8 rounded-[16px] bg-white border border-[#d9d9dd] flex flex-col justify-between hover:border-[#17171c] transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                      <discipline.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#003c33] font-mono font-medium block mb-1">
                      {discipline.lead}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-[#17171c] mb-3 tracking-tight">
                      {discipline.role}
                    </h3>
                    <p className="text-[#616161] text-sm font-sans leading-relaxed mb-6">
                      {discipline.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#e5e7eb]">
                    <div className="text-xs font-mono text-[#616161]">
                      {discipline.focus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Agency Commitments: Deep Green Band */}
          <section className="p-8 sm:p-14 rounded-[22px] bg-[#003c33] text-white mb-24 cv-auto" aria-labelledby="commitments-heading">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-[#002b24] border border-[#004d42] flex items-center justify-center text-[#edfce9] mx-auto mb-4">
                <ShieldCheck className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 id="commitments-heading" className="text-2xl sm:text-4xl font-normal font-display text-white tracking-tight mb-4">
                Our 4 Binding Studio Commitments
              </h2>
              <p className="text-[#d9d9dd] text-sm font-sans max-w-xl mx-auto mb-8">
                Clear contractual standards protecting your investment, your ownership, and your launch timeline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
                <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                  <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-bold font-display text-sm">100% Code &amp; Asset Ownership</h3>
                    <p className="text-[#d9d9dd] text-xs font-sans mt-1">You own all source code, Figma design files, and digital assets upon completion. Zero monthly platform lock-in.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                  <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-bold font-display text-sm">98+ PageSpeed Benchmark</h3>
                    <p className="text-[#d9d9dd] text-xs font-sans mt-1">We refuse to ship slow websites. Every build is verified to open in under a second on mobile phones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                  <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-bold font-display text-sm">Transparent &amp; Flexible Pricing</h3>
                    <p className="text-[#d9d9dd] text-xs font-sans mt-1">Clear baseline pricing with open discussion. We align deliverables and investment collaboratively before work begins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                  <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-bold font-display text-sm">Direct Senior Communication</h3>
                    <p className="text-[#d9d9dd] text-xs font-sans mt-1">Speak directly with senior designers and engineers. No account managers or game of telephone.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote-Ready FAQs */}
          <section className="max-w-4xl mx-auto mb-20 sm:mb-28 cv-auto" aria-labelledby="about-faq-heading">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Studio Background
              </span>
              <h2 id="about-faq-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Frequently Asked Questions About Our Studio
              </h2>
            </div>

            <div className="space-y-4">
              {aboutFaqs.map((faq, i) => (
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

          {/* Final CTA */}
          <section className="p-10 sm:p-16 rounded-[22px] text-center cv-auto bg-[#eeece7] border border-[#e5e7eb]" aria-labelledby="about-cta-heading">
            <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
              Get Started
            </span>
            <h2 id="about-cta-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] tracking-tight mb-4">
              Ready to Build a Website That Drives Inquiries?
            </h2>
            <p className="text-[#616161] text-base max-w-lg mx-auto font-sans mb-8 leading-relaxed">
              Tell us about your business goals. We will review your current website speed, uncover competitor search opportunities, and provide a clear, tailored proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <Link href="/contact" className="btn-primary text-sm px-9 py-3.5 font-medium inline-block">
                Schedule Free Strategy Call
              </Link>
              <Link href="/portfolio" className="btn-secondary text-sm px-7 py-3.5 font-medium inline-block">
                View Client Case Studies
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#616161] font-sans">
              <span className="flex items-center gap-1.5">
                <span className="text-[#003c33]" aria-hidden="true">✓</span>
                24-Hour Guaranteed Reply
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#003c33]" aria-hidden="true">✓</span>
                Mutual NDA Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#003c33]" aria-hidden="true">✓</span>
                100% Code Ownership
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
