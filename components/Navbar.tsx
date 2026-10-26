"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProposalDialog from "@/components/ProposalDialog";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "About Agency", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-9 sm:top-9 inset-x-0 w-full z-[100] px-4 sm:px-8 pointer-events-none">
      <nav 
        aria-label="Main Navigation" 
        className="pointer-events-auto max-w-6xl mx-auto px-5 sm:px-7 h-16 sm:h-18 flex justify-between items-center rounded-full bg-white/95 backdrop-blur-xl border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-[background-color,border-color,box-shadow] duration-250 ease-[var(--ease-out)]"
      >
        <Link 
          href="/" 
          prefetch={false}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-full px-1 py-1 transition-opacity duration-150 hover:opacity-85"
          aria-label="Creative Realm Homepage"
        >
          <BrandLogo variant="default" size="md" />
        </Link>
        
        <div className="hidden md:flex gap-0.5 lg:gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 lg:px-4 py-2 rounded-full font-sans text-xs font-medium transition-[background-color,color] duration-150 ease-[var(--ease-out)] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] ${
                  isActive 
                    ? "bg-[#eeece7] text-[#17171c] font-semibold" 
                    : "text-[#616161] hover:text-[#17171c] hover:bg-[#f5f5f5]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <ProposalDialog>
            <button 
              type="button"
              aria-label="Start a Project: Inquire with Creative Realm"
              className="btn-primary hidden sm:inline-flex text-xs py-2.5 px-5 font-medium cursor-pointer"
            >
              <span>Start a Project</span>
            </button>
          </ProposalDialog>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="md:hidden text-[#17171c] p-2.5 size-11 min-h-[44px] min-w-[44px] rounded-full bg-[#f4f4f4] border border-[#e5e7eb] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-95 cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu size={20} aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white border-l border-[#e5e7eb] text-[#212121] w-full sm:max-w-md p-8 flex flex-col justify-between">
              <div className="flex flex-col gap-8 pt-8">
                <SheetHeader className="text-left">
                  <SheetTitle className="sr-only">
                    Creative Realm Navigation
                  </SheetTitle>
                  <Link href="/" onClick={() => setIsOpen(false)} className="inline-block py-1">
                    <BrandLogo variant="default" size="md" />
                  </Link>
                </SheetHeader>

                <nav aria-label="Mobile Navigation" className="flex flex-col gap-4 mt-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        prefetch={false}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`text-xl font-medium font-display tracking-tight transition-colors py-1.5 border-b border-[#f0f0f0] ${
                          isActive ? "text-[#ff7759] font-semibold" : "text-[#212121] hover:text-[#ff7759]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-8 border-t border-[#e5e7eb] flex flex-col gap-4">
                <ProposalDialog triggerClassName="w-full text-center text-xs font-medium block">
                  <button 
                    type="button" 
                    className="btn-primary w-full min-h-[44px] text-xs font-medium cursor-pointer"
                  >
                    Request Project Proposal
                  </button>
                </ProposalDialog>

                <div className="flex flex-wrap gap-4 text-[#75758a] font-sans text-xs pt-2">
                  <a href="mailto:creativerealmdesignstudio@gmail.com" className="hover:text-[#17171c] min-h-[44px] flex items-center">
                    creativerealmdesignstudio@gmail.com
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
