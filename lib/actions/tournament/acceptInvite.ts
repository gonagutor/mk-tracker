"use server";

import prisma from "@/lib/prisma";
import checkToken from "../auth/checkToken";

export default async function acceptInvite(
  token: string,
  tournamentId: string
) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");

  const userId = (await checkToken(token)) as string;
  const tournament = await prisma.tournament.findFirstOrThrow({
    where: { id: tournamentId },
    include: {
      invites: true,
      participants: true,
    },
  });

  const user = tournament.invites.find((invite) => invite.id == userId);
  if (!user) throw new Error("No estás invitado a este torneo");

  const resultingTournament = await prisma.tournament.update({
    where: { id: tournament.id },
    include: { invites: true, participants: true },
    data: {
      invites: { disconnect: user },
      participants: { connect: user },
    },
  });

  return resultingTournament;
}
