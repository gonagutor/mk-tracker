"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
  const onRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <main className="relative h-dvh flex flex-col justify-center m-4">
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
          />

          <label className="text-md font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <label className="text-md font-bold mt-4 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="p-4 rounded-lg bg-gray-100"
            id="password"
            type="password"
            placeholder="**********"
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
          />

          <button
            className="relative button-white text-center mt-4 p-4 bg-accent-blue text-white text-xl font-bold rounded-xl"
            type="submit"
          >
            Registrarse
          </button>

          <div className="flex flex-row gap-2 p-2 items-center text-gray-500">
            <div className="inline bg-gray-500 h-[1px] grow"></div>
            <span>O</span>
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

      <Link
        className="relative button-white text-center p-4 m-4 bg-accent-yellow text-white text-xl font-bold rounded-xl"
        href="/spectator"
      >
        Acceder como espectador
      </Link>
    </main>
  );
}
