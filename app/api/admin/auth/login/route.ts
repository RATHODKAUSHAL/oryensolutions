import { NextResponse } from "next/server";

import { ACCESS_TOKEN_MAX_AGE_SECONDS } from "@/lib/auth/admin-token";
import { loginAdmin } from "@/lib/controllers/admin-auth.controller";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "");
  const password = String(body.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const session = await loginAdmin(email, password);

  if (!session) {
    return NextResponse.json({ error: "Invalid admin email or password." }, { status: 401 });
  }

  const response = NextResponse.json({
    access_token: session.accessToken,
    token_type: "Bearer",
    expires_in: ACCESS_TOKEN_MAX_AGE_SECONDS,
    user: session.admin,
  });

  response.cookies.set("admin_access_token", session.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ACCESS_TOKEN_MAX_AGE_SECONDS,
    path: "/",
  });

  return response;
}
