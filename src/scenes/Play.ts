import * as Phaser from "phaser";

import starfieldUrl from "/assets/starfield.png";
import ufoURL from "/assets/ufo.png";

export default class Play extends Phaser.Scene {
  fire?: Phaser.Input.Keyboard.Key;
  left?: Phaser.Input.Keyboard.Key;
  right?: Phaser.Input.Keyboard.Key;

  starfield?: Phaser.GameObjects.TileSprite;
  player?: Phaser.GameObjects.Shape;

  rotationSpeed = Phaser.Math.PI2 / 1000; // radians per millisecond
  playerX?: number;
  playerY?: number;
  // enemy?: Enemy;
  isFiring: Boolean = false;

  constructor() {
    super("play");
  }

  preload() {
    this.load.image("starfield", starfieldUrl);
    this.load.image("ufo", ufoURL);
  }

  #addKey(
    name: keyof typeof Phaser.Input.Keyboard.KeyCodes,
  ): Phaser.Input.Keyboard.Key {
    return this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes[name]);
  }

  create() {
    this.fire = this.#addKey("F");
    this.left = this.#addKey("LEFT");
    this.right = this.#addKey("RIGHT");
    const gameWidth = this.game.config.width as number;
    const gameLength = this.game.config.height as number;
    this.playerY = gameLength - 50;
    this.playerX = 100;

    // this.enemy = new Enemy(this, 100, 100, "ufo", 0, 30);

    this.starfield = this.add
      .tileSprite(0, 0, gameWidth, gameLength, "starfield")
      .setOrigin(0, 0);

    this.player = this.add.rectangle(
      this.playerX,
      this.playerY,
      50,
      50,
      0xddb400,
    );
  }

  update() {
    this.starfield!.tilePositionX -= 4;
    if (!this.isFiring) {
      if (this.left!.isDown) {
        this.playerX! -= 5;
        this.player!.setPosition(this.playerX, this.playerY, 0, 0);
      }
      if (this.right!.isDown) {
        this.playerX! += 5;
        this.player!.setPosition(this.playerX, this.playerY, 0, 0);
      }
    }

    // if (Phaser.Input.Keyboard.JustDown() && !this.isFiring) {
    //   this.isFiring = true;
    // }

    if (this.playerY! >= 100) {
      this.playerY! -= 5;
      this.player!.setPosition(this.playerX, this.playerY, 0, 0);
    }
  }
}
