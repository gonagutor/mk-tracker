import Image from "next/image";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserWithData } from "@/lib/definitions";
import Link from "next/link";

const placeholderAlt = "Cargando";
const placeholderImage = "/assets/placeholder.png";

export default function Profile({ user }: Readonly<{ user?: UserWithData }>) {
  return (
    <nav className="flex flex-row justify-between items-center bg-white p-2 rounded-xl">
      <button className="h-12 w-12 p-3 rounded-full bg-accent-pink text-white">
        <FontAwesomeIcon
          className="h-6 w-6"
          icon={faRightFromBracket}
        ></FontAwesomeIcon>
      </button>
      <h1 className="text-xl font-bold text-black">
        {user?.name ?? placeholderAlt}
      </h1>
      <Link href="/profile" className="relative">
        <Image
          className="rounded-full bg-accent-blue relative"
          height={48}
          width={48}
          alt={user?.name ?? placeholderAlt}
          src={user?.profilePicture ?? placeholderImage}
        />
        {user?.invites.length ? (
          <span className="w-4 h-4 absolute bottom-0 right-0 bg-accent-yellow rounded-full text-center text-xs text-black">
            {user.invites.length + 1}
          </span>
        ) : null}
      </Link>
    </nav>
  );
}
