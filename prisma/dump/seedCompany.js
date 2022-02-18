const { PrismaClient } = require("@prisma/client");
const companyData = require("./company");

const prisma = new PrismaClient();

async function main() {
// LEGAL ENTITIES
  for (let item of companyData) {
    await prisma.company.create({ data: item });
    console.log(item);
  }
    console.log("COMPANIES ARE SEEDED");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });