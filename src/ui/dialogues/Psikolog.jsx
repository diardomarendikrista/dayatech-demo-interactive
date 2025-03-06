import Button from "components/Button";
import { useAtom } from "jotai";
import { progressAtom, showDialogAtom } from "store";

export default function PsikologDialog() {
  const [, setShowDialog] = useAtom(showDialogAtom);
  const [progress] = useAtom(progressAtom);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="m-auto overflow-hidden">
        <img
          className="w-auto h-[200px] md:min-w-[200px] md:h-auto"
          src="psikolog.png"
          alt="psikolog"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-2 text-lg">Halo, aku Psikolog</div>

        {progress.test ? (
          <>
            <div>Hasil nilai mu adalah 100</div>
            <div>
              Nostrud do commodo proident excepteur aute excepteur nisi labore
              anim dolore proident aliquip sint id. Aliqua incididunt amet
              adipisicing mollit veniam exercitation minim et ea aute sint in
              reprehenderit. Laboris cillum minim aute dolore et magna id
              laboris esse consectetur non consectetur laboris.
            </div>
          </>
        ) : progress.mentari ? (
          <>
            <div>
              Untuk mendapatkan hasil wish, kamu harus mengerjakan soal test di
              ruang sebelah
            </div>
          </>
        ) : (
          <>
            <div>Apa yang kamu lakukan disini?</div>
          </>
        )}

        <div className="m-auto md:m-0 mt-3">
          <Button onClick={() => handleClose()}>Mengerti</Button>
        </div>
      </div>
    </div>
  );
}
