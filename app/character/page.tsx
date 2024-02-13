"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DriverSelector from "@/app/ui/components/DriverSelector";
import { Driver } from "@/lib/definitions";
import { DRIVER_KEY } from "@/lib/constants";
import getDrivers from "@/lib/actions/getDrivers";
import Loader from "@/app/ui/components/Loader";
import SearchBox from "@/app/ui/components/SearchBox";
import useProtected from "../ui/hooks/useProtected";

export default function CharacterSelect() {
  useProtected();
  const router = useRouter();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<Driver>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);

  const onContinueClick = () => {
    if (!selectedDriver) return;

    localStorage.setItem(DRIVER_KEY, selectedDriver.id);
    router.replace("/");
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mb-20">
      <div className="text-mk-red font-bold text-2xl checkered-background text-center skew py-4 my-4">
        <h2>Selecciona un personaje</h2>
      </div>
      <SearchBox setSearch={setSearch} search={search}></SearchBox>
      <section className="flex flex-row flex-wrap gap-2 p-2">
        {filteredDrivers.length ? (
          filteredDrivers.map((driver) => (
            <DriverSelector
              key={driver.id}
              driver={driver}
              isSelected={driver.id === selectedDriver?.id}
              onClick={(driver) => setSelectedDriver(driver)}
            />
          ))
        ) : (
          <Loader />
        )}
      </section>
      <button
        onClick={onContinueClick}
        disabled={!selectedDriver}
        className="button-red fixed bottom-2 left-2 right-2 h-16 bg-accent-yellow text-mk-red text-xl font-bold rounded-xl disabled:bg-white-transparent"
      >
        Continuar
      </button>
    </main>
  );
}
