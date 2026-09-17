import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where submissions land. Set these in your environment (.env.local / hosting
// provider dashboard). TO_EMAIL can be a comma-separated list.
const TO_EMAIL = "info@parliaccess.org";
const FROM_EMAIL =
  process.env.WRITE_TO_MP_FROM_EMAIL ?? "Write to your MP <noreply@parliaccess.org>";

type Payload = {
  regionId?: string;
  regionName?: string;
  divisionId?: string;
  divisionName?: string;
  constituencyId?: string;
  constituencyName?: string;
  mpId?: string;
  mpName?: string;
  subject?: string;
  message?: string;
  email?: string;
  phone?: string;
};

function isNonEmpty(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  return /^[+\d][\d\s]{6,}$/.test(v.trim());
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }
  if (!TO_EMAIL) {
    console.error("TO_EMAIL is not set");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    regionId,
    regionName,
    divisionId,
    divisionName,
    constituencyId,
    constituencyName,
    mpId,
    mpName,
    subject,
    message,
    email,
    phone,
  } = body;

  // Server-side validation mirrors the client-side rules in the form.
  const errors: string[] = [];
  if (!isNonEmpty(regionId)) errors.push("region");
  if (!isNonEmpty(divisionId)) errors.push("division");
  if (!isNonEmpty(constituencyId)) errors.push("constituency");
  if (!isNonEmpty(subject)) errors.push("subject");
  if (!isNonEmpty(message)) errors.push("message");
  if (!isNonEmpty(email) || !isValidEmail(email!.trim())) errors.push("email");
  if (!isNonEmpty(phone) || !isValidPhone(phone!)) errors.push("phone");

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Missing or invalid fields.", fields: errors },
      { status: 400 }
    );
  }

  const safe = {
    regionName: escapeHtml(regionName?.trim() || regionId!.trim()),
    divisionName: escapeHtml(divisionName?.trim() || divisionId!.trim()),
    constituencyName: escapeHtml(constituencyName?.trim() || constituencyId!.trim()),
    mpName: mpName?.trim() ? escapeHtml(mpName.trim()) : null,
    subject: escapeHtml(subject!.trim()),
    message: escapeHtml(message!.trim()),
    email: escapeHtml(email!.trim()),
    phone: escapeHtml(phone!.trim()),
  };

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="margin-bottom: 4px;">New message: Write to your MP</h2>
      <p style="color: #555; margin-top: 0;">Subject: <strong>${safe.subject}</strong></p>

      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tbody>
          <tr><td style="padding: 4px 0; color: #888; width: 140px;">Region</td><td style="padding: 4px 0;">${safe.regionName}</td></tr>
          <tr><td style="padding: 4px 0; color: #888;">Division</td><td style="padding: 4px 0;">${safe.divisionName}</td></tr>
          <tr><td style="padding: 4px 0; color: #888;">Constituency</td><td style="padding: 4px 0;">${safe.constituencyName}</td></tr>
          <tr><td style="padding: 4px 0; color: #888;">MP</td><td style="padding: 4px 0;">${safe.mpName ?? "<em>Not specified</em>"}</td></tr>
          <tr><td style="padding: 4px 0; color: #888;">Sender email</td><td style="padding: 4px 0;">${safe.email}</td></tr>
          <tr><td style="padding: 4px 0; color: #888;">Sender phone</td><td style="padding: 4px 0;">${safe.phone}</td></tr>
        </tbody>
      </table>

      <div style="background: #f6f6f4; border-radius: 8px; padding: 16px; white-space: pre-wrap; line-height: 1.5;">
        ${safe.message}
      </div>
    </div>
  `;

  const text = [
    `New message: Write to your MP`,
    `Subject: ${subject!.trim()}`,
    ``,
    `Region: ${regionName?.trim() || regionId}`,
    `Division: ${divisionName?.trim() || divisionId}`,
    `Constituency: ${constituencyName?.trim() || constituencyId}`,
    `MP: ${mpName?.trim() || "Not specified"}`,
    `Sender email: ${email!.trim()}`,
    `Sender phone: ${phone!.trim()}`,
    ``,
    `Message:`,
    message!.trim(),
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL.split(",").map((s) => s.trim()),
      replyTo: email!.trim(),
      subject: `[Write to your MP] ${subject!.trim()}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Write-to-MP submission failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}