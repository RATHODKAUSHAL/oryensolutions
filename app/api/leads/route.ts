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
      fullName,
      companyName,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create lead." }, { status: 500 });
  }
}
