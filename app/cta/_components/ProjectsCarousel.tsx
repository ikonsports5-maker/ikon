"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  { title: "PinkCity Pickle & Turf", place: "Jaipur, Rajasthan", img: "/bg-1.jpeg" },
  { title: "Riverside Tennis Courts", place: "Pune, Maharashtra", img: "/bg-2.jpeg" },
  { title: "Skyline Basketball Court", place: "Bangalore, Karnataka", img: "/bg-3.jpeg" },
  { title: "Greenfield Multi-Sport Arena", place: "Delhi NCR", img: "/bg-4.jpeg" },
  { title: "Lakeside Sports Complex", place: "Hyderabad, Telangana", img: "/bg-5.jpeg" },
];

const PER_VIEW = 3;
const PAGES = Math.max(1, PROJECTS.length - PER_VIEW + 1);

export default function ProjectsCarousel() {
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Mobile scrolls natively; desktop shifts a 3-up window.
  const go = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), PAGES - 1);
    setPage(clamped);
    const track = trackRef.current;
    if (track && window.matchMedia("(max-width: 767px)").matches) {
      const card = track.firstElementChild as HTMLElement | null;
      if (card) track.scrollTo({ left: clamped * (card.offsetWidth + 16), behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7FB93B]">
            Our Recent Projects
          </p>
          <h2 className="mt-2 text-[24px] font-extrabold tracking-tight text-[#0F2233] md:text-[30px]">
            Real Courts. Real Impact.
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Previous projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE3E9] text-[#0F2233] transition hover:bg-[#F3F6F9] disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            onClick={() => go(page + 1)}
            disabled={page === PAGES - 1}
            aria-label="Next projects"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE3E9] text-[#0F2233] transition hover:bg-[#F3F6F9] disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:gap-5 md:overflow-visible md:px-0 md:translate-x-[var(--tx)] md:transition-transform md:duration-500"
          style={{
            // one step = one card width ((100% - 2 gaps) / 3) + one 20px gap
            ["--tx" as string]: `calc(${-page} * ((100% - 40px) / 3 + 20px))`,
          }}
        >
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group relative h-[230px] w-[78%] shrink-0 snap-start overflow-hidden rounded-xl md:h-[250px] md:w-[calc((100%-40px)/3)]"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,18,14,0.88)_0%,rgba(4,18,14,0.55)_22%,rgba(4,18,14,0.05)_48%,transparent_70%)]" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <h3 className="text-[15px] font-bold text-white md:text-[16px]">{project.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-white/85">
                  <MapPin className="h-3.5 w-3.5 text-[#8CC63F]" strokeWidth={2} />
                  {project.place}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: PAGES }).map((_, index) => (
          <button
            key={index}
            onClick={() => go(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === page ? "w-5 bg-[#8CC63F]" : "w-2 bg-[#D5DCE3]"
            }`}
          />
        ))}
      </div>
    </>
  );
}
