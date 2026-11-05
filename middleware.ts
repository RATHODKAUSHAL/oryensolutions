import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/v1/admin");
  const isAdminLoginRoute = pathname === "/v1/admin/login";

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("admin_access_token")?.value;

  if (!accessToken && !isAdminLoginRoute) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/v1/admin/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && isAdminLoginRoute) {
    const adminUrl = request.nextUrl.clone();
    adminUrl.pathname = "/v1/admin";
    adminUrl.search = "";
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/v1/admin/:path*"],
};
