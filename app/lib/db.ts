import Database from "better-sqlite3";
import path from "path";

// Resolves absolutely to the root of the project to ensure Next.js dev server doesn't lose it
const dbPath = path.resolve(process.cwd(), "sqlite.db");

// In dev mode, initialize the connection singleton
const globalForDb = global as unknown as { db: Database.Database };

const db = globalForDb.db || new Database(dbPath);

if (process.env.NODE_ENV !== "production") globalForDb.db = db;

// Initialize the notes table if it does not exist
db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Initialize the users table for authentication
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
