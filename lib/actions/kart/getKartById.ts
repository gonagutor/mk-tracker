"use server";

import prisma from "@/lib/prisma";

export default async function getKartById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const kart = await prisma.kart.findFirstOrThrow({ where: { id } });

  return kart;
}
