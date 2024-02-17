import { UserWithData } from "@/lib/definitions";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tournament } from "@prisma/client";
import moment from "moment";
import useRejectAcceptInvite from "../../hooks/useRejectAcceptInvite";

const InvitesItem = ({ invite }: { invite: Tournament }) => {
  const [accept, reject, error] = useRejectAcceptInvite(invite.id);

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-gray-100 text-black rounded-xl">
      <div>
        <h4 className="text-lg font-bold">{invite.name}</h4>
        <span className={`text-sm font-light text-gray-600`}>
          {moment(invite.start).format("DD/MM/YYYY")}-
          {moment(invite.end).format("DD/MM/YYYY")}
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => reject()}
          className="h-12 w-12 rounded-full bg-accent-pink text-white"
        >
          <FontAwesomeIcon className="p-4" icon={faX} />
        </button>
        <button
          onClick={() => accept()}
          className="h-12 w-12 rounded-full bg-accent-blue text-white"
        >
          <FontAwesomeIcon className="p-4" icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default function InvitesList({
  user,
}: Readonly<{ user: UserWithData | undefined }>) {
  return (
    <section className="flex flex-col m-4 gap-2 bg-white text-black rounded-xl p-4">
      <h1 className="font-bold text-xl mb-2">Invitaciones en espera</h1>
      {(user?.invites ?? []).map((invite) => (
        <InvitesItem key={invite.id} invite={invite} />
      ))}
    </section>
  );
}
