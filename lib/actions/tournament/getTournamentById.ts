"use server";

import prisma from "@/lib/prisma";

export default async function getTournamentById(id: string) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const tournament = await prisma.tournament.findFirstOrThrow({
    where: { id },
  });

  return tournament;
}
