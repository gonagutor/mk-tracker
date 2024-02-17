"use server";

import prisma from "@/lib/prisma";

export default async function getWheels() {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const wheels = await prisma.wheel.findMany();

  return wheels;
}
