"use client";

import React from "react";
import Image from "next/image";
import { Character } from "../../app/lib/definitions";

export default function CharacterSelector({
  character,
  onClick = () => {},
  isSelected = false,
}: Readonly<{
  character: Character;
  onClick?: (character: Character) => void;
  isSelected?: boolean;
}>) {
  return (
    <button
      className={`min-w-16 min-h-16 max-w-20 max-h-20 aspect-square bg-white-transparent rounded-xl grow ${
        isSelected ? "border-4 border-dotted border-accent-blue" : ""
      }`}
      type="button"
      onClick={() => onClick(character)}
      style={{ filter: "drop-shadow(0 0 4px #ffffff80)" }}
    >
      <Image
        className="m-auto"
        height={52}
        width={52}
        alt={character.name}
        src={character.assets.icon}
      />
    </button>
  );
}
