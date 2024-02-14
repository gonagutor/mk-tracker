import getDriverById from "@/lib/actions/getDriverById";
import { DRIVER_KEY } from "@/lib/constants";
import { Driver } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useSelectedDriver() {
  const [driver, setDriver] = useState<Driver>();

  const onFail = () => {
    localStorage.removeItem(DRIVER_KEY);
  };

  useEffect(() => {
    const driverId = localStorage.getItem(DRIVER_KEY);
    if (!driverId) return;

    getDriverById(driverId)
      .then((driver) => setDriver(driver))
      .catch(onFail);
  }, []);

  return driver;
}
