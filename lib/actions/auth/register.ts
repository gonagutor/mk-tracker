"use server";

import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";

type RegisterParams = { name: string; password: string; email: string };

export default async function register({
  name,
  password,
  email,
}: Readonly<RegisterParams>) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      },
    });
    return null;
  } catch (e) {
    return "El correo ya está registrado";
  }
}
