"use server";
import jwt from "jsonwebtoken";

export default async function checkToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!);
}
