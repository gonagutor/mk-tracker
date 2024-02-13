"use server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

type LoginParams = { password: string; email: string };

export default async function login({
  password,
  email,
}: Readonly<LoginParams>) {
  if (!prisma) throw new Error("No se ha podido conectar con la base de datos");
  const user = await prisma.user.findFirst({ where: { email } });

  if (!user) throw new Error("Usuario no encontrado");
  if (!bcrypt.compareSync(password, user.password))
    throw new Error("Contraseña incorrecta");

  return jwt.sign(user.id, process.env.JWT_SECRET!);
}
