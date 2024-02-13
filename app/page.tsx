"use client";

import getUser from "@/lib/actions/getUser";
import { USER_KEY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Chart } from "react-chartjs-2";

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

const CharacterKartDisplay = () => {
  return (
    <section className="bg-white-transparent mb-2 p-4 rounded-lg flex flex-row text-black justify-between items-center">
      <Link href="/character" className="bg-white-transparent rounded-lg">
        <Image
          src="/assets/icons/mario.webp"
          alt="Mario"
          width={80}
          height={80}
        ></Image>
      </Link>
      <div className="flex flex-row gap-2">
        <Link href="/kart" className="bg-white-transparent rounded-lg">
          <Image
            src="/assets/icons/mario.webp"
            alt="Mario"
            width={68}
            height={68}
          ></Image>
        </Link>
        <Link href="/kart" className="bg-white-transparent rounded-lg">
          <Image
            src="/assets/icons/mario.webp"
            alt="Mario"
            width={68}
            height={68}
          ></Image>
        </Link>
        <Link href="/kart" className="bg-white-transparent rounded-lg">
          <Image
            src="/assets/icons/mario.webp"
            alt="Mario"
            width={68}
            height={68}
          ></Image>
        </Link>
      </div>
    </section>
  );
};

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem(USER_KEY);
    if (!userId) router.replace("/welcome");

    getUser(userId!)
      .then(() => {
        // Get user stats and position
      })
      .catch(() => router.replace("/welcome"));
  });

  return (
    <main className="flex flex-col p-2 gap-2">
      <section>
        <Image
          src="/assets/full/mario.webp"
          priority
          alt="Mario"
          width={1000}
          height={871}
        ></Image>
      </section>

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

      <section className="fixed bottom-2 left-2 right-2">
        <CharacterKartDisplay></CharacterKartDisplay>
        <div className="relative">
          <button className="button-red rounded-lg bg-accent-yellow w-full h-16 font-bold text-lg text-mk-red">
            Añadir puntuación
          </button>
        </div>
      </section>
    </main>
  );
}
