import { NextResponse } from "next/server";

import { EMAIL_PATTERN, sendSubmissionEmail } from "@/lib/email";

// Kept under Vercel's 4.5MB request body limit.
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = String(form.get("fullName") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const resume = form.get("resume");

  if (!fullName || !email || !(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "Name, email, and resume file are required." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (fullName.length > 100 || email.length > 254 || phone.length > 30 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }
  const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  if (!ALLOWED_EXTENSIONS.some((ext) => safeName.toLowerCase().endsWith(ext))) {
    return NextResponse.json({ error: "Resume must be a PDF, DOC, or DOCX file." }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume must be 4MB or smaller." }, { status: 400 });
  }

  try {
    await sendSubmissionEmail({
      subject: `New resume from ${fullName}`,
      title: "New careers resume submission",
      replyTo: email,
      fields: [
        { label: "Full name", value: fullName },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Message", value: message },
        { label: "Resume", value: safeName },
      ],
      attachments: [{ filename: safeName, content: Buffer.from(await resume.arrayBuffer()) }],
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("resume-submit failed:", error);
    return NextResponse.json({ error: "Failed to submit resume." }, { status: 500 });
  }
}
