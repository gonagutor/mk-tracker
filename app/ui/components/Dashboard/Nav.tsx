import { Driver, Kart, Wheel, Wing } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const placeholderAlt = "Cargando";
const placeholderImage = "/assets/placeholder.png";

const LinkToKart = ({ src, alt }: Readonly<{ src?: string; alt?: string }>) => (
  <Link
    href="/kart"
    className="bg-accent-pink rounded-lg h-16 w-16 flex flex-col items-center justify-center"
  >
    <Image
      src={src ?? placeholderImage}
      alt={alt ?? placeholderAlt}
      width={64}
      height={64}
    />
  </Link>
);

export default function Nav({
  kart,
  wing,
  wheel,
  driver,
}: Readonly<{
  kart?: Kart;
  wing?: Wing;
  wheel?: Wheel;
  driver?: Driver;
}>) {
  return (
    <section className="fixed bottom-2 left-2 right-2">
      <section className="flex flex-row justify-between items-center bg-white-less-transparent mb-2 p-4 rounded-lg text-black">
        <Link
          href="/character"
          className="bg-accent-blue rounded-lg w-20 h-20 flex flex-col items-center justify-center"
        >
          <Image
            className="object-contain"
            src={driver?.icon ?? placeholderImage}
            alt={driver?.name ?? placeholderAlt}
            width={72}
            height={72}
          />
        </Link>

        <div className="grid grid-cols-3 gap-2">
          <LinkToKart src={kart?.icon} alt={kart?.name} />
          <LinkToKart src={wheel?.icon} alt={wheel?.name} />
          <LinkToKart src={wing?.icon} alt={wing?.name} />
        </div>
      </section>

      <div className="relative">
        <button
          disabled={!wing || !driver || !kart || !wheel}
          className="button-red rounded-lg bg-accent-yellow w-full h-16 font-bold text-lg text-mk-red disabled:opacity-50"
        >
          Añadir puntuación
        </button>
      </div>
    </section>
  );
}
