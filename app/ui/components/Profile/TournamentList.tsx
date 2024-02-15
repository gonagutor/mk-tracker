"use client";

import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Link from "next/link";
import { UserWithData } from "@/lib/definitions";
import { TOURNAMENT_KEY } from "@/lib/constants";
import { Tournament } from "@prisma/client";

const TournamentItem = ({
  tournament,
  selected,
  setAsSelected,
}: {
  tournament: Tournament;
  selected: boolean;
  setAsSelected: (id: string) => void;
}) => {
  return (
    <button
      className={`flex flex-row justify-between items-center rounded-xl p-4 ${
        selected ? "bg-accent-yellow text-white" : "bg-gray-100 text-black"
      } text-start`}
      onClick={() => setAsSelected(tournament.id)}
    >
      <div>
        <h4 className="text-lg font-bold">{tournament.name}</h4>
        <span
          className={`text-sm font-light ${
            selected ? "text-gray-100" : "text-gray-600"
          }`}
        >
          {moment(tournament.start).format("DD/MM/YYYY")}-
          {moment(tournament.end).format("DD/MM/YYYY")}
        </span>
      </div>
      {selected ? (
        <FontAwesomeIcon
          className="p-4 rounded-full h-4 w-4 bg-accent-pink"
          icon={faCheck}
        />
      ) : (
        <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
      )}
    </button>
  );
};

export default function TournamentList({
  user,
}: Readonly<{ user: UserWithData | undefined }>) {
  const [selectedTournament, setSelectedTournament] = useState<string>();

  const setSelectedTournamentWithSideEffects = (id: string) => {
    localStorage.setItem(TOURNAMENT_KEY, id);
    setSelectedTournament(id);
  };

  useEffect(() => {
    const tournamentId = localStorage.getItem(TOURNAMENT_KEY);
    if (!tournamentId) return;

    setSelectedTournament(tournamentId);
  }, []);

  return (
    <section className="flex flex-col m-4 bg-white text-black rounded-xl p-4">
      <h1 className="font-bold text-xl mb-4">Tus torneos</h1>
      {(user?.participatingIn ?? []).map((tournament) => (
        <TournamentItem
          key={tournament.id}
          tournament={tournament}
          selected={tournament.id == selectedTournament}
          setAsSelected={setSelectedTournamentWithSideEffects}
        />
      ))}
      <Link
        href="/tournament/create"
        className="flex items-center justify-center relative w-full h-16 mt-4 button-white bg-accent-blue text-white rounded-xl font-bold text-lg"
      >
        Crear torneo
      </Link>
    </section>
  );
}
