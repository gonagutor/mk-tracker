"use server";

import prisma from "@/lib/prisma";

export default async function getDriverById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const driver = await prisma.driver.findFirstOrThrow({ where: { id } });

  return driver;
}
