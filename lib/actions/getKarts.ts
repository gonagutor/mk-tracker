"use server";
import { PrismaClient } from "@prisma/client";

export default async function getKarts() {
  const prisma = new PrismaClient();
  const karts = await prisma.kart.findMany();

  return karts;
}
