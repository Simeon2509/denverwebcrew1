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
      from: `${BUSINESS_NAME} Website <notifications@denverwebcrew.com>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New site visit request from ${business}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    // Best-effort customer confirmation — doesn't affect the response if it fails,
    // since the actual submission to the business already succeeded above.
    const confirmationHtml = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#efece3; padding:32px 16px; font-family:Manrope,Arial,sans-serif;">
        <tr>
          <td align="center">
            <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden;">
              <tr>
                <td style="background-color:#12233b; padding:26px 32px;">
                  <div style="font-family:Georgia,'Times New Roman',serif; font-size:20px; color:#ffffff; font-weight:600;">
                    Denver Web Crew
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <p style="margin:0 0 16px 0; font-family:Georgia,'Times New Roman',serif; font-size:20px; color:#12233b;">
                    Thanks for reaching out, ${escapeHtml(name)}!
                  </p>
                  <p style="margin:0 0 16px 0; font-size:14.5px; line-height:1.7; color:#1c2430;">
                    We got your message about <strong>${escapeHtml(business)}</strong> and will follow up within
                    one business day to schedule your free site visit.
                  </p>
                  <p style="margin:0 0 20px 0; font-size:14.5px; line-height:1.7; color:#5b6472;">
                    In the meantime, here's a copy of what you sent us:
                  </p>
                  <div style="background-color:#f7f5f0; border-left:3px solid #ff7a45; padding:14px 16px; font-size:13.5px; line-height:1.7; color:#1c2430; white-space:pre-wrap;">${escapeHtml(message || "(no message included)")}</div>
                </td>
              </tr>
              <tr>
                <td style="background-color:#f7f5f0; padding:16px 32px; border-top:1px solid #e2ded3;">
                  <p style="margin:0; font-size:12px; color:#5b6472;">
                    Denver Web Crew · denverwebcrew.com · ${TO_EMAIL}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    const { error: confirmationError } = await resend.emails.send({
      from: `${BUSINESS_NAME} <notifications@denverwebcrew.com>`,
      to: email,
      subject: "We got your message — Denver Web Crew",
      html: confirmationHtml,
    });

    if (confirmationError) {
      console.error("Customer confirmation email error:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
