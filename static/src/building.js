class Building extends Phaser.GameObjects.Sprite {
    constructor (scene) {
      var x = Phaser.Math.Between(350, gameSettings.fullWidth)
      var y = 55
  
      super(scene, x, y, 'shop')
      this.play('shop_anim')
      this.setOrigin(0,0)
      scene.add.existing(this)
      scene.buildings.add(this)
      this.setDepth(2)

    }
  }
  