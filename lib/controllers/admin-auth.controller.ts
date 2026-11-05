import { NextResponse } from "next/server";

import { signAdminAccessToken, verifyAdminAccessToken } from "@/lib/auth/admin-token";
import { verifyPassword } from "@/lib/auth/password";
import { prisma } from "@/lib/prisma";

function getBearerToken(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }
  return authorization.slice("Bearer ".length).trim();
}

export async function loginAdmin(email: string, password: string) {
  const admin = await prisma.adminUser.findUnique({
    where: {
      email: email.trim().toLowerCase(),
    },
  });

  if (!admin || !verifyPassword(password, admin.passwordHash)) {
    return null;
  }

  const accessToken = signAdminAccessToken({
    sub: admin.id,
    email: admin.email,
  });

  return {
    accessToken,
    admin: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    },
  };
}

export async function requireAdminAccessToken(request: Request) {
  const accessToken = getBearerToken(request);

  if (!accessToken) {
    return {
      response: NextResponse.json({ error: "401 unauthorized: access_token is required." }, { status: 401 }),
      user: null,
    };
  }

  try {
    const payload = verifyAdminAccessToken(accessToken);
    return {
      response: null,
      user: {
        id: payload.sub,
        email: payload.email,
      },
    };
  } catch {
    return {
      response: NextResponse.json({ error: "401 unauthorized: invalid or expired access_token." }, { status: 401 }),
      user: null,
    };
  }
}
