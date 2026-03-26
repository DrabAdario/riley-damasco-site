import { NextResponse } from "next/server";
import db from "@/app/lib/db";

// Next.js passes dynamic URL parameters via the second argument `context.params`
// So for /api/notes/5, params.id will be "5"
type Context = { params: Promise<{ id: string }> };

// GET /api/notes/[id]
// Fetch a single note by its ID
export async function GET(request: Request, context: Context) {
  try {
    const { id } = await context.params;

    const stmt = db.prepare("SELECT * FROM notes WHERE id = ?");
    const note = stmt.get(id);

    if (!note) {
      return NextResponse.json({ success: false, error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: note });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT /api/notes/[id]
// Update an existing note
export async function PUT(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    if (!body.content) {
      return NextResponse.json({ success: false, error: "Missing 'content' to update" }, { status: 400 });
    }

    const stmt = db.prepare("UPDATE notes SET content = ? WHERE id = ?");
    const result = stmt.run(body.content, id);

    if (result.changes === 0) {
      return NextResponse.json({ success: false, error: "Note not found or no changes made" }, { status: 404 });
    }

    const updatedNote = db.prepare("SELECT * FROM notes WHERE id = ?").get(id);
    return NextResponse.json({ success: true, data: updatedNote });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/notes/[id]
// Remove a note by its ID
export async function DELETE(request: Request, context: Context) {
  try {
    const { id } = await context.params;

    const stmt = db.prepare("DELETE FROM notes WHERE id = ?");
    const result = stmt.run(id);

    if (result.changes === 0) {
      return NextResponse.json({ success: false, error: "Note not found to delete" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: `Note ${id} deleted successfully` });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
