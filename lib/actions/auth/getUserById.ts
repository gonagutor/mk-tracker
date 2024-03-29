"use server";

import prisma from "@/lib/prisma";

export default async function getUserById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const user = await prisma.user.findFirstOrThrow({
    where: { id },
    include: { invites: true, participatingIn: true },
  });

  return user;
}
