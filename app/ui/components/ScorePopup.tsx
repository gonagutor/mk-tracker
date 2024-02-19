import { TournamentWithData } from "@/lib/definitions";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScorePopup({
  open,
  setOpen,
  tournament,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  tournament: TournamentWithData | undefined;
}) {
  if (!open || !tournament) return null;

  return (
    <div className="fixed bg-black bg-opacity-25 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-black rounded-xl w-full p-4">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-lg font-bold">Añadir puntuación</h2>
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faClose} size="2xl" />
          </button>
        </div>
        <form className="flex flex-col">
          <input type="number" max={60} min={0} placeholder="00" />
          <button type="submit">Guardar puntuación</button>
        </form>
      </div>
    </div>
  );
}
