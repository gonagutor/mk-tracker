import getKartById from "@/lib/actions/kart/getKartById";
import { KART_KEY } from "@/lib/constants";
import { Kart } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useSelectedKart() {
  const [kart, setKart] = useState<Kart>();

  const onFail = () => {
    localStorage.removeItem(KART_KEY);
  };

  useEffect(() => {
    const kartId = localStorage.getItem(KART_KEY);
    if (!kartId) return;

    getKartById(kartId)
      .then((kart) => setKart(kart))
      .catch(onFail);
  }, []);

  return kart;
}
