"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    text: "Ikon Sports delivered an excellent pickleball court for our club. The quality, finishing and professionalism were outstanding. Highly recommended!",
    name: "Rohit Mehta",
    role: "Club Owner, Jaipur",
    avatar: "/player1.png",
  },
  {
    text: "They handled our school's multi-sport court end to end — base work, surfacing, fencing and lighting. Delivered on schedule and the finish still looks new.",
    name: "Priya Sharma",
    role: "Principal, Jaipur",
    avatar: "/player1.png",
  },
  {
    text: "Great team to work with. Clear estimate, no surprises on cost, and the surface quality on our tennis courts has held up beautifully through two monsoons.",
    name: "Arjun Nair",
    role: "Facility Head, Pune",
    avatar: "/player1.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  return (
    <>
      <div className="mx-auto mt-7 max-w-[680px] rounded-xl bg-white p-5 md:p-7">
        <div className="flex items-start gap-3 md:gap-5">
          <Quote className="h-8 w-8 shrink-0 rotate-180 fill-[#8CC63F] text-[#8CC63F]" />
          <p className="min-h-[60px] text-[13.5px] leading-relaxed text-[#33414F] md:min-h-[44px] md:text-[14px]">
            {review.text}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-3 md:ml-12">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#EDF1F4]">
            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
          </span>
          <div>
            <p className="text-[14px] font-bold text-[#0F2233]">{review.name}</p>
            <p className="text-[12px] text-[#6B7785]">{review.role}</p>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#FFB400] text-[#FFB400]" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {REVIEWS.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setActive(index)}
            aria-label={`Show review ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === active ? "w-5 bg-[#8CC63F]" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </>
  );
}
