import { NextResponse } from "next/server";

import { requireAdminAccessToken } from "@/lib/controllers/admin-auth.controller";
import { getLeadDashboardSummary } from "@/lib/controllers/leads.controller";

export async function GET(request: Request) {
  const auth = await requireAdminAccessToken(request);
  if (auth.response) {
    return auth.response;
  }

  const summary = await getLeadDashboardSummary();
  return NextResponse.json(summary);
}
