export interface SocialLink {
  id: "instagram" | "x" | "linkedin" | "facebook";
  name: string;
  handle: string;
  url: string;
  description: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@creativerealmdesign",
    url: "https://www.instagram.com/creativerealmdesign/",
    description: "Visual design drops, UI showcase, and creative explorations",
    ariaLabel: "Follow Creative Realm Designs on Instagram (@creativerealmdesign)",
  },
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@creativeRealm_",
    url: "https://x.com/creativeRealm_",
    description: "Daily studio thoughts, Next.js engineering notes, and design commentary",
    ariaLabel: "Follow Creative Realm Designs on X (@creativeRealm_)",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "creative-realm-designs",
    url: "https://www.linkedin.com/company/creative-realm-designs/",
    description: "Industry case studies, business insights, and commercial partnerships",
    ariaLabel: "Connect with Creative Realm Designs on LinkedIn",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "creativerealmdesign",
    url: "https://www.facebook.com/creativerealmdesign",
    description: "Company announcements, client work milestones, and community news",
    ariaLabel: "Follow Creative Realm Designs on Facebook",
  },
];

export const SOCIAL_URLS = SOCIAL_LINKS.map((s) => s.url);
