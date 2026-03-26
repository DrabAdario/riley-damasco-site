import { NextResponse } from "next/server";
import db from "@/app/lib/db";

// GET /api/notes
// Fetch all notes from the database
export async function GET() {
  try {
    const stmt = db.prepare("SELECT * FROM notes ORDER BY createdAt DESC");
    const notes = stmt.all();

    return NextResponse.json({ success: true, count: notes.length, data: notes });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/notes
// Create a completely new note
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // We expect the request body to contain { "content": "My new note!" }
    if (!body.content) {
      return NextResponse.json({ success: false, error: "Missing 'content' in request body" }, { status: 400 });
    }

    const stmt = db.prepare("INSERT INTO notes (content) VALUES (?)");
    const result = stmt.run(body.content);

    // After inserting, we can fetch the newly created note to send back
    const newNote = db.prepare("SELECT * FROM notes WHERE id = ?").get(result.lastInsertRowid);

    return NextResponse.json({ success: true, data: newNote }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
