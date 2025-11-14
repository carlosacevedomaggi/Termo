const { PrismaClient } = require('../src/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
  const order = await prisma.order.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      items: true,
    },
  });
  console.log(order);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
