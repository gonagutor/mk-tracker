import React, { createRef } from "react";
import Loader from "@/app/ui/components/Loader";
import Image from "next/image";
import { Driver, Wheel, Wing } from "@prisma/client";

type Selectable = Wing | Driver | Wheel;

export default function Selector({
  items,
  setSelected = () => {},
  selected,
}: Readonly<{
  items: Array<Selectable> | undefined;
  setSelected?: (item?: Selectable) => void;
  selected?: Selectable;
}>) {
  const ref = createRef<HTMLUListElement>();
  const onScroll: React.UIEventHandler<HTMLUListElement> = (e) => {
    if (!items) return;

    const selectedIndex = Math.floor((e.currentTarget.scrollTop * 3) / 288);
    setSelected(items[selectedIndex]);
  };

  return (
    <ul
      className="relative overflow-scroll snap-y snap-mandatory py-24"
      ref={ref}
      onScroll={onScroll}
    >
      {items ? (
        items.map((item) => (
          <li key={item.id} className="snap-center py-2">
            <Image src={item.icon} width={200} height={128} alt={item.name} />
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
}
