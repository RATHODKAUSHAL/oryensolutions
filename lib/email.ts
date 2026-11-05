import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "rathodkaushal2001@gmail.com";
// onboarding@resend.dev works without a verified domain, but only delivers to the Resend account owner's email.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Oryen Solutions <onboarding@resend.dev>";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = { label: string; value: string };

type Attachment = { filename: string; content: Buffer };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(title: string, fields: Field[]) {
  const rows = fields
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value || "-")}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;color:#021024"><h2 style="color:#052659">${escapeHtml(title)}</h2><table style="border-collapse:collapse">${rows}</table></div>`;
}

function renderText(title: string, fields: Field[]) {
  return [title, "", ...fields.map(({ label, value }) => `${label}: ${value || "-"}`)].join("\n");
}

export async function sendSubmissionEmail(options: {
  subject: string;
  title: string;
  fields: Field[];
  replyTo?: string;
  attachments?: Attachment[];
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }

  const fields = [...options.fields, { label: "Submitted at", value: new Date().toISOString() }];
  const { error } = await new Resend(apiKey).emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: options.subject,
    replyTo: options.replyTo,
    html: renderHtml(options.title, fields),
    text: renderText(options.title, fields),
    attachments: options.attachments,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
