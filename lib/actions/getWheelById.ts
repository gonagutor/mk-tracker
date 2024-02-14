"use server";

import prisma from "@/lib/prisma";

export default async function getWheelById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const wheel = await prisma.wheel.findFirstOrThrow({ where: { id } });

  return wheel;
}
