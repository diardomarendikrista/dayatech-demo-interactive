import Button from "components/Button";
import { useAtom } from "jotai";
import { cn } from "lib/utils";
import { useEffect, useState } from "react";
import { dialogWithAtom, progressAtom, showDialogAtom } from "store";
import Chat from "ui/Chat";

export default function MentariDialog() {
  const [dialogWith] = useAtom(dialogWithAtom);
  const [, setShowDialog] = useAtom(showDialogAtom);
  const [, setProgress] = useAtom(progressAtom);

  const [initialMessages] = useState([
    { message: "Halooo aku Mentari" },
    {
      message:
        "Untuk mendapatkan hasil wish, kamu harus mengerjakan soal test di ruang sebelah.",
    },
    {
      message:
        "Setelah mengerjakan, kamu bisa langsung berbicara pada bapack Psikolog di ruangan paling kanan.",
    },
  ]);
  const [showChat, setShowChat] = useState(false);

  const handleClose = () => {
    setProgress((prev) => ({ ...prev, mentari: true }));
    setShowDialog(false);
  };

  useEffect(() => {
    if (dialogWith === "mentari") {
      setShowChat(true);
    }
  }, [dialogWith]);

  return (
    <div
      className={cn("flex flex-col md:flex-row gap-3 min-h-[80vh]", {
        hidden: dialogWith !== "mentari",
      })}
    >
      <div className="m-auto overflow-hidden min-h-[200px] md:min-h-auto md:min-w-[200px] md:max-w-[200px]">
        <img
          className="w-auto h-[200px] md:min-w-[200px] md:max-w-[200px] md:h-auto"
          src="mentari.png"
          alt="mentari"
        />
      </div>
      <div className="flex-1 min-h-0">
        <div className="text-xl mb-[30px]">Mentari</div>
        {showChat && (
          <Chat
            id="mentari"
            initialMessages={initialMessages}
            height={"80%"}
          />
        )}
      </div>

      <div className="absolute top-0 right-[10px]">
        <Button onClick={() => handleClose()}>
          <b>x</b>
        </Button>
      </div>
    </div>
  );
}
