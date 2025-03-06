import Button from "components/Button";
import { useAtom } from "jotai";
import { showDialogAtom } from "store";

export default function InstrukturDialog() {
  const [, setShowDialog] = useAtom(showDialogAtom);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-center">
        <div className="mb-2 text-lg">Catatan Pengawas</div>
        <div>Silahkan duduk di kursi yang kosong dan kerjakan soalnya.</div>
        <div>Kalau belum bisa mengerjakan, tanya mentari dulu.</div>

        <div className="m-auto md:m-0 mt-3">
          <Button onClick={() => handleClose()}>Tutup Dialog</Button>
        </div>
      </div>
    </div>
  );
}
