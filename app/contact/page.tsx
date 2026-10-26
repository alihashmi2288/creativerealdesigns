import type { Metadata } from "next";
import { Mail, Clock, Gauge, Search, Compass, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Free Strategy Call",
  description: "Schedule a free 20-minute strategy call with our senior leads. Get a site speed audit, competitor search analysis, and an honest tailored proposal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Free Strategy Call | Creative Realm Designs",
    description: "Schedule a free 20-minute strategy call with our senior leads. Get a site speed audit, competitor search analysis, and an honest tailored proposal.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Free Strategy Call | Creative Realm Designs",
    description: "Schedule a free 20-minute strategy call with our senior leads. Get a site speed audit, competitor search analysis, and an honest tailored proposal.",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

const contactFaqs = [
  {
    q: "What happens during our 20-minute strategy call?",
    a: "We review your current website speed, analyze competitor search footprints in your market, and identify what is stopping visitors from inquiring. You leave with a clear, realistic roadmap regardless of whether we work together.",
  },
  {
    q: "What information should I prepare before the call?",
    a: "Nothing formal is required. Having a link to your current website, a few competitor sites you admire, your target launch timeframe, and a ballpark budget range helps us give you the most accurate recommendations.",
  },
  {
    q: "Can we sign a mutual NDA before sharing our project details?",
    a: "Yes. For proprietary platforms, unreleased products, or enterprise applications, we are happy to sign a standard mutual non-disclosure agreement before reviewing your specifications or architecture.",
  },
  {
    q: "How quickly do you reply to inquiries?",
    a: "We guarantee a written response within 24 hours Monday through Friday. A senior design or technical lead reviews every message personally.",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${baseUrl}/contact/#webpage`,
      "url": `${baseUrl}/contact`,
      "name": "Contact Creative Realm Designs",
      "description": "Schedule a free 20-minute strategy call with our senior design and technical leads.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Creative Realm Designs",
        "url": baseUrl,
        "email": "creativerealmdesignstudio@gmail.com",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": contactFaqs.map((faq) => ({
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

const valuePoints = [
  {
    icon: Gauge,
    title: "Site Speed & Conversion Review",
    desc: "We analyze why current visitors bounce and uncover specific bottlenecks slowing down your revenue.",
  },
  {
    icon: Search,
    title: "Competitor Search Analysis",
    desc: "We inspect which lucrative Google keywords competitors dominate and how to outrank them.",
  },
  {
    icon: Compass,
    title: "Realistic Commercial Roadmap",
    desc: "You receive a clear scope, agreed timeline, and transparent investment estimate tailored to your goals.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Sales Pressure",
    desc: "Frank, practical guidance from senior builders and designers who will actually work on your project.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-20 text-center">
            <div>
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-3 block font-semibold">
                Direct Agency Consultation
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] tracking-tight leading-tight mb-6">
                Schedule a Free <br className="hidden sm:inline" />
                <span className="text-[#003c33]">20-Minute Strategy Call</span>
              </h1>
              <p className="text-[#616161] max-w-2xl mx-auto text-base sm:text-lg font-sans leading-relaxed">
                Speak directly with senior design and technical leads. We will analyze your website speed, review competitor search rankings, and outline an actionable growth roadmap.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] tracking-tight mb-4">
                  What You Get On The Call
                </h2>
                <p className="text-[#616161] text-sm sm:text-base font-sans leading-relaxed">
                  Every 20-minute strategy call is structured around your commercial targets. Here is what we deliver:
                </p>
              </div>

              {/* What Founders Get Cards */}
              <div className="space-y-3.5">
                {valuePoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex gap-4 items-start p-5 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-all"
                  >
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#003c33] flex-shrink-0" aria-hidden="true">
                      <point.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-[#17171c] font-bold font-display text-sm mb-1">{point.title}</h3>
                      <p className="text-[#616161] font-sans text-xs sm:text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-6 border-t border-[#e5e7eb]" role="region" aria-label="Direct Contact Channels">
                <div className="flex gap-4 items-start p-5 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb]">
                  <div className="w-10 h-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-[#17171c] font-bold font-display text-xs mb-1">Direct Email</h3>
                    <a href="mailto:creativerealmdesignstudio@gmail.com" className="text-[#616161] hover:text-[#17171c] font-sans text-sm transition-colors">
                      creativerealmdesignstudio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] space-y-2">
                <div className="flex items-center gap-2 text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider">
                  <Clock size={15} aria-hidden="true" />
                  <span>24-Hour Guaranteed Reply</span>
                </div>
                <p className="text-[#616161] text-xs font-sans leading-relaxed">
                  Every inquiry is personally reviewed by a project lead. No junior sales reps, automated pitch scripts, or spam.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Quote-Ready FAQ Section */}
          <section className="mt-20 sm:mt-28 max-w-4xl mx-auto cv-auto" aria-labelledby="contact-faq-heading">
            <div className="text-center mb-12">
              <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
                Before Inquiring
              </span>
              <h2 id="contact-faq-heading" className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] tracking-tight">
                Frequently Asked Questions Before Scheduling
              </h2>
            </div>

            <div className="space-y-4">
              {contactFaqs.map((faq, i) => (
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
        </div>
      </div>
    </>
  );
}
