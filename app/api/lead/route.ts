import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SMTP cannot run on the Edge runtime.
export const runtime = "nodejs";

const LEAD_FIELDS = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
  { key: "court", label: "Court Required" },
  { key: "projectType", label: "Project Type" },
  { key: "service", label: "Service" },
  { key: "message", label: "Message" },
  { key: "source", label: "Submitted From" },
] as const;

function clean(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Accept silently so bots
  // get no signal that the submission was dropped.
  if (clean((body as Record<string, unknown>).company)) {
    return NextResponse.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const { key } of LEAD_FIELDS) {
    data[key] = clean((body as Record<string, unknown>)[key]);
  }

  if (!data.name) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }

  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error("[lead] SMTP_USER / SMTP_PASS are not configured.");
    return NextResponse.json(
      { ok: false, error: "Email is not configured yet. Please call or WhatsApp us." },
      { status: 503 },
    );
  }

  const rows = LEAD_FIELDS.filter(({ key }) => data[key])
    .map(
      ({ key, label }) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eceff2;color:#6b7785;font:600 12px/1.4 Arial,sans-serif;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eceff2;color:#0f2233;font:400 14px/1.5 Arial,sans-serif;">${escapeHtml(
            data[key],
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="background:#f4f6f8;padding:24px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;">
        <div style="background:#06261e;padding:18px 22px;">
          <p style="margin:0;color:#8cc63f;font:700 11px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;">Ikon Sports</p>
          <h1 style="margin:8px 0 0;color:#ffffff;font:700 19px/1.3 Arial,sans-serif;">New Website Enquiry</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <div style="padding:16px 22px;background:#fafbfc;">
          <a href="tel:${escapeHtml(data.phone)}" style="color:#0f2233;font:700 13px/1 Arial,sans-serif;text-decoration:none;">Call ${escapeHtml(
            data.phone,
          )}</a>
          <span style="color:#c9d0d7;padding:0 8px;">|</span>
          <a href="https://wa.me/${digits.length > 10 ? digits : `91${digits}`}" style="color:#22c55e;font:700 13px/1 Arial,sans-serif;text-decoration:none;">WhatsApp</a>
        </div>
      </div>
    </div>`;

  const text = LEAD_FIELDS.filter(({ key }) => data[key])
    .map(({ key, label }) => `${label}: ${data[key]}`)
    .join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Ikon Sports Website" <${user}>`,
      to: process.env.LEAD_TO_EMAIL || user,
      // Forms collect a phone number, not an email, so replyTo is only usable
      // when the visitor happened to give one.
      replyTo: data.email || undefined,
      subject: `New Enquiry — ${data.name} (${data.phone})`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] sendMail failed:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please call or WhatsApp us." },
      { status: 502 },
    );
  }
}
