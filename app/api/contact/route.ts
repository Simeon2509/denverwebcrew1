import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BUSINESS_NAME = "Denver Web Crew";
const TO_EMAIL = "denverwebcrew@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  try {
    const formData = await request.formData();

    const business = formData.get("business")?.toString().trim() ?? "";
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const pkg = formData.get("package")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!business || !name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const rows: [string, string][] = [
      ["Business", business],
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Interested Package", pkg],
    ].filter(([, value]) => value.length > 0) as [string, string][];

    const html = `
      <h2>New site visit request — ${escapeHtml(BUSINESS_NAME)}</h2>
      ${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`).join("\n")}
      ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${BUSINESS_NAME} Website <onboarding@resend.dev>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New site visit request from ${business}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
