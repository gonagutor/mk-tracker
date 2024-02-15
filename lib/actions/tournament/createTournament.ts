"use server";

import prisma from "@/lib/prisma";
import checkToken from "../auth/checkToken";

export default async function createTournament(
  token: string,
  tournament: { name: string; start: Date; end: Date },
  inviteesEmail: string[]
) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");

  const ownerId = await checkToken(token);
  if (!ownerId) throw new Error("Debes tener una cuenta para crear un torneo");

  if (inviteesEmail.length > 11)
    throw new Error("No se pueden invitar más de 11 usuarios");
  if (tournament.end.getTime() <= tournament.start.getTime())
    throw new Error("Un torneo no puede acabar antes de empezar");

  const invitees = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { email: { in: inviteesEmail } },
  });

  const notFoundEmails = new Array<string>();
  inviteesEmail.forEach((inviteeEmail) => {
    if (!invitees.find((item) => inviteeEmail == item.email))
      notFoundEmails.push(inviteeEmail);
  });
  if (notFoundEmails.length > 0)
    throw new Error("Uno o más correos no están registrados", {
      cause: notFoundEmails,
    });

  const resultingTournament = await prisma.tournament.create({
    include: { invites: true, participants: true },
    data: {
      ownerId: ownerId as string,
      ...tournament,
      invites: { connect: invitees },
      participants: { connect: [{ id: ownerId as string }] },
    },
  });
  return resultingTournament;
}
