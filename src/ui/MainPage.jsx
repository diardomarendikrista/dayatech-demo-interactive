import Modal from "ui/Modal";
import InteractionHandler from "ui/InteractionHandler";
import Game from "game/Game";
import ControllerMobile from "./ControllerMobile";

export default function MainPage() {

  return (
    <div className="relative w-full h-[100vh]">
      {/* PHASER DIDALAM SINI */}
      <Game />

      {/* Interaksi antara React dan Phaser di sini, pakai window.CustomEvent */}
      <InteractionHandler />

      {/* Modal Dialog */}
      <Modal />

      {/* mobile control */}
      <ControllerMobile />
    </div>
  );
}
