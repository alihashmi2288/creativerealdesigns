"use client";

import { useState, useId } from "react";
import { CheckCircle, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameHintId = useId();
  const nameErrorId = useId();
  const emailHintId = useId();
  const emailErrorId = useId();
  const phoneOrSiteHintId = useId();
  const messageHintId = useId();
  const messageErrorId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div
        className="contact-form-card p-12 text-center rounded-[22px] border border-[#c3eec0] bg-[#edfce9]/30 animate-in fade-in-0 zoom-in-95 duration-250 ease-[var(--ease-out)]"
        role="status"
        aria-live="polite"
      >
        <CheckCircle
          className="w-14 h-14 text-[#003c33] mx-auto mb-5 animate-in zoom-in-90 duration-300 ease-[var(--ease-out)]"
          aria-hidden="true"
        />
        <h3 className="text-3xl font-bold font-display text-[#17171c] mb-3">
          Strategy Call Request Received
        </h3>
        <p className="text-[#616161] font-sans text-base mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A senior design and technical lead will review your website details and reply within 24 hours with available consultation slots.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary text-xs uppercase tracking-wider px-8 py-3 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-card p-8 sm:p-10 space-y-6 rounded-[22px] border border-[#d9d9dd] bg-white shadow-sm"
      aria-label="Free Strategy Call and Project Proposal Form"
      noValidate={false}
    >
      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-6 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2 text-[#003c33] font-mono text-xs font-semibold">
          <Clock className="w-4 h-4 flex-shrink-0 text-[#003c33]" aria-hidden="true" />
          <span>24-Hour Guaranteed Reply</span>
        </div>
        <div className="flex items-center gap-2 text-[#003c33] font-mono text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#003c33]" aria-hidden="true" />
          <span>Mutual NDA Available</span>
        </div>
        <div className="flex items-center gap-2 text-[#003c33] font-mono text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#003c33]" aria-hidden="true" />
          <span>Zero Sales Pressure</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="contact-name" className="text-xs font-semibold text-[#17171c] font-sans">
            Your Full Name <span className="text-[#ff7759]" aria-hidden="true">*</span>
          </label>
          <span id={nameHintId} className="form-hint">
            Enter your first and last name
          </span>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="e.g. Eleanor Vance"
            aria-describedby={`${nameHintId} ${nameErrorId}`}
            className="form-input"
          />
          <div id={nameErrorId} className="field-error" aria-live="polite">
            <span aria-hidden="true">❌</span>
            <span>Please enter your name (minimum 2 characters).</span>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-email" className="text-xs font-semibold text-[#17171c] font-sans">
            Work Email <span className="text-[#ff7759]" aria-hidden="true">*</span>
          </label>
          <span id={emailHintId} className="form-hint">
            Format: you@company.com
          </span>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="eleanor@company.com"
            aria-describedby={`${emailHintId} ${emailErrorId}`}
            className="form-input"
          />
          <div id={emailErrorId} className="field-error" aria-live="polite">
            <span aria-hidden="true">❌</span>
            <span>Please provide a valid work email address.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="contact-phone-website" className="text-xs font-semibold text-[#17171c] font-sans">
            Website or Company Domain <span className="text-[#616161] font-normal">(Optional)</span>
          </label>
          <span id={phoneOrSiteHintId} className="form-hint">
            e.g. company.com
          </span>
          <input
            id="contact-phone-website"
            name="website"
            type="text"
            placeholder="company.com"
            aria-describedby={phoneOrSiteHintId}
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-service" className="text-xs font-semibold text-[#17171c] font-sans">
            Primary Service Needed
          </label>
          <span className="form-hint">Select your main project objective</span>
          <select
            id="contact-service"
            name="service"
            defaultValue="Full Design, Build & SEO Package"
            className="form-input cursor-pointer"
          >
            <option value="Bespoke Website Design">Bespoke Website Design (Figma UI/UX)</option>
            <option value="Custom High-Speed Web Development">Custom High-Speed Web Development (Sub-Second Speed)</option>
            <option value="Google Search & SEO Growth">Google Search &amp; Organic SEO Growth</option>
            <option value="Full Design, Build & SEO Package">Full Design, Build &amp; Google SEO Package</option>
            <option value="Website Speed & Conversion Review">Website Speed &amp; Conversion Review</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="contact-budget" className="text-xs font-semibold text-[#17171c] font-sans">
            Anticipated Investment Range
          </label>
          <span className="form-hint">Helps us recommend the best roadmap</span>
          <select
            id="contact-budget"
            name="budget"
            defaultValue="$5,000 - $10,000"
            className="form-input cursor-pointer"
          >
            <option value="$3,000 - $5,000">$3,000 – $5,000 (Starter Showcase)</option>
            <option value="$5,000 - $10,000">$5,000 – $10,000 (Growth Engine)</option>
            <option value="$10,000+">$10,000+ (Scale &amp; Custom Platform)</option>
            <option value="Undecided">Need Advice During Strategy Call</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="contact-timeline" className="text-xs font-semibold text-[#17171c] font-sans">
            Target Launch Window
          </label>
          <span className="form-hint">When do you need to go live?</span>
          <select
            id="contact-timeline"
            name="timeline"
            defaultValue="1 to 2 Months"
            className="form-input cursor-pointer"
          >
            <option value="Within 3 weeks">Fast-Track (Within 3 weeks)</option>
            <option value="1 to 2 Months">Standard (4 to 6 weeks)</option>
            <option value="Flexible">Flexible / Strategic Planning</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message" className="text-xs font-semibold text-[#17171c] font-sans">
          Project Overview <span className="text-[#ff7759]" aria-hidden="true">*</span>
        </label>
        <span id={messageHintId} className="form-hint">
          Share your current website URL (if any), main challenges, and target business goals
        </span>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          minLength={10}
          placeholder="Tell us about your business, what is holding back your current website, and what commercial goals you want to achieve..."
          aria-describedby={`${messageHintId} ${messageErrorId}`}
          className="form-input resize-none"
        />
        <div id={messageErrorId} className="field-error" aria-live="polite">
          <span aria-hidden="true">❌</span>
          <span>Please provide a brief description (at least 10 characters).</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5 text-xs font-semibold inline-flex items-center justify-center cursor-pointer"
        >
          <span>{isSubmitting ? "Sending Request..." : "Schedule Strategy Call & Get Proposal"}</span>
        </button>
        <p className="text-center text-[#616161] text-xs font-sans mt-3">
          100% private. Your details are never shared or used for unsolicited marketing.
        </p>
      </div>
    </form>
  );
}
