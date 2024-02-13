"use client";
import register from "@/lib/actions/auth/register";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loader from "../ui/components/Loader";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!password || !repeatPassword || !email || !name) {
      setError("Campos sin completar");
      return;
    }
    if (repeatPassword != password) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError(undefined);
    setLoading(true);
    register({ name, password, email }).then((error) => {
      setLoading(false);
      if (error) {
        setError(error);
        return;
      }
      router.replace("/login");
    });
  };

  return (
    <main className="max-h-dvh min-h-dvh flex flex-col justify-center m-4">
      {loading && (
        <div className="bg-gray-500 opacity-50 absolute top-0 bottom-0 left-0 right-0">
          <Loader />
        </div>
      )}
      <section className="bg-white text-black p-4 rounded-xl">
        <form className="flex flex-col" onSubmit={onRegister}>
          <label className="text-md font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <label className="text-md font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="email"
            type="email"
            placeholder="john@doe.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <label className="text-md font-bold mt-4 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          <label
            className="text-md font-bold mt-4 mb-2"
            htmlFor="repeatPassword"
          >
            Contraseña
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="repeatPassword"
            type="password"
            placeholder="**********"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.currentTarget.value)}
          />

          <span className="mt-2 text-red-500">{error}</span>
          <button
            className="relative button-white text-center mt-2 p-4 bg-accent-blue text-white text-xl font-bold rounded-xl"
            type="submit"
          >
            Registrarse
          </button>

          <div className="flex flex-row gap-2 p-2 items-center text-gray-500">
            <div className="inline bg-gray-500 h-[1px] grow"></div>
            <span>o</span>
            <div className="inline bg-gray-500 h-[1px] grow"></div>
          </div>

          <Link
            href="/login"
            className="relative button-white text-center p-4 bg-accent-pink text-white text-xl font-bold rounded-xl"
          >
            Inicia sesión
          </Link>
        </form>
      </section>
    </main>
  );
}
