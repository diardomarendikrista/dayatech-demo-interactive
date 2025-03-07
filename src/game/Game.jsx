import { useEffect } from "react";
import Phaser from "phaser";
import GameScene from "./schenes/GameScene";

function Game() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: "game-container",
      pixelArt: true, // fix line on floor
      physics: {
        default: "arcade",
        arcade: { debug: true },
      },
      scene: [GameScene],
    };

    const game = new Phaser.Game(config);

    // Update ukuran game saat window di-resize
    const resizeGame = () => {
      game.scale.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resizeGame);

    return () => {
      window.removeEventListener("resize", resizeGame);
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
}

export default Game;
