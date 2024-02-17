import getWingById from "@/lib/actions/wing/getWingById";
import { WING_KEY } from "@/lib/constants";
import { Wing } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useSelectedWing() {
  const [wing, setWing] = useState<Wing>();

  const onFail = () => {
    localStorage.removeItem(WING_KEY);
  };

  useEffect(() => {
    const wingId = localStorage.getItem(WING_KEY);
    if (!wingId) return;

    getWingById(wingId)
      .then((wing) => setWing(wing))
      .catch(onFail);
  }, []);

  return wing;
}
