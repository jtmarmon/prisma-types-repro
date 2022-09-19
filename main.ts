import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const user = null;
  console.log(user.name);
}

main();
