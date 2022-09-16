import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst();
  console.log(user.name);
}

main();
