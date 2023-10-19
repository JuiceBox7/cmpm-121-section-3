// class Enemy extends Phaser.GameObjects.Sprite {
//   value: number;
//   speed: number;
//   scene: Phaser.Scene;

//   constructor(
//     scene: Phaser.Scene,
//     x: number,
//     y: number,
//     texture: string,
//     frame: number,
//     value: number,
//   ) {
//     super(scene, x, y, texture, frame);
//     this.scene = scene;
//     scene.add.existing(this);
//     this.value = value;
//     this.speed = 5;
//   }

//   update() {
//     this.x -= this.speed;
//     if (this.x <= 0 - this.width) {
//       this.reset();
//     }
//   }

//   reset() {
//     this.x = this.scene.game.config.width as number;
//   }
// }
