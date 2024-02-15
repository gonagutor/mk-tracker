"use client";

import Image from "next/image";
import React from "react";
import useProtected from "./ui/hooks/useProtected";
import useSelectedWheel from "@/app/ui/hooks/useSelectedWheel";
import useSelectedKart from "@/app/ui/hooks/useSelectedKart";
import useSelectedWing from "@/app/ui/hooks/useSelectedWing";
import useSelectedDriver from "./ui/hooks/useSelectedDriver";
import Profile from "./ui/components/Dashboard/Profile";
import Nav from "./ui/components/Dashboard/Nav";
import Loader from "./ui/components/Loader";
import useSelectedTournament from "./ui/hooks/useSelectedTournament";
import { Tournament } from "@prisma/client";
import Link from "next/link";

const placeholderAlt = "Cargando";
const placeholderImage = "/assets/placeholder.png";

const Podium = ({
  name,
  position,
}: Readonly<{ name: string; position: number }>) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div>
        <span className="text-2xl bg-mk-red text-white min-w-14 text-center">
          {position}
        </span>
        <span>{name}</span>
      </div>

      <span>4000</span>
    </div>
  );
};

const TournamentView = () => (
  <>
    <section className="bg-white rounded-xl p-4 text-black">
      <h3 className="text-center text-accent-yellow font-bold text-2xl pb-2">
        Posición global
      </h3>
      <div className="flex flex-col gap-4">
        {["Gonzalo", "Alba", "Diego"].map((v, index) => (
          <Podium key={v} name={v} position={index} />
        ))}
      </div>
    </section>

    <section className="bg-white rounded-xl p-4 text-black">
      <h3 className="text-center text-accent-blue font-bold text-2xl pb-2">
        Gráfico de mejora
      </h3>
      {/*<Chart
  type="line"
  data={{
    datasets: [
      {
        data: [48, 55, 22],
        label: "teszt",
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  }}
></Chart>*/}
    </section>

    <section className="bg-white rounded-xl p-4 text-black">
      <h3 className="text-center text-accent-pink font-bold text-2xl pb-2">
        Últimas copas
      </h3>
    </section>
  </>
);

export default function Home() {
  const user = useProtected();
  const wheel = useSelectedWheel();
  const kart = useSelectedKart();
  const wing = useSelectedWing();
  const driver = useSelectedDriver();
  const [tournament] = useSelectedTournament();

  return (
    <main className="flex flex-col p-2 gap-2 pb-52">
      <Profile user={user} />

      {driver ? (
        <section className="flex flex-col justify-center items-center w-full aspect-square">
          <Image
            src={driver?.full_image ?? placeholderImage}
            priority
            alt={driver?.name ?? placeholderAlt}
            width={1000}
            height={871}
          />
        </section>
      ) : (
        <div className="relative w-full aspect-square">
          <Loader />
        </div>
      )}

      {tournament ? (
        <TournamentView />
      ) : (
        <section className="bg-white rounded-xl p-4 text-black">
          <h1>Ningún torneo seleccionado</h1>
          {(user?.participatingIn ?? new Array<Tournament>()).map(
            (tournament) => (
              <button key={tournament.id}>{tournament.name}</button>
            )
          )}
          <Link
            href="/tournament/create"
            className="flex items-center justify-center relative w-full h-16 mt-4 button-white bg-accent-blue text-white rounded-xl font-bold text-lg"
          >
            Crear torneo
          </Link>
        </section>
      )}

      <Nav driver={driver} kart={kart} wheel={wheel} wing={wing} />
    </main>
  );
}
