import React from "react";
import drivers from "@/scripts/drivers.json";
import CharacterSelector from "@/ui/components/CharacterSelector";

export default async function Home() {
  return (
    <main className="mb-20">
      <div className="text-mk-red font-bold text-2xl checkered-background text-center skew py-4 my-4">
        <h2>Selecciona un personaje</h2>
      </div>
      <section className="flex flex-row flex-wrap gap-2 p-2">
        {drivers.map((char) => (
          <CharacterSelector key={char.name} character={char} />
        ))}
      </section>
      <button className="button-red fixed bottom-2 left-2 right-2 h-16 bg-accent-yellow text-mk-red text-xl font-bold rounded-xl disabled:bg-white-transparent">
        Continuar
      </button>
    </main>
  );
}
