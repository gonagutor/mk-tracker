"use server";

import prisma from "@/lib/prisma";
import checkToken from "../auth/checkToken";
import { UserWithData } from "@/lib/definitions";

export default async function updateUser(
  token: string,
  user: { name?: string; profilePicture?: string }
) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");

  const userId = (await checkToken(token)) as string;
  const resultingUser = await prisma.user.update({
    where: { id: userId },
    data: { ...user },
  });

  return resultingUser;
}
