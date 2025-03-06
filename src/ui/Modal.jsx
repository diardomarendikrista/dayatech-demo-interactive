import { useAtom } from "jotai";
import { cn } from "lib/utils";
import { dialogWithAtom, showDialogAtom } from "store";
import MentariDialog from "./dialogues/Mentari";
import TestDialog from "./dialogues/Test";
import PsikologDialog from "./dialogues/Psikolog";
import InstrukturDialog from "./dialogues/Instruktur";

export default function Modal() {
  const [, setShowDialog] = useAtom(showDialogAtom);
  const [dialogWith] = useAtom(dialogWithAtom);

  return (
    <div
      className={cn(
        "relative absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] rounded-[8px]",
        "w-[95%] md:w-[50%] p-[20px] max-h-[90%] overflow-y-auto",
        "shadow-[0px_0px_10px_0px_rgba(0,0,0,0.75)]",
        "z-50"
      )}
    >
      {dialogWith !== "mentari" && (
        <div className="absolute top-[10px] right-[20px]">
          <div
            className="cursor-pointer"
            onClick={() => setShowDialog(false)}
          >
            X
          </div>
        </div>
      )}

      {dialogWith === "mentari" && <MentariDialog />}
      {dialogWith === "kerjakan" && <TestDialog />}
      {dialogWith === "instruktur" && <InstrukturDialog />}
      {dialogWith === "psikolog" && <PsikologDialog />}
    </div>
  );
}
