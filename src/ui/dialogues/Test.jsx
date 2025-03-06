import Button from "components/Button";
import { useAtom } from "jotai";
import { useState } from "react";
import { progressAtom, showDialogAtom } from "store";

export default function TestDialog() {
  const [, setShowDialog] = useAtom(showDialogAtom);
  const [progress, setProgress] = useAtom(progressAtom);

  const [form, setForm] = useState({
    soal1: "",
    soal2: "",
    soal3: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setProgress((prev) => ({ ...prev, test: true }));
    setShowDialog(false);
  };

  return (
    <div className="flex gap-3">
      {progress.mentari && (
        <>
          {progress.test ? (
            <div className="m-auto text-center">
              <div>Kamu sudah mengerjakan test</div>
              <div>Silahkan ke ruang terahir</div>
            </div>
          ) : (
            <div className="flex w-full flex-col justify-center gap-2">
              <div>Test Wish</div>

              <div className="flex flex-col gap-2">
                Anim velit mollit sit aliqua enim Lorem tempor ad do amet
                commodo. Nisi reprehenderit reprehenderit amet officia est ea
                aute sit eiusmod. Sunt eiusmod officia eiusmod minim consequat
                qui Lorem sit adipisicing culpa tempor enim culpa. Qui velit qui
                esse esse esse minim excepteur. Id deserunt in officia aute
                veniam deserunt excepteur fugiat quis amet sint officia
                voluptate. Sint aliqua laborum aliquip est minim ut
                reprehenderit aute. Dolore minim ullamco tempor enim incididunt
                elit laborum esse mollit non eiusmod. Id occaecat culpa nostrud
                cupidatat elit ea est deserunt sit. Non amet non Lorem tempor
                nulla aliquip nostrud consequat reprehenderit. Officia tempor
                qui irure consequat incididunt do proident quis excepteur
                laborum Lorem eu enim. Id irure reprehenderit reprehenderit
                aliqua labore laboris labore cupidatat tempor magna ipsum
                excepteur proident. Consequat adipisicing sint non ex
                adipisicing esse voluptate dolore laborum. Ex id pariatur elit
                exercitation sit anim quis labore. Esse minim laborum magna
                culpa.
              </div>

              <div className="flex gap-4">
                <div>
                  <Button onClick={() => handleSubmit(false)}>
                    Submit Test
                  </Button>
                </div>
                <Button onClick={() => setShowDialog(false)}>Batalkan</Button>
              </div>
            </div>
          )}
        </>
      )}

      {!progress.mentari && (
        <div className="flex flex-col justify-center items-center w-full">
          <div>Ini adalah meja</div>
          <div className="text-sm mt-5">
            Tips: Silahkan tanya ke Mentari apa yang harus dilakukan
          </div>
        </div>
      )}
    </div>
  );
}
