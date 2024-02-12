"use client";

import React, { useState } from "react";
import { NAME_KEY } from "@/lib/constants";

export default function Welcome() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    localStorage.setItem(NAME_KEY, name);
  };

  return (
    <div className="bg-white">
      <form className="flex-col" onSubmit={onLogin}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" />
      </form>
    </div>
  );
}
