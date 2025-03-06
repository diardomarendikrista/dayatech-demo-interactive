import Phaser from "phaser";

class NPC extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, name, start, end) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.texture = texture;
    this.start = start;
    this.end = end;

    this.body.setAllowGravity(false);
    this.body.setImmovable(true);
    this.body.setVelocity(0, 0); // Pastikan NPC diam
    this.setDepth(1);

    this.setDepth(1);
    this.setSize(30, 40).setOffset(0, 22);
    this.name = name; // Nama NPC untuk interaksi
    this.createAnimations(scene);
  }

  createAnimations(scene) {
    const animKey = `idle-${this.texture}`; // Animasi unik per texture

    scene.anims.create({
      key: animKey,
      frames: scene.anims.generateFrameNumbers(this.texture, {
        start: this.start,
        end: this.end,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.play(animKey);
  }
}

export default NPC;
