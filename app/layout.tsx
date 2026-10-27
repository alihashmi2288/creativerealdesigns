import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { SOCIAL_URLS } from "@/lib/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#17171c",
  width: "device-width",
  initialScale: 1,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creativerealmdesigns.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Creative Realm Designs | Custom Fast Websites & Google SEO",
    template: "%s | Creative Realm Designs",
  },
  description: "We build custom, high-speed websites and Google SEO systems that turn visitors into booked client inquiries. Sub-second load times and 100% code ownership.",
  keywords: [
    "custom website design",
    "high speed web development",
    "Google SEO agency",
    "bespoke web design",
    "conversion web design",
    "mobile speed optimization",
    "Figma design studio",
    "organic search rankings",
    "fast business websites"
  ],
  authors: [{ name: "Creative Realm Designs", url: baseUrl }],
  creator: "Creative Realm Designs",
  publisher: "Creative Realm Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creative Realm Designs | Custom Fast Websites & Google SEO",
    description: "We build custom, high-speed websites and Google SEO systems that turn visitors into booked client inquiries. Sub-second load times and 100% code ownership.",
    url: baseUrl,
    siteName: "Creative Realm Designs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/clean-design.png",
        width: 1200,
        height: 630,
        alt: "Creative Realm Designs - Custom High-Speed Websites and Google SEO Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@creativeRealm_",
    creator: "@creativeRealm_",
    title: "Creative Realm Designs | Custom Fast Websites & Google SEO",
    description: "We build custom, high-speed websites and Google SEO systems that turn visitors into booked client inquiries. Sub-second load times and 100% code ownership.",
    images: ["/clean-design.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const agencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "DigitalAgency"],
      "@id": `${baseUrl}/#agency`,
      "name": "Creative Realm Designs",
      "url": baseUrl,
      "logo": `${baseUrl}/brand/creative-realm-logo.svg`,
      "image": `${baseUrl}/clean-design.png`,
      "description": "We build custom, high-speed websites and Google SEO systems that turn search visitors into booked client inquiries. Sub-second mobile load times and 100% full code ownership.",
      "email": "creativerealmdesignstudio@gmail.com",
      "sameAs": SOCIAL_URLS,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "creativerealmdesignstudio@gmail.com",
        "availableLanguage": ["English"]
      },
      "priceRange": "$3,200 - $11,500",
      "currenciesAccepted": "USD, GBP",
      "paymentAccepted": "Bank Transfer, Credit Card",
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Australia" }
      ],
      "knowsAbout": [
        "Custom Website Design",
        "High-Speed Web Development",
        "Google Search Engine Optimization",
        "Core Web Vitals Optimization",
        "Conversion Rate Optimization",
        "Figma UI/UX Design Systems"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Design & Google SEO Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Starter Website Package",
              "description": "Custom 5-page business website designed to load under 800ms on mobile and convert visitors into qualified inquiries."
            },
            "price": "3200",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Growth Package",
              "description": "Flagship 10-page custom website build with regional Google search optimization, interactive lead capture, and polished micro-animations."
            },
            "price": "5800",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom / Store Package",
              "description": "Bespoke e-commerce store or web platform with custom checkout, third-party integrations, and 90 days of dedicated post-launch support."
            },
            "price": "11500",
            "priceCurrency": "USD"
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="light" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Complete Studio Context" />
        <link rel="alternate" type="text/markdown" href="/pricing.md" title="Pricing Specification" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans bg-white text-[#212121] min-h-screen flex flex-col relative antialiased selection:bg-[#17171c] selection:text-white`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-6 focus:py-3 focus:bg-[#17171c] focus:text-white focus:font-medium focus:rounded-full">
          Skip to main content
        </a>

        {/* Global Announcement Bar */}
        <aside className="announcement-bar px-4 text-center z-50 text-xs text-white bg-black" aria-label="Announcement">
          <p className="flex items-center justify-center gap-2">
            <span>Now accepting select website design &amp; Google SEO projects for this quarter.</span>
            <Link href="/contact" className="underline underline-offset-2 hover:text-[#ff7759] transition-colors font-medium">
              Book a 20-min strategy call &rarr;
            </Link>
          </p>
        </aside>

        <CustomCursor />
        <TooltipProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
