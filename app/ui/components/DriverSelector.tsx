"use client";

import React from "react";
import Image from "next/image";
import { Driver } from "@/lib/definitions";

export default function DriverSelector({
  driver,
  onClick = () => {},
  isSelected = false,
}: Readonly<{
  driver: Driver;
  onClick?: (character: Driver) => void;
  isSelected?: boolean;
}>) {
  return (
    <button
      className={`min-w-16 min-h-16 max-w-20 max-h-20 aspect-square bg-white-transparent rounded-xl grow basis-0 ${
        isSelected ? "border-4 border-accent-blue" : ""
      }`}
      type="button"
      onClick={() => onClick(driver)}
      style={{ filter: "drop-shadow(0 0 4px #ffffff80)" }}
    >
      <Image
        className="m-auto"
        height={52}
        width={52}
        alt={driver.name}
        src={driver.icon}
      />
    </button>
  );
}
