import React from "react";
import { SOCIAL_LINKS, type SocialLink } from "@/lib/socials";

export function SocialIcon({ id, className = "size-4" }: { id: SocialLink["id"]; className?: string }) {
  switch (id) {
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Circular icon button list for footers and mobile sheets
 */
export function SocialIconButtonRow({
  className = "flex gap-3",
  buttonClassName,
}: {
  className?: string;
  buttonClassName?: string;
}) {
  return (
    <div className={className} role="list" aria-label="Social media links">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          aria-label={item.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className={
            buttonClassName ||
            "size-11 min-h-[44px] min-w-[44px] rounded-full bg-[#22222a] border border-[#33333d] flex items-center justify-center text-white hover:border-[#ff7759] hover:text-[#ff7759] transition-[border-color,color,background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7759]"
          }
        >
          <SocialIcon id={item.id} className="size-4" />
        </a>
      ))}
    </div>
  );
}

/**
 * Rich cards list for Contact, About, and Case Study sidebars
 */
export function SocialCardGrid({
  className = "grid grid-cols-1 sm:grid-cols-2 gap-3",
}: {
  className?: string;
}) {
  return (
    <div className={className} role="list" aria-label="Official Social Channels">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          className="group flex items-center justify-between p-4 rounded-[14px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#ff7759] hover:bg-white transition-all duration-150 ease-[var(--ease-out)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c]"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] group-hover:text-[#ff7759] group-hover:border-[#ff7759]/40 flex-shrink-0 transition-colors">
              <SocialIcon id={item.id} className="size-4" />
            </div>
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[#17171c] font-bold font-display text-sm truncate">
                  {item.name}
                </span>
              </div>
              <p className="text-[#616161] font-mono text-xs truncate">
                {item.handle}
              </p>
            </div>
          </div>
          <span
            className="text-xs text-[#93939f] group-hover:text-[#ff7759] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all font-mono pl-2"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}
