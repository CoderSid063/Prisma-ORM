import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //create user data
  await prisma.user.create({
    data: {
      email: "test@gmail.com",
      name: "test"
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
