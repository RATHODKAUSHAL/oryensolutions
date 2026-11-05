import { NextResponse } from "next/server";

import { createLead } from "@/lib/controllers/leads.controller";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, subject, message } = body as Record<string, string>;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Full name, email, and message are required." }, { status: 400 });
    }

    const lead = await createLead({
      fullName: fullName.trim(),
      companyName: (companyName ?? "").trim(),
      email: email.trim(),
      phone: (phone ?? "").trim(),
      subject: (subject ?? "").trim(),
      message: message.trim(),
    });

    return NextResponse.json({ ok: true, leadId: lead.id });
  } catch {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
