import jwt from "jsonwebtoken";

const ACCESS_TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24;

function getAdminJwtSecret() {
  return process.env.ADMIN_JWT_SECRET || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "oryen-admin-dev-secret";
}

export type AdminAccessTokenPayload = {
  sub: string;
  email: string;
};

export function signAdminAccessToken(payload: AdminAccessTokenPayload) {
  return jwt.sign(payload, getAdminJwtSecret(), {
    expiresIn: ACCESS_TOKEN_MAX_AGE_SECONDS,
  });
}

export function verifyAdminAccessToken(token: string) {
  return jwt.verify(token, getAdminJwtSecret()) as AdminAccessTokenPayload & jwt.JwtPayload;
}

export { ACCESS_TOKEN_MAX_AGE_SECONDS };
