"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-2xl mb-4 p-5 sm:p-6 bg-white border border-[#e5e7eb] shadow-xs hover:border-[#17171c] transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)]",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 text-left font-bold font-display tracking-tight text-[#17171c] text-base sm:text-lg transition-[color,opacity] duration-150 ease-[var(--ease-out)] outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-xl cursor-pointer [&[data-state=open]>div>svg]:rotate-180",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <div className="size-8 rounded-full bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0">
          <ChevronDownIcon className="pointer-events-none size-4 transition-transform duration-200 ease-[var(--ease-out)]" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-4 pb-1 text-[#616161] font-sans leading-relaxed", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
