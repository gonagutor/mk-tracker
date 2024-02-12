"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox({
  search,
  setSearch,
}: Readonly<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}>) {
  return (
    <search className="px-2 h-16 flex flex-row">
      <input
        className="my-1 p-4 grow rounded-lg focus:bg-white bg-white-transparent focus:text-black text-white"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Buscar"
      />
      <button
        className="w-16 h-16 ml-2 py-4 px-5"
        onClick={() => setSearch("")}
      >
        <FontAwesomeIcon icon={faClose} size="2x" className="w-6 h-8" />
      </button>
    </search>
  );
}
