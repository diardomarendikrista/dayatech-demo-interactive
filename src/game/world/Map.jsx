class Map {
  constructor(scene) {
    this.scene = scene;
    this.outdoorPropsLayer = null;
  }

  preload() {
    this.scene.load.image("roomTiles", "Room_Builder_free_32x32.png");
    this.scene.load.image("furnitureTiles", "Interiors_free_32x32.png");
    this.scene.load.image("outdoorTiles", "terrain_tiles_v2.png");
    this.scene.load.image(
      "outdoorProps",
      "assets_spritesheet_v2_fix_diardo.png"
    );
    this.scene.load.tilemapTiledJSON("map", "demo-interactive.json");
  }

  create() {
    const map = this.scene.make.tilemap({
      key: "map",
      tileWidth: 32,
      tileHeight: 32,
    });

    const baseTile = map.addTilesetImage(
      "Room_Builder_free_32x32",
      "roomTiles"
    );
    const furnitureTile = map.addTilesetImage(
      "Interiors_free_32x32",
      "furnitureTiles"
    );
    const outdoorTile = map.addTilesetImage("terrain_tiles_v2", "outdoorTiles");
    const outdoorProps = map.addTilesetImage(
      "assets_spritesheet_v2_fix_diardo",
      "outdoorProps"
    );

    map.createLayer("outdoor1", outdoorTile, 0, 0);
    const outdoorPropsLayer = map.createLayer("outdoor2", outdoorProps, 0, 0);
    map.createLayer("floor", baseTile, 0, 0);
    map.createLayer("layer1", furnitureTile, 0, 0);
    map.createLayer("layer2", furnitureTile, 0, 0);
    map.createLayer("layer3", furnitureTile, 0, 0);
    const overheadOutdoorLayer = map.createLayer(
      "outdoorOverhead",
      outdoorProps,
      0,
      0
    );
    overheadOutdoorLayer.setDepth(20); // ini bagian atau lapisan tertinggi di game (rimbunan pohon, dsb)
    this.outdoorPropsLayer = outdoorPropsLayer; // disimpan ke state, karena dia punya property collide yang akan dipanggil nanti di addCollisions()

    // keperluan kamera
    this.scene.physics.world.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels
    );

    this.map = map;
    this.createInteractableObjects();
  }

  addCollisions(player) {
    // ambil dari layer obstacles
    const obstaclesLayer = this.map.getObjectLayer("obstacles");
    obstaclesLayer.objects.forEach((obj) => {
      const obstacle = this.scene.physics.add.staticBody(
        obj.x,
        obj.y,
        obj.width,
        obj.height
      );
      this.scene.physics.add.collider(player, obstacle);
    });

    // ambil property collide dari outdoorPropsLayer
    this.outdoorPropsLayer.setCollisionByProperty({ collide: true });
    this.scene.physics.add.collider(player, this.outdoorPropsLayer);
  }

  createInteractableObjects() {
    this.scene.interactObjects = this.scene.physics.add.staticGroup();

    const interactLayer = this.map.getObjectLayer("interactables");
    interactLayer.objects.forEach((obj) => {
      const interactiveObj = this.scene.add.rectangle(
        obj.x + obj.width / 2, // Sesuaikan agar posisi sesuai dengan Tilemap
        obj.y + obj.height / 2,
        obj.width,
        obj.height
      );
      this.scene.physics.add.existing(interactiveObj, true);
      interactiveObj.name =
        obj.properties.find((p) => p.name === "name")?.value || "Unknown";
      this.scene.interactObjects.add(interactiveObj);
    });
  }

  showInteractMessage(player, object) {
    this.scene.showInteractionMessage(object.name); // Panggil method di GameScene
  }
}

export default Map;
