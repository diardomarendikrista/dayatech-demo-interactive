import Phaser from "phaser";
import Player from "game/characters/Player";
import Map from "game/world/Map";
import NPC from "game/characters/NPC";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.mapManager = new Map(this);
  }

  async preload() {
    this.mapManager.preload();
    this.load.spritesheet("player", "player.png", {
      frameWidth: 32,
      frameHeight: 50,
    });
    this.load.spritesheet("mentari", "receptionist.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.spritesheet("doctor", "doctor.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
  }

  async create() {
    this.mapManager.create();

    this.player = new Player(this, 123, 484, "player");

    this.mapManager.addCollisions(this.player); // collision dengan layer obstacle

    this.cameras.main.setBounds(
      0,
      0,
      this.mapManager.map.widthInPixels,
      this.mapManager.map.heightInPixels
    );
    this.cameras.main.startFollow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    this.interactText = this.add
      .text(0, 0, "Tekan X untuk Interaksi", {
        fontSize: "16px",
        fill: "#fff",
        backgroundColor: "#000",
        padding: { x: 5, y: 5 },
      })
      .setVisible(false);

    this.physics.add.overlap(
      this.player,
      this.interactObjects,
      (player, object) => {
        this.interactText
          .setPosition(player.x + 15, player.y - 10)
          .setVisible(true);
        this.interactingObject = object;
      },
      null,
      this
    );

    this.input.keyboard.on("keydown-X", () => {
      if (this.interactingObject) {
        console.log(`Berinteraksi dengan ${this.interactingObject.name}`);

        window.dispatchEvent(
          new CustomEvent("handleDialog", {
            detail: { show: true, dialogWith: this.interactingObject.name },
          })
        );
      }
    });

    const npc1 = new NPC(this, 110, 212, "mentari", "Mentari", 18, 23);
    const npc2 = new NPC(this, 1050, 255, "doctor", "Budi", 12, 17);
    this.npcGroup = this.physics.add.group();
    this.npcGroup.add(npc1);
    this.npcGroup.add(npc2);
    // Tambahkan collider antara player dan npcGroup agar tidak bisa ditembus
    this.physics.add.collider(this.player, this.npcGroup);

    // Pastikan semua NPC immovable
    this.npcGroup.children.iterate((npc) => {
      npc.body.setImmovable(true);
      npc.body.setAllowGravity(false);
    });

    this.canMove = true;

    window.addEventListener("updateCanMove", (event) => {
      this.canMove = event.detail; // Ambil nilai dari React
    });
  }

  update(time, delta) {
    if (this.player && this.canMove) {
      this.player.move(this.cursors, this.wasd);
    }

    if (this.interactingObject) {
      if (!this.physics.overlap(this.player, this.interactingObject)) {
        this.interactText.setVisible(false);
        this.interactingObject = null;
      }
    }
  }
}

export default GameScene;
