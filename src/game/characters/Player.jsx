import Phaser from "phaser";
import { setIdleFrame } from "game/utils/animationUtils";

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.lastPosition = { x, y, anim: "", moving: false, currentRoom: "" };

    this.createAnimations(scene);

    this.sendUpdate = this.sendPositionUpdate;
  }

  createAnimations(scene) {
    scene.anims.create({
      key: "walk-down",
      frames: scene.anims.generateFrameNumbers("player", {
        start: 19,
        end: 23,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-left",
      frames: scene.anims.generateFrameNumbers("player", {
        start: 12,
        end: 17,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-right",
      frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-up",
      frames: scene.anims.generateFrameNumbers("player", { start: 6, end: 11 }),
      frameRate: 8,
      repeat: -1,
    });
  }

  move(cursors, wasd, mobileInput) {
    const isRunning = cursors.shift?.isDown || wasd.shift?.isDown;
    const speed = isRunning ? 400 : 200;
    let anim = this.lastPosition.anim;
    let moving = false;

    this.setVelocity(0);

    if (cursors.left.isDown || wasd.left.isDown || mobileInput.left) {
      this.setVelocityX(-speed);
      this.anims.play("walk-left", true);
      anim = "walk-left";
      moving = true;
    } else if (cursors.right.isDown || wasd.right.isDown || mobileInput.right) {
      this.setVelocityX(speed);
      this.anims.play("walk-right", true);
      anim = "walk-right";
      moving = true;
    } else if (cursors.up.isDown || wasd.up.isDown || mobileInput.up) {
      this.setVelocityY(-speed);
      this.anims.play("walk-up", true);
      anim = "walk-up";
      moving = true;
    } else if (cursors.down.isDown || wasd.down.isDown || mobileInput.down) {
      this.setVelocityY(speed);
      this.anims.play("walk-down", true);
      anim = "walk-down";
      moving = true;
    } else {
      setIdleFrame(this, anim);
      moving = false;
      this.anims.stop();
    }

    // **Cek apakah ada perubahan posisi atau animasi**
    const positionChanged =
      this.x !== this.lastPosition.x || this.y !== this.lastPosition.y;
    const animChanged = anim !== this.lastPosition.anim;
    const movementStateChanged = moving !== this.lastPosition.moving;

    if (positionChanged || animChanged || movementStateChanged) {
      this.lastPosition = {
        x: this.x,
        y: this.y,
        anim,
        moving,
        currentRoom: this.lastPosition.currentRoom,
      };
      this.sendUpdate();
    }

    return moving ? this.lastPosition : null;
  }

  sendPositionUpdate() {
    // console.log(this.lastPosition, "pos");
  }
}

export default Player;
