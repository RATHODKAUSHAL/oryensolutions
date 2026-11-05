import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

import { hashPassword } from "../lib/auth/password";
import { PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  }),
});

const email = "rathodkaushal2001@gmail.com";
const password = "rathodkaushal2001@gmail.com";

async function main() {
  await prisma.adminUser.upsert({
    where: { email },
    update: {
      passwordHash: hashPassword(password),
      name: "Admin User",
    },
    create: {
      email,
      passwordHash: hashPassword(password),
      name: "Admin User",
    },
  });

  console.log(`Seeded admin user: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
