"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div className="bg-[#22222a] border border-[#33333d] p-3 rounded-lg w-full flex items-center justify-center gap-2 text-xs text-[#edfce9] font-medium animate-in fade-in-0 zoom-in-95 duration-200 ease-[var(--ease-out)]">
        <Check size={14} className="text-[#edfce9] animate-in zoom-in-90 duration-250 ease-[var(--ease-out)]" />
        <span>Thank you! You are subscribed.</span>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
      <label htmlFor="newsletter-email" className="sr-only">Email address for agency newsletter</label>
      <div className="relative flex items-center">
        <input 
          id="newsletter-email"
          name="email"
          type="email" 
          required
          autoComplete="email"
          placeholder="your.email@company.com" 
          className="w-full bg-[#22222a] border border-[#33333d] rounded-full pl-4 pr-24 py-3.5 text-xs text-white placeholder-[#75758a] focus:outline-none focus:border-[#ff7759] focus:ring-1 focus:ring-[#ff7759] transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)]" 
        />
        <button 
          type="submit" 
          aria-label="Join: Subscribe to newsletter"
          className="absolute right-1.5 top-1.5 bottom-1.5 px-4 min-h-[44px] bg-white text-[#17171c] hover:bg-[#eeece7] rounded-full text-xs font-semibold transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-95 cursor-pointer flex items-center justify-center"
        >
          <span>Join</span>
        </button>
      </div>
    </form>
  );
}
