const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const drivers = require('./data/drivers')
const wings = require('./data/wings')
const karts = require('./data/karts')
const wheels = require('./data/wheels')


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

async function seedWings() {
  const insertedWings = await Promise.all(
    wings.map((wing) => prisma.wing.upsert({
      where: { id: wing.id },
      update: {},
      create: { ...wing },
    }))
  )

  console.log("✅ Inserted %d wings", insertedWings.length)
}

async function seedKarts() {
  const insertedKarts = await Promise.all(
    karts.map((kart) => prisma.kart.upsert({
      where: { id: kart.id },
      update: {},
      create: { ...kart },
    }))
  )

  console.log("✅ Inserted %d karts", insertedKarts.length)
}

async function seedWheels() {
  const insertedWheels = await Promise.all(
    wheels.map((wheel) => prisma.wheel.upsert({
      where: { id: wheel.id },
      update: {},
      create: { ...wheel },
    }))
  )

  console.log("✅ Inserted %d wheels", insertedWheels.length)
}

async function main() {
  await seedDrivers()
  await seedWings()
  await seedKarts()
  await seedWheels()
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