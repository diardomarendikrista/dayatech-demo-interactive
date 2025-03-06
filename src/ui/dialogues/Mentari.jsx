import Button from "components/Button";
import { useAtom } from "jotai";
import { progressAtom, showDialogAtom } from "store";

export default function MentariDialog() {
  const [, setShowDialog] = useAtom(showDialogAtom);
  const [, setProgress] = useAtom(progressAtom);

  const handleClose = () => {
    setProgress((prev) => ({ ...prev, mentari: true }));
    setShowDialog(false);
  };

  return (
    <div className="flex gap-3">
      <div className="min-w-[200px] max-w-[200px]">
        <img
          width={"100%"}
          src="mentari.png"
          alt="mentari"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-2 text-lg">Halooo aku Mentari</div>
        <div>
          Untuk mendapatkan hasil wish, kamu harus mengerjakan soal test di
          ruang sebelah.
        </div>
        <div>
          Setelah mengerjakan, kamu bisa langsung berbicara pada bapack Psikolog
          di ruangan paling kanan
        </div>

        <div>
          <Button onClick={() => handleClose()}>Mengerti</Button>
        </div>
      </div>
    </div>
  );
}
