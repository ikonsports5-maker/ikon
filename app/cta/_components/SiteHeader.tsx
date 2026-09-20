"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV, PHONE, PHONE_DISPLAY, whatsappLink } from "./constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.jpg"
            alt="Ikon Sports"
            width={160}
            height={160}
            priority
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#33414F] transition hover:text-[#8CC63F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`tel:${PHONE}`} className="flex flex-col items-center gap-1" title={PHONE_DISPLAY}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F2233]">
              <Phone className="h-4 w-4 text-white" strokeWidth={2} />
            </span>
            <span className="text-[9px] font-semibold text-[#33414F]">Call Now</span>
          </a>
          <a
            href={whatsappLink("Hello Ikon Sports, I'd like to know more about your courts.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
              <WhatsAppIcon className="h-4 w-4 text-white" />
            </span>
            <span className="text-[9px] font-semibold text-[#33414F]">WhatsApp</span>
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="ml-1"
          >
            {open ? (
              <X className="h-6 w-6 text-[#0F2233]" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6 text-[#0F2233]" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* slide-down menu */}
      <div
        className={`grid overflow-hidden border-t border-black/5 bg-white transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#F0F3F6] py-3 text-[14px] font-medium text-[#33414F] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-3 rounded-md bg-[#8CC63F] py-3 text-center text-[14px] font-bold text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
