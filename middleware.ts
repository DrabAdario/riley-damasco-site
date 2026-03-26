import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "./app/lib/session";

// This middleware automatically intercepts requests before they complete
export async function middleware(request: NextRequest) {
  // We only want to protect the /admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const sessionCookie = request.cookies.get("auth_session")?.value;

    // If there's no cookie, kick them to the login page
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // If we cannot decrypt the token, it was tampered with or expired
      const payload = await decrypt(sessionCookie);
      if (!payload) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // Allow access!
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Any other route (like / or /api/public) is completely open
  return NextResponse.next();
}

export const config = {
  // Only invoke middleware on specific paths to save resources
  matcher: ["/admin/:path*"],
};
