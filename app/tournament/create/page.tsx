"use client";

import { FormEventHandler, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import RaceTitle from "@/app/ui/components/RaceTitle";
import useProtected from "@/app/ui/hooks/useProtected";
import createTournament from "@/lib/actions/tournament/createTournament";
import { TOKEN_KEY } from "@/lib/constants";
import { useRouter } from "next/navigation";

const placeholderAlt = "Cargando";
const placeholderImage = "/assets/placeholder.png";

export default function ProfilePage() {
  useProtected();
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [invites, setInvites] = useState<string>("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token || !name || !end) return;

    createTournament(
      token,
      { end: new Date(end), start: new Date(start), name },
      invites ? invites.split(",") : new Array<string>()
    )
      .then(() => router.back())
      .catch((e) => console.log(e));
  };

  return (
    <main>
      <RaceTitle className="px-4 justify-between">
        <Link href="/" className="w-6 block">
          <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
        </Link>
        <h1 className="place-self-center">Crear un torneo</h1>
        <div className="w-6 block"></div>
      </RaceTitle>

      <section className="m-4">
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            className="p-4 rounded-lg bg-white text-black"
            id="name"
            type="text"
            placeholder="Piso 2024"
            onChange={(e) => setName(e.currentTarget.value)}
            value={name}
          />

          <label htmlFor="start">Primer dia del torneo</label>
          <input
            className="p-4 rounded-lg bg-white text-black"
            id="start"
            type="date"
            onChange={(e) => setStart(e.currentTarget.value)}
            value={start}
          />

          <label htmlFor="end">Dia final del torneo</label>
          <input
            className="p-4 rounded-lg bg-white text-black"
            id="end"
            type="date"
            onChange={(e) => setEnd(e.currentTarget.value)}
            value={end}
          />

          <label htmlFor="users">Invitar usuarios</label>
          <input
            className="p-4 rounded-lg bg-white text-black"
            id="users"
            placeholder="gonagutor@gmail.com,test@test.com"
            type="text"
            onChange={(e) => setInvites(e.currentTarget.value)}
            value={invites}
          />

          <button
            className="absolute bottom-2 left-2 right-2 button-white text-center mt-2 p-4 bg-accent-blue text-white text-xl font-bold rounded-xl"
            type="submit"
          >
            Crear torneo
          </button>
        </form>
      </section>
    </main>
  );
}
