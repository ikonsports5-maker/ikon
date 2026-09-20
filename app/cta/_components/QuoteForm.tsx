"use client";

import { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  LayoutGrid,
  Building2,
  SquarePen,
  ChevronDown,
  Lock,
  ArrowRight,
  Loader2,
  CircleCheck,
} from "lucide-react";
import { whatsappLink } from "./constants";

const CITIES = [
  "Jaipur",
  "Delhi NCR",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Other",
];

const COURTS = [
  "Pickleball Court",
  "Tennis Court",
  "Basketball Court",
  "Badminton Court",
  "Cricket Turf",
  "Football Turf",
  "Padel Court",
  "Squash Court",
  "Multi-Sport Court",
];

const PROJECT_TYPES = [
  "Residential",
  "School / University",
  "Club / Resort",
  "Commercial / Academy",
  "Government",
];

const FIELD_BOX =
  "flex items-center gap-3 rounded-lg border border-[#E3E7EC] bg-[#FBFCFD] px-4 py-3 focus-within:border-[#8CC63F] md:gap-2.5 md:px-3.5 md:py-2.5";
const INPUT =
  "w-full bg-transparent text-[14px] leading-tight text-[#0F2233] outline-none placeholder:text-[#9AA4B0] md:text-[12.5px]";
const ICON = "h-[18px] w-[18px] shrink-0 text-[#9AA4B0] md:h-4 md:w-4";

const EMPTY = {
  name: "",
  phone: "",
  city: "",
  court: "",
  projectType: "",
  message: "",
  company: "", // honeypot
};

export default function QuoteForm({ source = "Home hero" }: { source?: string }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const set = (key: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const result = await response.json().catch(() => ({ ok: false }));

      // Client-side validation errors are worth showing; delivery failures are
      // not, because the WhatsApp hand-off below still captures the lead.
      if (response.status === 400) {
        setError(result.error || "Please check your details.");
        setStatus("idle");
        return;
      }
      if (!response.ok || !result.ok) {
        console.error("[quote] lead email failed:", result.error);
      }

      setStatus("sent");

      // Also hand the enquiry to WhatsApp so it lands in both places.
      const lines = [
        "Hello Ikon Sports, I'd like a project estimate.",
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.city && `City: ${form.city}`,
        form.court && `Court: ${form.court}`,
        form.projectType && `Project Type: ${form.projectType}`,
        form.message && `Message: ${form.message}`,
      ].filter(Boolean);
      window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");

      setForm(EMPTY);
    } catch (err) {
      console.error("[quote] lead request failed:", err);
      setError("Network error. Please call or WhatsApp us.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:min-h-[430px]">
        <CircleCheck className="h-12 w-12 text-[#8CC63F]" strokeWidth={1.6} />
        <h2 className="mt-4 text-[19px] font-bold text-[#0F2233]">Thank you!</h2>
        <p className="mt-2 max-w-[260px] text-[13px] leading-relaxed text-[#6B7785]">
          We&apos;ve received your details and our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-semibold text-[#8CC63F] underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-xl bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-6 md:p-4"
    >
      <h2 className="text-center text-[19px] font-bold text-[#0F2233] sm:text-[20px] md:text-[16px]">
        Get a Free Project Estimate
      </h2>
      <p className="mx-auto mt-2 max-w-[300px] text-center text-[12px] leading-snug text-[#7B8794] md:mt-1.5 md:max-w-[250px] md:text-[10.5px]">
        Tell us your requirement and our team will get back to you within 24 hours.
      </p>

      {/* honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={set("company")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-5 space-y-3 md:mt-3.5 md:space-y-2">
        <label className={FIELD_BOX}>
          <User className={ICON} strokeWidth={1.7} />
          <input
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Full Name *"
            className={INPUT}
          />
        </label>

        <label className={FIELD_BOX}>
          <Phone className={ICON} strokeWidth={1.7} />
          <input
            required
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Phone Number *"
            className={INPUT}
          />
        </label>

        <Select
          icon={MapPin}
          value={form.city}
          onChange={set("city")}
          placeholder="City *"
          options={CITIES}
        />
        <Select
          icon={LayoutGrid}
          value={form.court}
          onChange={set("court")}
          placeholder="Court Required *"
          options={COURTS}
        />
        <Select
          icon={Building2}
          value={form.projectType}
          onChange={set("projectType")}
          placeholder="Project Type *"
          options={PROJECT_TYPES}
        />

        <label className="flex items-start gap-3 rounded-lg border border-[#E3E7EC] bg-[#FBFCFD] px-4 py-3 focus-within:border-[#8CC63F] md:gap-2.5 md:px-3.5 md:py-2.5">
          <SquarePen className={`${ICON} mt-0.5`} strokeWidth={1.7} />
          <div className="min-w-0 flex-1">
            <input
              value={form.message}
              onChange={set("message")}
              placeholder="Message (Optional)"
              className={INPUT}
            />
            <p className="mt-1 text-[11px] text-[#B6BEC8] md:mt-0.5 md:text-[10px]">
              Share any specific requirement
            </p>
          </div>
        </label>
      </div>

      {error ? (
        <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-center text-[12px] font-medium text-red-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8CC63F] py-3.5 text-[15px] font-bold text-white transition hover:bg-[#7cb333] disabled:cursor-not-allowed disabled:opacity-70 md:mt-3 md:py-2.5 md:text-[13px]"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} /> Sending…
          </>
        ) : (
          <>
            Get Free Quote <ArrowRight className="h-4 w-4 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
          </>
        )}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#8A94A0] md:mt-2 md:text-[9.5px]">
        <Lock className="h-3 w-3 md:h-2.5 md:w-2.5" strokeWidth={2} /> Your information is safe with
        us.
      </p>
    </form>
  );
}

function Select({
  icon: Icon,
  value,
  onChange,
  placeholder,
  options,
}: {
  icon: React.ElementType;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <label className={`${FIELD_BOX} relative`}>
      <Icon className={ICON} strokeWidth={1.7} />
      <select
        required
        value={value}
        onChange={onChange}
        className={`${INPUT} appearance-none ${value ? "" : "text-[#9AA4B0]"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[#0F2233]">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="h-4 w-4 shrink-0 text-[#9AA4B0]" strokeWidth={2} />
    </label>
  );
}
