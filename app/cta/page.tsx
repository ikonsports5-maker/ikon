import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Building2,
  ArrowRight,
  Trophy,
  Layers,
  Users,
  Truck,
  ShieldCheck,
  Globe,
  CircleCheck,
  MessageSquare,
  ClipboardList,
  PencilRuler,
  HardHat,
  Lightbulb,
  Ruler,
} from "lucide-react";

import SiteHeader from "./_components/SiteHeader";
import QuoteForm from "./_components/QuoteForm";
import FaqList from "./_components/FaqList";
import ProjectsCarousel from "./_components/ProjectsCarousel";
import Testimonials from "./_components/Testimonials";
import WhatsAppIcon from "./_components/WhatsAppIcon";
import { PHONE, whatsappLink } from "./_components/constants";

export const metadata: Metadata = {
  title: "Ikon Sports — Build Your Dream Sports Court",
  description:
    "Turnkey construction for Pickleball, Tennis, Basketball & Multi-Sport Courts across India.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TRUST = [
  { icon: ShieldCheck, label: "ITF Approved\nSurface Systems" },
  { icon: HardHat, label: "Turnkey\nExecution" },
  { icon: Lightbulb, label: "Premium\nLED Lighting" },
  { icon: Globe, label: "Pan-India\nService" },
];

const STATS = [
  { icon: Ruler, value: "50+", label: "Courts\nDelivered" },
  { icon: Building2, value: "20+", label: "Cities in\nIndia" },
  { icon: ShieldCheck, value: "100%", label: "Turnkey\nSolutions" },
  { icon: Users, value: "5+", label: "Years of\nExperience" },
];

const PROCESS = [
  {
    no: "01",
    icon: MessageSquare,
    title: "Consultation",
    text: "Understand your needs and site requirements.",
  },
  {
    no: "02",
    icon: ClipboardList,
    title: "Site Assessment",
    text: "On-site visit and feasibility evaluation.",
  },
  {
    no: "03",
    icon: PencilRuler,
    title: "Design & Estimation",
    text: "Custom design and detailed quotation.",
  },
  {
    no: "04",
    icon: HardHat,
    title: "Construction",
    text: "Professional execution with quality materials.",
  },
  {
    no: "05",
    icon: CircleCheck,
    title: "Final Installation",
    text: "Complete setup with testing and handover.",
  },
];

const SERVICES = [
  {
    title: "Pickleball Courts",
    text: "Professional pickleball court construction with ITF approved acrylic surface.",
    img: "/pickle.jpeg",
    href: "/services/pickleball-courts",
  },
  {
    title: "Tennis Courts",
    text: "World-class tennis court construction for clubs, schools and residences.",
    img: "/bg-3.jpeg",
    href: "/services/tennis-courts",
  },
  {
    title: "Basketball Courts",
    text: "Durable and high-performance basketball court solutions.",
    img: "/basketball.jpeg",
    href: "/services/basketball-courts",
  },
  {
    title: "Multi-Sport Courts",
    text: "Custom sports facilities for schools, communities and commercial spaces.",
    img: "/bg-1.jpeg",
    href: "/services",
  },
];

const WHY = [
  { icon: Trophy, label: "Proven\nExpertise" },
  { icon: Layers, label: "Premium\nMaterials" },
  { icon: Users, label: "Dedicated\nProject Support" },
  { icon: Truck, label: "On-Time\nDelivery" },
  { icon: ShieldCheck, label: "Long-Lasting\nPerformance" },
  { icon: Globe, label: "Pan-India\nExecution" },
];

