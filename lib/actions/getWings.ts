"use server";
import { PrismaClient } from "@prisma/client";

export default async function getWings() {
  const prisma = new PrismaClient();
  const wings = await prisma.wing.findMany();

  return wings;
}
