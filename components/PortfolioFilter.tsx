"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface PortfolioFilterProps {
  projects: Project[];
  categories: readonly string[];
}

export default function PortfolioFilter({ projects, categories }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 p-1 rounded-full bg-[#fafaf9] border border-[#e5e7eb] mb-12 sm:mb-16 w-fit" aria-label="Filter case studies by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`min-h-[44px] px-5 py-2.5 rounded-full flex items-center justify-center transition-[background-color,color,border-color,transform] duration-160 ease-[var(--ease-out)] active:scale-[0.97] font-medium font-sans text-xs cursor-pointer border ${
              activeCategory === cat
                ? "bg-[#17171c] text-white border-[#17171c]"
                : "bg-transparent text-[#616161] border-transparent hover:text-[#17171c] hover:bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 px-6 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb] max-w-xl mx-auto my-12 animate-in fade-in-0 zoom-in-95 duration-250 ease-[var(--ease-out)]">
          <h3 className="text-2xl font-bold font-display text-[#17171c] tracking-tight mb-3">
            No Projects in &ldquo;{activeCategory}&rdquo;
          </h3>
          <p className="text-[#616161] font-sans text-sm mb-6 leading-relaxed">
            We have not published a public case study under this filter yet. Explore our other client deliverables or view all projects.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="btn-primary min-h-[44px] text-xs px-6 py-2.5 cursor-pointer"
          >
            Reset to All Projects
          </button>
        </div>
      ) : (
        <div id="portfolio-grid" className="grid grid-cols-1 gap-14 sm:gap-20 md:gap-24">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="group transition-opacity duration-250 ease-[var(--ease-out)] animate-in fade-in-0"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-[22px] relative aspect-[16/10] bg-[#eeece7] border border-[#d9d9dd] p-3 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                    <Image
                      src={project.image}
                      alt={`Mockup and visual interface showcase for ${project.title} (${project.category})`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-[var(--ease-out)]"
                      loading="lazy"
                    />
                    <Link
                      href={`/portfolio/${project.slug}`}
                      aria-label={`View ${project.title} case study and performance breakdown`}
                      className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 ease-[var(--ease-out)] flex items-center justify-center backdrop-blur-xs rounded-[16px]"
                    >
                      <div className="w-16 h-16 rounded-full bg-white text-[#17171c] flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-250 ease-[var(--ease-out)] shadow-lg" aria-hidden="true">
                        <ArrowUpRight size={32} />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#edfce9] border border-[#c3eec0] text-[#003c33] font-mono text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[#93939f] text-xs" aria-hidden="true">•</span>
                    <span className="text-[#555562] font-mono text-xs uppercase tracking-wider">{project.clientIndustry}</span>
                  </div>

                  <h3 id={`project-title-${project.id}`} className="text-3xl md:text-5xl font-bold font-display text-[#17171c] tracking-tight mb-4 group-hover:text-[#003c33] transition-colors">
                    <Link href={`/portfolio/${project.slug}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-[#616161] text-base md:text-lg mb-6 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8 p-5 rounded-[12px] bg-[#eeece7] border border-[#e5e7eb]">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold font-display text-[#17171c]">{m.value}</div>
                        <div className="text-[#52525b] text-xs font-mono uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white border border-[#d9d9dd] text-[#212121] text-xs font-mono">{tag}</span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    aria-label={`Read full case study for ${project.title}`}
                    className="btn-primary text-xs inline-flex items-center gap-2 font-medium"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
