import Button from "components/Button";
import { useAtom } from "jotai";
import { cn } from "lib/utils";
import { progressAtom, showDialogAtom } from "store";
import Chat from "ui/Chat";

export default function PsikologDialog() {
  const [showDialog, setShowDialog] = useAtom(showDialogAtom);
  const [progress] = useAtom(progressAtom);

  const handleClose = () => {
    setShowDialog(false);
  };

  let initialMessages = [{ message: "Halooo aku Psikolog" }];
  if (progress.test) {
    initialMessages.push({ message: "Hasil nilai mu adalah 100" });
    initialMessages.push({
      message:
        "Dolor veniam laboris ullamco eiusmod magna aliqua elit. Excepteur sint aute elit commodo. Cupidatat dolor occaecat officia veniam mollit mollit velit minim ea commodo qui mollit cillum. Aute voluptate cupidatat excepteur consectetur occaecat culpa quis adipisicing minim. Tempor eiusmod aliquip ut esse labore nulla qui aliqua veniam adipisicing id ut. Ex nulla quis sunt nulla est ea laborum ad aliquip non. Exercitation incididunt labore labore officia et labore pariatur mollit labore consequat exercitation Lorem.",
    });
  } else if (progress.mentari) {
    initialMessages.push({
      message:
        "Untuk mendapatkan hasil wish, kamu harus mengerjakan soal test di ruang sebelah",
    });
  } else {
    initialMessages.push({
      message: "Apa yang kamu lakukan disini?",
    });
  }

  return (
    <div className={cn("flex flex-col md:flex-row gap-3 min-h-[80vh]")}>
      <div className="m-auto overflow-hidden md:min-w-[200px] md:max-w-[200px]">
        <img
          className="min-w-auto h-[200px] md:min-w-[200px] md:h-auto"
          src="psikolog.png"
          alt="psikolog"
        />
      </div>
      <div className="flex-1 flex-col justify-center">
        <div className="text-xl mb-[30px]">Psikolog</div>
        {/* ngakalin reset chat */}
        {showDialog && (
          <Chat
            id="psikolog"
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
