import acceptInvite from "@/lib/actions/tournament/acceptInvite";
import rejectInvite from "@/lib/actions/tournament/rejectInvite";
import { TOKEN_KEY } from "@/lib/constants";
import { useState } from "react";

export default function useRejectAcceptInvite(tournamentId: string) {
  const [error, setError] = useState();
  const token = localStorage.getItem(TOKEN_KEY);

  const accept = (onFinished?: VoidFunction) => {
    if (!token) return;
    acceptInvite(token, tournamentId)
      .then(() => setError(undefined))
      .catch((e) => setError(e.message))
      .finally(onFinished);
  };

  const reject = (onFinished?: VoidFunction) => {
    if (!token) return;
    rejectInvite(token, tournamentId)
      .then(() => setError(undefined))
      .catch((e) => setError(e.message))
      .finally(onFinished);
  };

  return { accept, reject, error };
}
