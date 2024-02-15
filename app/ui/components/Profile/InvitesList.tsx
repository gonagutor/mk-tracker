import { UserWithData } from "@/lib/definitions";
import { faCheck, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InvitesList({
  user,
}: Readonly<{ user: UserWithData | undefined }>) {
  return (
    <section className="flex flex-col m-4 bg-white text-black rounded-xl p-4">
      <h1 className="font-bold text-xl">Invitaciones en espera</h1>
      {(user?.invites ?? []).map((invite) => (
        <div key={invite.id} className="bg-accent-yellow rounded-xl">
          <h4>{invite.name}</h4>
          <div>
            <button className="bg-accent-pink text-white">
              <FontAwesomeIcon icon={faCross} />
            </button>
            <button className="bg-accent-blue text-white">
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
