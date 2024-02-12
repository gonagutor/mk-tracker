"use server";
import { PrismaClient } from "@prisma/client";

export default async function getDrivers() {
  const prisma = new PrismaClient();
  const drivers = await prisma.driver.findMany();

  return drivers;
}
