"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How much does a pickleball court cost?",
    a: "Cost depends on the surface system, site condition and add-ons like fencing and lighting. A standard acrylic pickleball court typically starts from ₹6–8 lakh, turnkey. Share your site details and we'll send an itemised estimate.",
  },
  {
    q: "How much space is required?",
    a: "A regulation pickleball court is 20 × 44 ft of playing area, but we recommend a total footprint of at least 30 × 60 ft to allow safe run-off space around the lines.",
  },
  {
    q: "How long does construction take?",
    a: "A single court usually takes 3–5 weeks from site handover, depending on the base work required and weather. Multi-court projects run in parallel and are scheduled after the site assessment.",
  },
  {
    q: "Do you provide fencing and lighting?",
    a: "Yes. We deliver turnkey projects — base preparation, surfacing, line marking, fencing, nets, and LED floodlighting designed for glare-free evening play.",
  },
  {
    q: "Do you construct outside Jaipur?",
    a: "Yes. We execute projects pan-India and have delivered courts across 20+ cities. Our team travels to site for assessment and supervises the full build.",
  },
  {
    q: "Can you build multiple courts?",
    a: "Absolutely. We regularly build multi-court facilities for schools, universities, clubs and academies, including mixed-sport layouts sharing a single base.",
  },
];

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-6 space-y-2.5">
      {FAQS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-lg bg-[#F4F6F8]">
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
            >
              <span className="text-[13px] font-medium text-[#33414F]">{item.q}</span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-[#8CC63F]" strokeWidth={2} />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-[#6B7785]" strokeWidth={2} />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-[12.5px] leading-relaxed text-[#67737F]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
