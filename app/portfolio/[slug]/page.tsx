import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { SOCIAL_URLS } from "@/lib/socials";
import { SocialIconButtonRow } from "@/components/SocialIcons";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  const title = `${project.title} Case Study`;
  const description = project.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Creative Realm Designs`,
      description,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Creative Realm Designs`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${project.title} Case Study`,
    "description": project.description,
    "image": `${baseUrl}${project.image}`,
    "author": {
      "@type": "Organization",
      "name": "Creative Realm Designs",
      "url": baseUrl,
      "sameAs": SOCIAL_URLS,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Creative Realm Designs",
      "url": baseUrl,
      "sameAs": SOCIAL_URLS,
    },
    "mainEntityOfPage": `${baseUrl}/portfolio/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <div className="py-12 sm:py-20 md:py-24 px-6 sm:px-12 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/portfolio" 
            className="btn-pill-outline mb-12 text-xs font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            <span>Back to Case Studies</span>
          </Link>
          
          <header className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-0.5 rounded-full bg-[#edfce9] border border-[#c3eec0] text-[#003c33] font-mono text-xs uppercase tracking-wider font-semibold">
                {project.category}
              </span>
              <span className="text-[#93939f] text-xs" aria-hidden="true">•</span>
              <span className="text-[#616161] text-xs font-mono uppercase tracking-wider font-medium">
                {project.clientIndustry}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal font-display text-[#17171c] tracking-tight mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-[#616161] text-lg md:text-xl font-sans max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Hero Photo Card */}
          <div className="p-3 rounded-[22px] overflow-hidden mb-16 sm:mb-20 bg-[#eeece7] border border-[#e5e7eb] shadow-sm">
            <div className="relative aspect-video rounded-[16px] overflow-hidden">
              <Image 
                src={project.image} 
                alt={`Detailed case study preview for ${project.title}`} 
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-10">
              <section aria-labelledby="challenge-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
                <span className="text-xs uppercase tracking-widest text-[#003c33] font-mono font-semibold block mb-2">01 / The Challenge</span>
                <h2 id="challenge-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] mb-4 tracking-tight">
                  Identifying the Commercial Problem
                </h2>
                <p className="text-[#616161] text-base md:text-lg font-sans leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              <section aria-labelledby="solution-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
                <span className="text-xs uppercase tracking-widest text-[#003c33] font-mono font-semibold block mb-2">02 / Strategic Solution</span>
                <h2 id="solution-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] mb-4 tracking-tight">
                  Custom Strategy &amp; Execution
                </h2>
                <p className="text-[#616161] text-base md:text-lg font-sans leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section aria-labelledby="deliverables-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
                <span className="text-xs uppercase tracking-widest text-[#17171c] font-mono font-semibold block mb-2">03 / Scope Delivered</span>
                <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] mb-6 tracking-tight">
                  Delivered Capabilities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb] font-sans text-sm text-[#212121]">
                      <CheckCircle2 className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            
            <aside className="lg:col-span-4 space-y-6" aria-label="Project statistics and outcomes">
              <div className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb]">
                <h3 className="text-[#17171c] font-bold font-display text-xl mb-6 tracking-tight">
                  Verified Outcomes
                </h3>
                <ul className="space-y-6">
                  {project.metrics.map((m) => (
                    <li key={m.label} className="border-b border-[#d9d9dd] pb-4 last:border-b-0 last:pb-0">
                      <div className="text-4xl font-bold font-display text-[#17171c] mb-1">{m.value}</div>
                      <div className="text-[#616161] text-xs font-mono uppercase tracking-widest font-medium">{m.label}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-[16px] bg-[#003c33] text-white text-center space-y-5">
                <h3 className="text-white font-bold font-display text-lg tracking-tight">
                  Want Similar Results for Your Business?
                </h3>
                <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans leading-relaxed">
                  Let&apos;s discuss how a custom redesign, faster load speeds, or Google SEO can generate more qualified inquiries for your company.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-white-pill w-full text-xs font-medium py-3 inline-flex items-center justify-center gap-2"
                >
                  <span>Schedule Free Strategy Call</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              <div className="p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#003c33] font-mono text-xs uppercase tracking-widest font-semibold">
                    Follow Studio Drops
                  </span>
                  <span className="text-[11px] text-[#75758a] font-sans">Live UI &amp; Insights</span>
                </div>
                <p className="text-[#616161] text-xs font-sans leading-relaxed">
                  We publish ongoing case study breakdowns, UI animations, and design assets across our official profiles:
                </p>
                <SocialIconButtonRow 
                  className="flex gap-2.5 pt-1"
                  buttonClassName="size-10 min-h-[40px] min-w-[40px] rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] hover:border-[#ff7759] hover:text-[#ff7759] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7759]"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
