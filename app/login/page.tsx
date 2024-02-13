"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loader from "../ui/components/Loader";
import login from "@/lib/actions/auth/login";
import { TOKEN_KEY } from "@/lib/constants";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Campos sin completar");
      return;
    }

    setError(undefined);
    setLoading(true);
    login({ password, email })
      .then((token) => {
        localStorage.setItem(TOKEN_KEY, token);
        router.replace("/");
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="h-dvh flex flex-col justify-center m-4">
      {loading && (
        <div className="bg-gray-500 opacity-50 absolute top-0 bottom-0 left-0 right-0">
          <Loader />
        </div>
      )}
      <section className="bg-white text-black p-4 rounded-xl">
        <form className="flex flex-col" onSubmit={onLogin}>
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

          <span className="mt-2 text-red-500">{error}</span>
          <button
            className="relative button-white text-center mt-2 p-4 bg-accent-blue text-white text-xl font-bold rounded-xl"
            type="submit"
          >
            Iniciar sesión
          </button>

          <div className="flex flex-row gap-2 p-2 items-center text-gray-500">
            <div className="inline bg-gray-500 h-[1px] grow"></div>
            <span>O</span>
            <div className="inline bg-gray-500 h-[1px] grow"></div>
          </div>

          <Link
            href="/register"
            className="relative button-white text-center p-4 bg-accent-pink text-white text-xl font-bold rounded-xl"
          >
            Registrate
          </Link>
        </form>
      </section>

      <Link
        className="relative button-white text-center p-4 m-4 bg-accent-yellow text-white text-xl font-bold rounded-xl"
        href="/spectator"
      >
        Acceder como espectador
      </Link>
    </main>
  );
}
