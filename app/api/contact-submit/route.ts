import { NextResponse } from "next/server";

import { appendCsvRow } from "@/lib/submissions";

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

    const headers = ["submitted_at", "fullName", "companyName", "email", "phone", "subject", "message"];
    await appendCsvRow("contact_submissions.csv", headers, {
      submitted_at: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: (companyName ?? "").trim(),
      email: email.trim(),
      phone: (phone ?? "").trim(),
      subject: (subject ?? "").trim(),
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
