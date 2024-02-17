"use server";

import prisma from "@/lib/prisma";

export default async function getDrivers() {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const drivers = await prisma.driver.findMany();

  return drivers;
}
