"use server";

import prisma from "@/lib/prisma";

export default async function getKarts() {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const karts = await prisma.kart.findMany();

  return karts;
}
