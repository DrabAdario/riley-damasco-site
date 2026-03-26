import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET || "riley-super-secret-key-12345";
const key = new TextEncoder().encode(SECRET_KEY);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // Token lasts for 24 hours
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function setAuthCookie(userId: number, username: string) {
  // Create the JWT containing user data
  const sessionData = { userId, username };
  const token = await encrypt(sessionData);

  // Set the cookie using Next.js powerful cookies() API
  const myCookies = await cookies();
  myCookies.set("auth_session", token, {
    httpOnly: true, // Prevents JavaScript from reading the cookie
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "lax", // CSRF protection
    maxAge: 24 * 60 * 60, // 24 hours in seconds
    path: "/", // Valid across the entire site
  });
}

export async function removeAuthCookie() {
  const myCookies = await cookies();
  myCookies.delete("auth_session");
}

export async function getAuthSession() {
  const myCookies = await cookies();
  const sessionCookie = myCookies.get("auth_session")?.value;
  if (!sessionCookie) return null;

  try {
    return await decrypt(sessionCookie);
  } catch (error) {
    return null;
  }
}
