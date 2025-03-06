import Modal from "ui/Modal";
import InteractionHandler from "ui/InteractionHandler";
import { useAtom } from "jotai";
import { showDialogAtom } from "store";
import Game from "game/Game";

export default function MainPage() {
  const [showModal] = useAtom(showDialogAtom);

  return (
    <div className="relative w-full h-[100vh]">
      {/* PHASER DIDALAM SINI */}
      <Game />

      {/* Interaksi antara React dan Phaser di sini, pakai window.CustomEvent */}
      <InteractionHandler />

      {/* Modal Dialog */}
      {showModal && <Modal />}
    </div>
  );
}
