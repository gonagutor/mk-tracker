"use client";

import { ChangeEventHandler, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import useProtected from "@/app/ui/hooks/useProtected";
import RaceTitle from "@/app/ui/components/RaceTitle";
import TournamentList from "@/app/ui/components/Profile/TournamentList";
import InvitesList from "../ui/components/Profile/InvitesList";
import updateUser from "@/lib/actions/auth/updateUser";
import { TOKEN_KEY } from "@/lib/constants";

const placeholderAlt = "Cargando";
const placeholderImage = "/assets/placeholder.png";

export default function ProfilePage() {
  const { user, refreshUser } = useProtected();
  const filePickerRef = createRef<HTMLInputElement>();

  const onSelectImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    const convertBase64 = (file: File) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });

    const newProfilePic = e.currentTarget.files?.item(0);
    if (!newProfilePic) return;

    convertBase64(newProfilePic)
      .then((base64ProfilePic) =>
        updateUser(localStorage.getItem(TOKEN_KEY)!, {
          profilePicture: base64ProfilePic as string,
        })
          .then(refreshUser)
          .catch(refreshUser)
      )
      .catch(() => console.log("error reading image"));
  };

  return (
    <main className="relative">
      <RaceTitle className="px-4 justify-between">
        <Link href="/" className="w-6 block">
          <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
        </Link>
        <h1 className="place-self-center">Perfil</h1>
        <div className="w-6 block"></div>
      </RaceTitle>

      <section className="m-4">
        <input
          onChange={onSelectImage}
          ref={filePickerRef}
          type="file"
          accept="image/*"
          hidden
        />
        <button
          onClick={() => filePickerRef.current?.click()}
          className="relative bg-white rounded-full"
        >
          <Image
            priority
            className="rounded-full"
            width={1024}
            height={1024}
            alt={user?.name ?? placeholderAlt}
            src={user?.profilePicture ?? placeholderImage}
          />
          <FontAwesomeIcon
            className="absolute bottom-6 right-6 bg-accent-blue min-w-8 min-h-8 h-8 w-8 p-4 rounded-full"
            size="2x"
            icon={faPen}
          />
        </button>

        <h2 className="text-xl font-bold text-center mt-4">
          {user?.name ?? placeholderAlt}
        </h2>
      </section>

      <TournamentList user={user} />
      <InvitesList refreshUser={refreshUser} user={user} />
    </main>
  );
}
