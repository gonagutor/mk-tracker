"use server";

import prisma from "@/lib/prisma";

export default async function getWings() {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const wings = await prisma.wing.findMany();

  return wings;
}
