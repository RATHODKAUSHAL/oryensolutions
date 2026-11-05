import { NextResponse } from "next/server";

import { requireAdminAccessToken } from "@/lib/controllers/admin-auth.controller";
import { listLeads } from "@/lib/controllers/leads.controller";

export async function GET(request: Request) {
  const auth = await requireAdminAccessToken(request);
  if (auth.response) {
    return auth.response;
  }

  const leads = await listLeads();
  return NextResponse.json({ leads });
}
