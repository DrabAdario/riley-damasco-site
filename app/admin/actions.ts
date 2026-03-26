"use server";

import { revalidatePath } from "next/cache";
import db from "../lib/db";

export interface Note {
  id: number;
  content: string;
  createdAt: string;
}

export async function addNote(content: string) {
  if (!content.trim()) return;

  const stmt = db.prepare("INSERT INTO notes (content) VALUES (?)");
  stmt.run(content);

  revalidatePath("/admin");
}

export async function deleteNote(id: number) {
  const stmt = db.prepare("DELETE FROM notes WHERE id = ?");
  stmt.run(id);

  revalidatePath("/admin");
}

export async function getNotes(): Promise<Note[]> {
  const stmt = db.prepare("SELECT * FROM notes ORDER BY createdAt DESC");
  return stmt.all() as Note[];
}
