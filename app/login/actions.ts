"use server";

import { redirect } from "next/navigation";
import db from "../lib/db";
import bcrypt from "bcryptjs";
import { setAuthCookie, removeAuthCookie } from "../lib/session";

// NOTE: Since the login needs an initial user, this registers them
// If a user with this name exists, it just attempts to log them in securely.
export async function authenticateUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required!" };
  }

  // 1. Check if the user exists
  const existingUser = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username) as { id: number; passwordHash: string } | undefined;

  let finalUserId: number;

  if (existingUser) {
    // 2. The user exists, let's verify their secure bcrypt hash
    const isValid = await bcrypt.compare(password, existingUser.passwordHash);
    
    if (!isValid) {
      return { error: "Invalid password. Try again." };
    }
    
    finalUserId = existingUser.id;
  } else {
    // 3. User does not exist, let's create a new account!
    // Hash the password cleanly completely shielding it from being read
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const stmt = db.prepare("INSERT INTO users (username, passwordHash) VALUES (?, ?)");
    const result = stmt.run(username, hash);
    finalUserId = result.lastInsertRowid as number;
  }

  // 4. Secure them! Create the JWT string and drop it in their HttpOnly Cookie 
  await setAuthCookie(finalUserId, username);

  // 5. Send them into the vault
  redirect("/admin");
}

export async function logoutUser() {
  await removeAuthCookie();
  redirect("/login");
}
