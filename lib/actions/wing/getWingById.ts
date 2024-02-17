"use server";

import prisma from "@/lib/prisma";

export default async function getWingById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const wing = await prisma.wing.findFirstOrThrow({ where: { id } });

  return wing;
}
