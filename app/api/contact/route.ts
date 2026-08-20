import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BUSINESS_NAME = "Denver Web Crew";
const TO_EMAIL = "denverwebcrew@gmail.com";
const FROM_ADDRESS = "notifications@denverwebcrew.com";

// Brand tokens — keep in sync with app/globals.css
const NAVY = "#12233b";
const SUNSET = "#ff7a45";
const PAPER = "#f7f5f0";
const PAPER_2 = "#efece3";
const INK = "#1c2430";
const INK_SOFT = "#5b6472";
const LINE = "#e2ded3";
const SERIF = "Georgia,'Times New Roman',serif"; // email-safe fallback for Fraunces
const SANS = "Manrope,Arial,Helvetica,sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Shared table shell — header, content slot, footer. Keeps both emails
// visually consistent without duplicating the boilerplate.
function emailShell(opts: { eyebrow: string; bodyHtml: string; footerHtml: string }) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${PAPER_2}; padding:32px 16px; font-family:${SANS};">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(18,35,59,0.08);">
            <tr>
              <td style="background-color:${NAVY}; padding:26px 32px; border-bottom:3px solid ${SUNSET};">
                <div style="font-family:${SERIF}; font-size:20px; color:#ffffff; font-weight:600;">
                  Denver Web Crew
                </div>
                <div style="font-family:${SANS}; font-size:11px; letter-spacing:1px; text-transform:uppercase; color:${SUNSET}; margin-top:5px; font-weight:600;">
                  ${escapeHtml(opts.eyebrow)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${opts.bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:${PAPER}; padding:16px 32px; border-top:1px solid ${LINE};">
                ${opts.footerHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function fieldRow(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid ${LINE}; font-size:11.5px; text-transform:uppercase; letter-spacing:0.5px; color:${INK_SOFT}; width:130px; vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0; border-bottom:1px solid ${LINE}; font-size:14.5px; color:${INK}; vertical-align:top;">${valueHtml}</td>
    </tr>
  `;
}

function packageBadge(pkg: string) {
  return `<span style="display:inline-block; background-color:${SUNSET}; color:#ffffff; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; padding:3px 10px; border-radius:20px;">${escapeHtml(pkg)}</span>`;
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

    const resend = new Resend(apiKey);

    // --- Email 1: notify the business ---
    const detailRows = [
      fieldRow("Business", escapeHtml(business)),
      fieldRow("Name", escapeHtml(name)),
      fieldRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${NAVY}; text-decoration:none; font-weight:600;">${escapeHtml(email)}</a>`),
      phone ? fieldRow("Phone", `<a href="tel:${escapeHtml(phone)}" style="color:${NAVY}; text-decoration:none; font-weight:600;">${escapeHtml(phone)}</a>`) : "",
      pkg ? fieldRow("Interested Package", packageBadge(pkg)) : "",
    ].join("");

    const notifyBody = `
      <p style="margin:0 0 20px 0; font-family:${SERIF}; font-size:19px; color:${NAVY};">
        New site visit request
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${detailRows}
      </table>
      ${message ? `
        <p style="margin:20px 0 8px 0; font-size:11.5px; text-transform:uppercase; letter-spacing:0.5px; color:${INK_SOFT};">Message</p>
        <div style="background-color:${PAPER}; border-left:3px solid ${SUNSET}; padding:14px 16px; font-size:14px; line-height:1.7; color:${INK}; white-space:pre-wrap; border-radius:0 8px 8px 0;">${escapeHtml(message)}</div>
      ` : ""}
    `;

    const notifyFooter = `
      <p style="margin:0; font-size:12px; color:${INK_SOFT};">
        Sent from the contact form at denverwebcrew.com — reply to this email to respond directly to ${escapeHtml(name)}.
      </p>
    `;

    const { error } = await resend.emails.send({
      from: `${BUSINESS_NAME} Website <${FROM_ADDRESS}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New site visit request from ${business}`,
      html: emailShell({ eyebrow: "New Site Visit Request", bodyHtml: notifyBody, footerHtml: notifyFooter }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    // --- Email 2: confirm to the customer (best-effort) ---
    const confirmBody = `
      <p style="margin:0 0 16px 0; font-family:${SERIF}; font-size:21px; color:${NAVY};">
        Thanks for reaching out, ${escapeHtml(name)}!
      </p>
      <p style="margin:0 0 18px 0; font-size:14.5px; line-height:1.7; color:${INK};">
        We got your message about <strong>${escapeHtml(business)}</strong> and will follow up within
        one business day to schedule your free site visit.
      </p>
      ${pkg ? `<p style="margin:0 0 20px 0;">${packageBadge(pkg)}</p>` : ""}
      <p style="margin:0 0 10px 0; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; color:${INK_SOFT};">
        Here's a copy of what you sent us
      </p>
      <div style="background-color:${PAPER}; border-left:3px solid ${SUNSET}; padding:14px 16px; font-size:13.5px; line-height:1.7; color:${INK}; white-space:pre-wrap; border-radius:0 8px 8px 0;">${escapeHtml(message || "(no message included)")}</div>
      <p style="margin:24px 0 0 0; font-size:14.5px; line-height:1.7; color:${INK};">
        Talk soon,<br/>
        <strong>The Denver Web Crew Team</strong>
      </p>
    `;

    const confirmFooter = `
      <p style="margin:0; font-size:12px; color:${INK_SOFT};">
        Denver Web Crew · denverwebcrew.com · ${TO_EMAIL}
      </p>
    `;

    const { error: confirmationError } = await resend.emails.send({
      from: `${BUSINESS_NAME} <${FROM_ADDRESS}>`,
      to: email,
      subject: "We got your message — Denver Web Crew",
      html: emailShell({ eyebrow: "Message Received", bodyHtml: confirmBody, footerHtml: confirmFooter }),
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
