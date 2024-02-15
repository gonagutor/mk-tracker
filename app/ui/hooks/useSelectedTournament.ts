import getTournamentById from "@/lib/actions/tournament/getTournamentById";
import { TOURNAMENT_KEY } from "@/lib/constants";
import { Tournament } from "@prisma/client";
import { useEffect, useState } from "react";

export default function useSelectedTournament() {
  const [tournament, setTournament] = useState<Tournament>();

  const refreshSelectedTournament = () => {
    const tournamentId = localStorage.getItem(TOURNAMENT_KEY);
    if (!tournamentId) {
      if (tournament) setTournament(undefined);
      return;
    }

    getTournamentById(tournamentId)
      .then((tournament) => setTournament(tournament))
      .catch(() => {
        localStorage.removeItem(TOURNAMENT_KEY);
        setTournament(undefined);
      });
  };

  useEffect(refreshSelectedTournament, []);

  return [tournament, refreshSelectedTournament];
}
