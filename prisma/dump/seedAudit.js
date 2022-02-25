const { PrismaClient } = require('@prisma/client');
const auditData = require('./audit');

const prisma = new PrismaClient();

async function main() {
  // Audits
  for (let item of auditData) {
    await prisma.audit.create({ data: item });
    console.log(item);
  }
  console.log('AUDITS ARE SEEDED');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
