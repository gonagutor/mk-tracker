"use server";
import { PrismaClient } from "@prisma/client";

export default async function getUser(id: string) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirstOrThrow({ where: { id } });

  return user;
}
