import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Fallback lets `prisma generate` run where DATABASE_URL is unset (e.g. Vercel install step)
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  },
});
