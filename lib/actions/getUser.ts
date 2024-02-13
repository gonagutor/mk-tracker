"use server";

import prisma from "@/lib/prisma";

export default async function getUser(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const user = await prisma.user.findFirstOrThrow({ where: { id } });

  return user;
}
