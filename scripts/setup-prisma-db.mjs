import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

const databaseUrl = process.env.DATABASE_URL || "file:./prisma/dev.db";
const dbPath = databaseUrl.replace(/^file:/, "");
const resolvedPath = path.resolve(process.cwd(), dbPath);

mkdirSync(path.dirname(resolvedPath), { recursive: true });

const db = new Database(resolvedPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS AdminUser (
    id TEXT PRIMARY KEY NOT NULL,
    email TEXT NOT NULL,
    passwordHash TEXT NOT NULL,
    name TEXT NOT NULL DEFAULT 'Admin User',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL
  );

  CREATE UNIQUE INDEX IF NOT EXISTS AdminUser_email_key ON AdminUser(email);

  CREATE TABLE IF NOT EXISTS Lead (
    id TEXT PRIMARY KEY NOT NULL,
    fullName TEXT NOT NULL,
    companyName TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL
  );
`);

db.close();
console.log(`SQLite database is ready at ${resolvedPath}`);
