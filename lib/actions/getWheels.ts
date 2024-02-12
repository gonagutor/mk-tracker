"use server";
import { PrismaClient } from "@prisma/client";

export default async function getWheels() {
  const prisma = new PrismaClient();
  const wheels = await prisma.wheel.findMany();

  return wheels;
}
