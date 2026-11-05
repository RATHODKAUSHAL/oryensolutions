import { NextResponse } from "next/server";

import { createLead } from "@/lib/controllers/leads.controller";
import { EMAIL_PATTERN, sendSubmissionEmail } from "@/lib/email";

const MAX_LENGTHS = {
  fullName: 100,
  companyName: 150,
  email: 254,
  phone: 30,
  subject: 200,
  service: 100,
  budget: 50,
  timeline: 50,
  message: 5000,
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const read = (key: keyof typeof MAX_LENGTHS) => String(body[key] ?? "").trim();
  const fullName = read("fullName");
  const companyName = read("companyName");
  const email = read("email");
  const phone = read("phone");
  const subject = read("subject");
  const service = read("service");
  const budget = read("budget");
  const timeline = read("timeline");
  const message = read("message");

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Full name, email, and message are required." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const values = { fullName, companyName, email, phone, subject, service, budget, timeline, message };
  if (Object.entries(MAX_LENGTHS).some(([key, max]) => values[key as keyof typeof values].length > max)) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  // The Lead table has no service/budget/timeline columns, so keep them in the stored message.
  const details = [
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    timeline && `Timeline: ${timeline}`,
  ].filter(Boolean);
  const leadMessage = details.length ? `${message}\n\n${details.join("\n")}` : message;

  // Save the lead for the admin dashboard and email the team. Either one succeeding
  // means the enquiry isn't lost, so only fail when both do.
  const [saved, emailed] = await Promise.allSettled([
    createLead({
      fullName,
      companyName,
      email,
      phone,
      subject: subject || service,
      message: leadMessage,
    }),
    sendSubmissionEmail({
      subject: `New inquiry from ${fullName}${subject || service ? `: ${subject || service}` : ""}`,
      title: "New contact form submission",
      replyTo: email,
      fields: [
        { label: "Full name", value: fullName },
        { label: "Company", value: companyName },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Subject", value: subject },
        { label: "Service", value: service },
        { label: "Budget", value: budget },
        { label: "Timeline", value: timeline },
        { label: "Message", value: message },
      ],
    }),
  ]);

  if (saved.status === "rejected") console.error("contact-submit: saving lead failed:", saved.reason);
  if (emailed.status === "rejected") console.error("contact-submit: sending email failed:", emailed.reason);

  if (saved.status === "rejected" && emailed.status === "rejected") {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    ...(saved.status === "fulfilled" ? { leadId: saved.value.id } : {}),
  });
}
