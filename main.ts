import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const userRoles = await prisma.user
    .findUnique({
      where: { UserID: 1 },
    })
    .UserRole({
      select: {
        Role: {
          select: {
            Id: true,
            Name: true,
          },
        },
      },
    });

  console.log(userRoles);
  prisma.$disconnect();
}

main();
