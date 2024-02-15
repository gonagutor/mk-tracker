"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Kart, Wheel, Wing } from "@prisma/client";

import getWings from "@/lib/actions/getWings";
import getWheels from "@/lib/actions/getWheels";
import getKarts from "@/lib/actions/getKarts";
import Selector from "@/app/ui/components/Selector";
import { KART_KEY, WHEEL_KEY, WING_KEY } from "@/lib/constants";
import useProtected from "../ui/hooks/useProtected";
import RaceTitle from "../ui/components/RaceTitle";

export default function KartSelect() {
  useProtected();
  const router = useRouter();

  const [wings, setWings] = useState<Array<Kart>>();
  const [karts, setKarts] = useState<Array<Kart>>();
  const [wheels, setWheels] = useState<Array<Wheel>>();

  const [selectedWing, setSelectedWing] = useState<Wing>();
  const [selectedKart, setSelectedKart] = useState<Kart>();
  const [selectedWheel, setSelectedWheel] = useState<Wheel>();

  useEffect(() => {
    getWings().then((v) => setWings(v));
    getKarts().then((v) => setKarts(v));
    getWheels().then((v) => setWheels(v));
  }, []);

  const onContinueClick = () => {
    if (!selectedKart || !selectedWheel || !selectedWing) return;

    localStorage.setItem(KART_KEY, selectedKart.id);
    localStorage.setItem(WHEEL_KEY, selectedWheel.id);
    localStorage.setItem(WING_KEY, selectedWing.id);
    router.replace("/");
  };

  return (
    <main className="relative">
      <RaceTitle>
        <h2>Selecciona tu coche</h2>
      </RaceTitle>
      <section
        className="fixed top-1/3 left-0 right-0 mx-2 grid grid-cols-3 h-72 bg-white-transparent rounded-xl p-2 self-center"
        style={{
          mask: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        <div className="absolute top-1/3 bottom-1/3 left-0 right-0 bg-white" />
        <Selector
          items={karts}
          setSelected={(item) => setSelectedKart(item as Kart)}
          selected={selectedKart}
        />
        <Selector
          items={wheels}
          setSelected={(item) => setSelectedWheel(item as Wheel)}
          selected={selectedWheel}
        />
        <Selector
          items={wings}
          setSelected={(item) => setSelectedWing(item as Wing)}
          selected={selectedWing}
        />
      </section>
      <button
        disabled={!selectedKart || !selectedWheel || !selectedWing}
        onClick={onContinueClick}
        className="button-red fixed bottom-2 left-2 right-2 h-16 bg-accent-yellow text-mk-red text-xl font-bold rounded-xl disabled:bg-white-transparent"
      >
        Continuar
      </button>
    </main>
  );
}
