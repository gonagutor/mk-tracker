import acceptInvite from "@/lib/actions/tournament/acceptInvite";
import rejectInvite from "@/lib/actions/tournament/rejectInvite";
import { TOKEN_KEY } from "@/lib/constants";
import { useState } from "react";

export default function useRejectAcceptInvite(
  tournamentId: string
): [() => void, () => void, string | undefined] {
  const [error, setError] = useState();
  const token = localStorage.getItem(TOKEN_KEY);

  const accept = () => {
    if (!token) return;
    acceptInvite(token, tournamentId)
      .then(() => setError(undefined))
      .catch((e) => setError(e.message));
  };

  const reject = () => {
    if (!token) return;
    rejectInvite(token, tournamentId)
      .then(() => setError(undefined))
      .catch((e) => setError(e.message));
  };

  return [accept, reject, error];
}
