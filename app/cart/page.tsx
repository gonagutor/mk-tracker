import React from "react";

export default function Cart() {
  return (
    <main className="mb-20">
      <div className="text-mk-red font-bold text-2xl checkered-background text-center skew py-4 my-4">
        <h2>Selecciona tu coche</h2>
      </div>
      <section></section>
      <button className="button-red fixed bottom-2 left-2 right-2 h-16 bg-accent-yellow text-mk-red text-xl font-bold rounded-xl disabled:bg-white-transparent">
        Continuar
      </button>
    </main>
  );
}
