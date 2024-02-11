const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const drivers = require('./data/drivers')


async function seedDrivers() {
  const insertedDrivers = await Promise.all(
    drivers.map((driver) => prisma.driver.upsert({
      where: { id: driver.id },
      update: {},
      create: { ...driver },
    }))
  )

  console.log("✅ Inserted %d drivers", insertedDrivers.length)
}

async function main() {
  await seedDrivers();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })