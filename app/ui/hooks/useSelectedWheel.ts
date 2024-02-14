import getWheelById from "@/lib/actions/getWheelById";
import { WHEEL_KEY } from "@/lib/constants";
import { Wheel } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useSelectedWheel() {
  const [wheel, setWheel] = useState<Wheel>();

  const onFail = () => {
    localStorage.removeItem(WHEEL_KEY);
  };

  useEffect(() => {
    const wheelId = localStorage.getItem(WHEEL_KEY);
    if (!wheelId) return;

    getWheelById(wheelId)
      .then((wheel) => setWheel(wheel))
      .catch(onFail);
  }, []);

  return wheel;
}
