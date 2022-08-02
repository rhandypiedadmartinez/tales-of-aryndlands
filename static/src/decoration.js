class Decoration extends Phaser.GameObjects.Sprite {
  constructor (scene) {
    var x = Phaser.Math.Between(0, gameSettings.fullWidth)
    var y = 160

    var keys = [
      'fence1',
      'fence2',
      'grass1',
      'grass2',
      'rock1',
      'rock2',
      'rock3',
      'lamp'
    ]
    var index = Phaser.Math.Between(0, keys.length)
    var key = keys[index]
    var offset = [15, 15, 25, 22, 18, 18, 16, -5]
    y += offset[index]
    super(scene, x, y, key)
    scene.add.existing(this)
    this.setDepth(Phaser.Math.Between(1,3))
  }
}