const WA_TEXT = "Hello Ikon Sports, I'd like a quote for a sports court.";

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.22em] ${
        light ? "text-[#A9D95B]" : "text-[#7FB93B]"
      }`}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CtaPage() {
  return (
    <main className="bg-white pb-16 font-sans md:pb-0">
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section id="quote" className="relative isolate overflow-hidden">
        <Image src="/bg-2.jpeg" alt="Sports court" fill priority className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(4,16,26,0.92)_0%,rgba(4,16,26,0.72)_45%,rgba(4,16,26,0.55)_100%)] md:bg-[linear-gradient(100deg,rgba(7,24,40,0.94)_0%,rgba(7,24,40,0.80)_38%,rgba(7,24,40,0.62)_70%,rgba(7,24,40,0.72)_100%)]" />
        <div className="absolute inset-0 -z-10 hidden bg-[#071828]/35 md:block" />

        <div className="mx-auto max-w-[1200px] px-4 pb-10 pt-10 sm:px-6 md:px-8 md:pb-4 md:pt-4">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_330px] md:items-center md:gap-10 lg:grid-cols-[1fr_360px]">
            <div className="pt-2 md:pt-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/80 sm:text-[11px] md:text-[12px] md:tracking-[0.3em]">
                Sports Court Construction Company
              </p>
              <h1 className="mt-4 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[46px] md:mt-5 md:text-[48px] md:leading-[1.1] lg:text-[54px]">
                Build Your
                <br />
                Dream
                <br />
                <span className="text-[#8CC63F]">Sports Court</span>
              </h1>
              <p className="mt-5 max-w-[360px] text-[14px] leading-relaxed text-white/85 sm:text-[15px] md:mt-6 md:max-w-[335px] md:text-[14px] md:leading-[1.65]">
                “Turnkey construction for Pickleball, Tennis, Basketball &amp; Multi-Sport Courts
                across India.”
              </p>
            </div>

            <div className="md:pt-0">
              <QuoteForm source="Home hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP (mobile) ============ */}
      <section className="bg-white px-4 py-6 md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="h-7 w-7 text-[#0F2233]" strokeWidth={1.4} />
              <p className="mt-2 whitespace-pre-line text-[10px] font-semibold leading-tight text-[#0F2233]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#08211B]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-4 px-4 py-6 sm:px-6 md:py-7">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={value}
              className={`flex flex-col items-center gap-1 px-1 text-center md:flex-row md:justify-center md:gap-4 md:text-left ${
                i !== 0 ? "md:border-l md:border-white/15" : ""
              }`}
            >
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 md:flex">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[22px] font-extrabold leading-none text-white md:text-[20px]">
                  {value}
                </p>
                <p className="mt-1.5 whitespace-pre-line text-[10px] font-medium leading-tight text-white/75 md:text-[11px]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="bg-white px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-[1200px]">
          <ProjectsCarousel />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#F2F7FA] px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-[1100px]">
          <div className="md:text-center">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-2 text-[24px] font-extrabold leading-tight tracking-tight text-[#0F2233] md:text-[30px]">
              From Consultation to Completion
            </h2>
          </div>

          <div className="relative mt-10 hidden md:block">
            <div className="absolute left-[10%] right-[10%] top-6 border-t border-dashed border-[#C6D3DD]" />
            <div className="relative grid grid-cols-5 gap-4">
              {PROCESS.map(({ no, icon: Icon, title, text }) => (
                <div key={no} className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F2233] text-[13px] font-bold text-white">
                      {no}
                    </span>
                    <Icon className="h-5 w-5 text-[#0F2233]" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 text-[13px] font-bold text-[#0F2233]">{title}</h3>
                  <p className="mt-1.5 max-w-[170px] text-[11.5px] leading-snug text-[#67737F]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 md:hidden">
            <div className="absolute bottom-6 left-[23px] top-6 border-l border-dashed border-[#9ECB5F]" />
            <div className="space-y-6">
              {PROCESS.map(({ no, icon: Icon, title, text }) => (
                <div key={no} className="relative flex items-start gap-4">
                  <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0F2233] text-[13px] font-bold text-white">
                    {no}
                  </span>
                  <Icon className="mt-3 h-5 w-5 shrink-0 text-[#0F2233]" strokeWidth={1.6} />
                  <div className="pt-1.5">
                    <h3 className="text-[14px] font-bold text-[#0F2233]">{title}</h3>
                    <p className="mt-1 text-[12px] leading-snug text-[#67737F]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="mt-2 max-w-[280px] text-[24px] font-extrabold leading-tight tracking-tight text-[#0F2233] md:max-w-none md:text-[30px]">
                Complete Sports Court Solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-1 flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#0F2233] transition hover:text-[#8CC63F] md:mt-8"
            >
              View All <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-xl border border-[#EDF1F4] bg-white shadow-[0_4px_18px_rgba(15,34,51,0.07)] transition hover:shadow-[0_10px_28px_rgba(15,34,51,0.14)]"
              >
                <div className="relative h-[110px] w-full overflow-hidden md:h-[120px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-3.5 py-4">
                  <h3 className="text-[14px] font-bold text-[#0F2233]">{service.title}</h3>
                  <p className="mt-2 text-[11.5px] leading-snug text-[#67737F]">{service.text}</p>
                  <span className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-[#0F2233] transition group-hover:text-[#8CC63F]">
                    Know More <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FAQ + TESTIMONIALS (order swaps on mobile) ======= */}
      <div className="flex flex-col">
        <section className="order-2 bg-white px-4 py-10 sm:px-6 md:order-1 md:py-14">
          <div className="mx-auto max-w-[1000px]">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="mt-2 max-w-[260px] text-[24px] font-extrabold leading-tight tracking-tight text-[#0F2233] md:max-w-none md:text-[30px]">
              Got Questions? We’ve Got Answers.
            </h2>
            <FaqList />
          </div>
        </section>

        <section className="order-1 bg-[#06261E] px-4 py-10 sm:px-6 md:order-2 md:py-14">
          <div className="mx-auto max-w-[1000px]">
            <div className="md:text-center">
              <SectionLabel light>What Our Clients Say</SectionLabel>
              <h2 className="mt-2 text-[24px] font-extrabold leading-tight tracking-tight text-white md:text-[30px]">
                Trusted by Leading Institutions
              </h2>
            </div>
            <Testimonials />
          </div>
        </section>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-[#06261E] px-4 pb-12 pt-4 sm:px-6 md:pb-14 md:pt-10">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel light>Why Choose Ikon Sports</SectionLabel>
          <h2 className="mt-2 max-w-[260px] text-[24px] font-extrabold leading-tight tracking-tight text-white md:max-w-none md:text-[30px]">
            Built on Quality. Driven by Trust.
          </h2>

          <div className="mt-8 grid grid-cols-3 gap-y-9 md:grid-cols-6 md:gap-y-0">
            {WHY.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center px-2 text-center ${
                  i !== 0 ? "md:border-l md:border-white/15" : ""
                }`}
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.3} />
                <p className="mt-3 whitespace-pre-line text-[11px] font-semibold leading-tight text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 md:py-16">
        <Image src="/bg-3.jpeg" alt="" fill className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[rgba(4,20,16,0.78)]" />

        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel light>Let’s Build Together</SectionLabel>
          <h2 className="mt-3 text-[25px] font-extrabold leading-tight tracking-tight text-white md:text-[32px]">
            Ready to Start Your Sports Court Project?
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[13px] leading-relaxed text-white/85 md:text-[14px]">
            Get expert advice, site assessment and a detailed project estimate — FREE.
          </p>
          <a
            href="#quote"
            className="mx-auto mt-7 flex w-full max-w-[420px] items-center justify-center gap-2 rounded-lg bg-[#8CC63F] py-4 text-[15px] font-bold text-[#0B2A12] transition hover:bg-[#7cb333] md:max-w-[340px] md:py-3.5"
          >
            Get Free Project Quote <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          {/* desktop: call bar sits inside the image band */}
          <div className="mx-auto mt-4 hidden w-full max-w-[880px] grid-cols-2 gap-5 md:grid">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-md border border-[#8CE86B] bg-[#22C55E] py-3 text-[14px] font-semibold text-white transition hover:bg-[#1eb355]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} /> Call Now
            </a>
            <a
              href={whatsappLink(WA_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-[#8CE86B] bg-[#22C55E] py-3 text-[14px] font-semibold text-white transition hover:bg-[#1eb355]"
            >
              <WhatsAppIcon className="h-4 w-4 text-white" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= STICKY CALL BAR (mobile) ================= */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 bg-white px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.10)] md:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 rounded-md bg-[#22C55E] py-3 text-[14px] font-semibold text-white"
        >
          <Phone className="h-4 w-4" strokeWidth={2.2} /> Call Now
        </a>
        <a
          href={whatsappLink(WA_TEXT)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-md bg-[#22C55E] py-3 text-[14px] font-semibold text-white"
        >
          <WhatsAppIcon className="h-4 w-4 text-white" /> WhatsApp
        </a>
      </div>
    </main>
  );
}
