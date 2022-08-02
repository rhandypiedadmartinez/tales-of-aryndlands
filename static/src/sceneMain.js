// /** @type {import("../typings/phaser")} */

class Scene2 extends Phaser.Scene {
  constructor () {
    super('playGame')
  }

  create () {

    this.landY = 150
    this.heroOffsetY = 2

    this.heroHealth = 100
    this.heroSpeed = new Phaser.Math.Vector2(0, 0)

    this.beamSound = this.sound.add('audio_beam')
    this.explosionSound = this.sound.add('audio_explosion')
    this.pickupSound = this.sound.add('audio_pickup')

    this.hitswoosh = this.sound.add('hit-swoosh', { loop: true })
    this.hitswoosh2 = this.sound.add('hit-swoosh', { loop: false })

    this.swordlash = this.sound.add('swordlasharmor', { loop: true })
    this.swordcut = this.sound.add('swordcutarmor', { loop: true })

    this.music = this.sound.add('music')

    this.isRestartDialogCreated = false
    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 1,
      seek: 1,
      loop: false,
      delay: 0
    }

    this.music.play(musicConfig)

    this.score = 0
    //this.background = this.add.image(0,0,"sky")
    this.bg_1 = this.add.tileSprite(0, 0, config.width, config.height, 'bg_1')
    this.bg_1.setOrigin(0, 0)
    this.bg_1.setScrollFactor(0)

    this.bg_2 = this.add.tileSprite(
      0,
      0,
      game.config.width,
      game.config.height,
      'bg_2'
    )
    this.bg_2.setOrigin(0, 0)
    this.bg_2.setScrollFactor(0)

    this.miko = this.physics.add.sprite(config.width / 2 - 30, 130, 'miko')
    this.miko.setScale(0.15)
    this.miko.play('miko_anim')

    this.shopPaddingTop = 47

    this.buildings = this.add.group()
    //next time gawan to ng class pati other background decorations
    this.shop = this.physics.add.sprite(50, 55, 'shop')
    this.shop.setOrigin(0, 0)
    this.shop.play('shop_anim')
    this.shop.setDepth(2)

    this.bg_3 = this.add.tileSprite(
      0,
      0,
      game.config.width,
      game.config.height,
      'bg_3'
    )
    this.bg_3.setOrigin(0, 0)
    this.bg_3.setScrollFactor(0)

    this.hero = this.physics.add.sprite(this.shop.x + 100, 52, 'hero_idle')
    this.hero.play('hero_pray_anim')
    // this.hero.setCollideWorldBounds(true)
    //this.sk = this.physics.add.sprite(config.width/2 - 8, 160, "skeleton_idle")
    //this.sk.play("skeleton_idle_anim")

    this.myCam = this.cameras.main
    this.myCam.setBounds(0, 0, gameSettings.fullWidth, game.config.height)
    this.myCam.startFollow(this.hero)
    this.cursors = this.input.keyboard.createCursorKeys()

    this.ground = this.add.tileSprite(0, 0, game.config.width, 48, 'soil')
    this.ground.setOrigin(0, 0)
    this.ground.setScrollFactor(0)
    this.ground.y = 12 * 14

    this.hero.setDepth(2)
    this.miko.setDepth(1)
    this.ground.setDepth(3)

    // this.player =  this.physics.add.sprite(config.width/2 -8,config.height-64,"player")
    // this.player.play("thrust")
    // this.cursorKeys = this.input.keyboard.createCursorKeys()
    // this.player.setCollideWorldBounds(true)

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )
    //      this.projectiles = this.add.group()

    this.keyHeal = this.input.keyboard.addKey('H') // Get key object

    //this.add.image(100,100,'ysnail')
    // this.snail1 = this.add.image(config.width/2-100, config.height/2, 'snail')
    // this.snail2 = this.add.image(config.width/2, config.height/2, 'snail')
    // this.snail3 = this.add.image(config.width/2+100, co  nfig.height/2, 'snail')

    // this.obj1 = this.add.sprite(config.width/2-100, config.height/2, 'ship1')
    // this.obj2 = this.add.sprite(config.width/2, config.height/2, 'ship2')
    // this.obj3 = this.add.sprite(config.width/2+100, config.height/2, 'ship3')

    // this.powerUps = this.physics.add.group()

    // var maxObjects = 4
    // for (var i = 0; i <= maxObjects; i++){
    //     var powerUp = this.physics.add.sprite(16,16,"power-up")
    //     this.powerUps.add(powerUp)
    //     powerUp.setRandomPosition(0,0,config.width,config.height)

    //     if (Math.random() > 0.5){
    //         powerUp.play("red")
    //     } else {
    //         powerUp.play("gray")
    //     }

    //     powerUp.setVelocity(100,100)
    //     powerUp.setCollideWorldBounds(true)
    //     powerUp.setBounce(1)

    // }

    // this.projectiles = this.add.group();

    // for(var i = 0; i < this.projectiles.getChildren().length; i++){
    //     var beam = this.projectiles.getChildren()[i];
    //     beam.update();
    // }

    //this.obj1.setScale(2)
    //this.obj2.setScale(2)this.
    //this.obj3.setScale(2)

    // this.obj1.play("ship1_anim")
    // this.obj2.play("ship2_anim")
    // this.obj3.play("ship3_anim")

    // this.obj1.setInteractive()
    // this.obj2.setInteractive()
    // this.obj3.setInteractive()

    // this.input.on('gameobjectdown',this.destroyObj, this)

    // //  this.add.text(20,20,"Playing Game",{font: "25px Arial",fill:"Yellow"});

    // // this.physics.add.collider(this.projectiles, this.powerUps)
    // this.physics.add.collider(this.projectiles, this.powerUps, function(projectile,powerUp){
    //     projectile.destroy()
    // })

    // this.physics.add.collider(this.projectiles, this.powerUps, function(projectile,powerUp){
    //     projectile.destroy()
    // })

    // this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this)

    this.physics.add.overlap(
      this.hero,
      this.enemies,
      this.enemyAttack,
      null,
      this
    )

    //slider FINALLLLLYYY
    this.img = this.add.circle(500, 20, 5, 0xff7873)
    this.img.slider = this.plugins.get('rexsliderplugin').add(this.img, {
      endPoints: [
        {
          x: this.img.x - 0,
          y: this.img.y - 10
        },
        {
          x: this.img.x + 0,
          y: this.img.y + 10
        }
      ],
      value: 0.5
    })
    this.img.setDepth(4)
    this.imgline = this.add.rectangle(
      this.myCam.scrollX + config.width * 0.9,
      this.img.y,
      4,
      26,
      0xffffff
    )

    //this.lineSlider = this.add.graphics()
    //.lineStyle(3, 0x55ff55, 1)
    // .strokePoints(this.img.slider.endPoints);

    this.text = this.add.bitmapText(0, 5, 'pixelFont', 'HEALTH: ', 16)

    // this.enemies = this.physics.add.group()
    // this.enemies.add(this.obj1)
    // this.enemies.add(this.obj2)
    // this.enemies.add(this.obj3)

    // this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this)
    // this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this)

    // this.pointer = this.input.activePointer;
    // var shape = new Phaser.Geom.Circle(48,48,48);

    // const helloButton = this.add.text(config.width * 0.75 + this.myCam.scrollX, 6, '||||||', { fill: {color: 0x000000, alpha:0.5} });
    // graphics.setInteractive()
    // helloButton.on('pointerover',()=>{
    //     console.log('pointerover')
    // })

    // var puerta1 = new Phaser.Geom.Rectangle(300, 100, 230, 430)
    // var graphics1 = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    // graphics1.fillRectShape(puerta1)
    // puerta1.setInteractive(puerta1,()=>{})
    // puerta1.on('pointerover',()=>{
    //     console.log('rrrr')
    // })

    //graphics.events.onInputDown.add(onDown, this);
    // graphics.events.onInputUp.add(onUp, this);
    // graphics.events.onInputOver.add(onOver, this);
    // graphics.events.onInputOut.add(.onOut, this);
    // var graphics = this.add.graphics()
    // graphics.fillStyle(0x0000000, 1)
    // graphics.beginPath()
    // graphics.moveTo(0,0)
    // graphics.lineTo(config.width, 0)
    // graphics.lineTo(config.width, 20)
    // graphics.lineTo(0,20)
    // graphics.lineTo(0,0)
    // graphics.closePath()
    // graphics.fillPath()

    this.scorelabel = this.add.bitmapText(10, 5, 'pixelFont', 'HEALTH: ', 16)

    // add random decorations
    for (var i = 0; i < 35; i++) {
      new Decoration(this)
    }

    this.buildings.add(this.shop)
    for (var i = 0; i < 5; i++) {
      new Building(this)
    }

    this.enemies = this.physics.add.group()
    for (var i = 0; i < 10; i++) {
      if (Phaser.Math.Between(0, 1) == 0) {
        new Skeleton(this)
      } else {
        new Goblin(this)
      }
    }

    this.restartButton = this.add.text(
      0,
      0,
      'Click to Restart Game'
    ).setStyle({fill: '#0f0',backgroundColor: '#111', fontSize:15})
    .setDepth(5).setInteractive({ useHandCursor: true })
    .on('pointerdown', ()=>{ 
        new Phaser.Game(config)
        this.sys.game.destroy(true)
    })
    .on('pointerover', () => this.restartButton.setStyle({ backgroundColor:'#FFF' }))
    .on('pointerout', () => this.restartButton.setStyle({ backgroundColor:'#111' }))

    this.restartButton.visible = false
    
    
  }



  checkIfHeroOnTopOfBuilding () {
    // fixes overspeeding to target land offset
    if (this.hero.y + this.heroSpeed.y > this.landY + this.heroOffsetY) {
      this.heroSpeed.y = 0
    }

    var building = this.checkIfHeroNearBuilding()

    if (building == null) {
      this.heroOffsetY = 2
      return
    }

    if (this.hero.x > building.x && this.hero.x < building.x + building.width) {
      if (this.hero.y < building.y) {
        this.hero.setDepth(1)
        this.heroOffsetY = -building.height + this.shopPaddingTop
        return
      }
      return
    }
  }

  checkIfHeroNearBuilding () {
    for (var i = 0; i < this.buildings.getChildren().length; i++) {
      var building = this.buildings.getChildren()[i]
      //console.log(building.x)
      if (
        this.hero.x > building.x &&
        this.hero.x < building.x + building.width
      ) {
        //console.log('within building')
        return building
      }
    }

    this.hero.setDepth(3)
    return null

    // if (this.hero.y + this.heroSpeed.y > this.landY + this.heroOffsetY) {
    //   this.heroSpeed.y = 0
    // }

    // if (
    //   this.hero.x > shopObj.x &&
    //   this.hero.x < shopObj.x + shopObj.width
    // ) {
    //   if (this.hero.y < shopObj.y) {
    //     this.heroOffsetY = -shopObj.height + this.shopPaddingTop
    //     this.hero.setDepth(1)
    //     return
    //   }
    //   return
    //  }
  }

  update () {

    
    this.checkIfHeroOnTopOfBuilding()
    this.bg_1.tilePositionX = this.myCam.scrollX * 0.3
    this.bg_2.tilePositionX = this.myCam.scrollX * 0.6
    this.bg_3.tilePositionX = this.myCam.scrollX
    this.img.x = this.myCam.scrollX + config.width * 0.95
    this.imgline.x = this.img.x
    this.text.x = this.img.x - 80
    this.miko.tilePositionX = this.myCam.scrollX
    this.ground.tilePositionX = this.myCam.scrollX
    this.scorelabel.x = this.myCam.scrollX + config.width * 0.4
    
    this.checkSkeletonNumber()

    this.text.setText(
      'Volume: ' + Math.floor((1 - this.img.slider.value) * 100) + '%'
    )
    // if (this.pointer.isDown) {
    //     var touchX = this.pointer.x;
    //     var touchY = this.pointer.y;
    //     console.log(touchX + touchY)
    // }
    this.manageSound()

    var healthFormatted = this.zeroPad(this.heroHealth, 2)
    this.scorelabel.text = 'HEALTH: ' + healthFormatted
    
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i]
      enemy.update(this)
    }

    if (this.heroHealth <= 0 && this.isGravityEnabled()) {
      
      if (this.hero.anims.getName() != 'hero_death_anim') {
        this.hero.playAfterDelay('hero_death_anim', 500)
      }
      if (this.hero.anims.currentFrame.index == 4) {
        this.hero.anims.pause()
      }

      if (this.isRestartDialogCreated == false) {
        this.restartButton.visible = true
        this.restartButton.x = this.myCam.scrollX + config.width * 0.3
        this.restartButton.y = config.height * 0.45
        
        this.restartButton.setDepth(5)
        this.isRestartDialogCreated == true
      }
      
      return
    }

    this.HealjustDown = Phaser.Input.Keyboard.JustDown(this.keyHeal)

    this.RjustUp = Phaser.Input.Keyboard.JustUp(this.cursors.right)
    this.LjustUp = Phaser.Input.Keyboard.JustUp(this.cursors.left)

    this.RjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.right)
    this.LjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.left)
    this.UjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.up)
    this.DjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.down)

    this.RisDown = this.cursors.right.isDown
    this.LisDown = this.cursors.left.isDown
    this.UisDown = this.cursors.up.isDown
    this.SpaceisDown = this.cursors.space.isDown

    this.RisUp = this.cursors.right.isUp
    this.LisUp = this.cursors.left.isUp

    this.SpacejustDown = Phaser.Input.Keyboard.JustDown(this.cursors.space)
    this.SpaceLimit = this.input.keyboard.checkDown(this.cursors.space, 1000)

    this.moveHeroManager()
    //this.obj1.angle += 1
    //this.obj2.angle -= 1
    //this.obj3.angle += 2

    // this.move(this.obj1, 1)
    // this.move(this.obj2, 1)
    // this.move(this.obj3, 1)

    //this.background.tilePositionY -= 0.5

    // // this.movePlayerManager()

    // if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    //     this.hero.play('hero_idle_anim')
    //     if (this.player.active){
    //         this.shootBeam()
    //    }
    // }
  }

  checkSkeletonNumber () {
    if (this.enemies.getChildren().length < 5) {
      this.spawnEnemy()

      console.log(this.enemies.getChildren().length)
    }
  }

  // drawShape(fill, style) {

  //     graphics.clear();

  //     graphics.beginFill(fill);
  //     graphics.lineStyle(4, style, 1);

  //     graphics.moveTo(0, 0);
  //     graphics.lineTo(250, 0);
  //     graphics.lineTo(250, 200);
  //     graphics.lineTo(125, 100);
  //     graphics.lineTo(0, 200);
  //     graphics.lineTo(0, 0);

  //     graphics.endFill();

  // }

  // onOver() {

  //     drawShape(0xab3602, 0xeb6702);

  // }
  // onDown() {
  //     drawShape(0x717a02, 0xebfd02);
  // }
  // onUp() {
  //     drawShape(0x027a71, 0x02fdeb);
  // }
  // onOut() {
  //     drawShape(0x027a71, 0x02fdeb);
  // }

  // enemyAttack (hero, enemy) {
  //   //enemy.attackAnim()
  // }

  // hitEnemy (projectile, enemy) {
  //   //this.explosionSound.play()
  //   //projectile.destroy()
  //   //this.score += 15

  //   //var explosion = new Explosion(this, enemy.x, enemy.y)
  //   // this.explosion = this.add.sprite(enemy.x,enemy.y, 'explosion')
  //   // this.explosion.play('explode')
  //   // this.explosion.once('animationcomplete', ()=>
  //   // {
  //   //     this.explosion.destroy()
  //   // })

  //   this.resetPos(enemy)
  //   projectile.destroy()
  // }

  // hurtPlayer (player, enemy) {
  //   this.resetPos(enemy)

  //   if (this.player.alpha < 1) {
  //     return
  //   }
  //   var explosion = new Explosion(this, player.x, player.y)
  //   player.disableBody(true, true)
  //   //this.resetPlayer()
  //   this.time.addEvent({
  //     delay: 1000,
  //     callback: this.resetPlayer,
  //     callbackScope: this,
  //     loop: false
  //   })
  // }

  // resetPlayer () {
  //   var x = config.width / 2 - 8
  //   var y = config.height + 64
  //   this.player.enableBody(true, x, y, true, true)
  //   this.player.alpha = 0.5

  //   var tween = this.tweens.add({
  //     targets: this.player,
  //     y: config.height - 64,
  //     ease: 'Power1',
  //     duration: 1500,
  //     repeat: 0,
  //     onComplete: function () {
  //       this.player.alpha = 1
  //     },
  //     callbackScope: this
  //   })
  // }

  // pickPowerUp (player, powerUp) {
  //   this.pickupSound.play()
  //   powerUp.disableBody(true, true)
  // }

  // move(obj, speed){
  //     obj.y += speed
  //     if (obj.y > config.height){
  //         this.resetPos(obj)
  //     }
  // }

  resetPos (obj) {
    obj.y = 0
    var randomX = Phaser.Math.Between(0, config.width)
    obj.x = randomX
  }

  manageSound () {
    this.music.setVolume(1 - this.img.slider.value)
    this.hitswoosh.setVolume(1 - this.img.slider.value)
    this.hitswoosh2.setVolume(1 - this.img.slider.value)

    if (
      this.hero.anims.getName() == 'hero_attack_air_anim' ||
      this.hero.anims.getName() == 'hero_attack_anim'
    ) {
      if (!this.hitswoosh.isPlaying) {
        this.hitswoosh.play()
      }
      return
    }

    if (this.hitswoosh.isPlaying) {
      this.hitswoosh.stop()
    }
  }

  gravitate () {
    this.hero.y += this.heroSpeed.y

    if (this.hero.y < this.landY + this.heroOffsetY) {
      this.heroSpeed.y += 1
    } else {
      this.heroSpeed.y = 0
    }

    // reduce hero x speed by 80% each frames
    if (Math.floor(Math.abs(this.heroSpeed.x)) == 0) {
      this.heroSpeed.x = 0
      return
    } else {
      this.hero.x += this.heroSpeed.x
      this.heroSpeed.x = this.heroSpeed.x * 0.7
    }
  }

  moveHeroManager () {
    this.attackair = this.SpaceisDown

    if (this.cursors.up.getDuration() < 500) {
      if (this.SpacejustDown && this.UisDown && this.isGravityEnabled) {
        this.hero.play('hero_attack_air_anim')
        this.hero.once('animationcomplete', () => {
          this.hero.play('hero_idle_anim')
        })
        return
      }
    }

    if (this.SpacejustDown) {
      if (this.hero.anims.getName() != 'hero_attack_anim') {
        this.hero.play('hero_attack_anim')
        this.hero.once('animationcomplete', () => {
          this.hero.play('hero_idle_anim')
        })
      }
    }

    //console.log(this.cursors.space.getDuration())

    if (this.SpaceisDown && this.isGravityEnabled()) {
      if (this.cursors.space.getDuration() < 500) {
        this.heroSpeed.x = 0
        return
      }
    }

    if (this.RisDown && this.LisUp && this.hero.x < game.config.width * 3) {
      this.heroSpeed.x += 1.25
    }

    if (this.LisDown && this.RisUp && this.hero.x > 0) {
      this.heroSpeed.x -= 1.25
    }
    //console.log(this.heroSpeed.x)

    this.HeroSpriteChange()

    this.gravitate()
  }

  HeroSpriteChange () {
    if (this.heroSpeed.x == 0 && this.HealjustDown) {
      if (this.hero.anims.getName() != 'hero_heal_anim') {
        this.heroHealth += 10
        this.hero.play('hero_heal_anim')
        this.hero.once('animationcomplete', () => {
          this.hero.play('hero_idle_anim')
        })
        return
      }
    }

    if (this.hero.anims.getName() == 'hero_hurt_anim') {
      if (this.hero.anims.getProgress() == 1) {
        this.hero.play('hero_idle_anim')
      }
    }
    // Running Right
    if (this.RjustDown) {
      this.hero.play('hero_run_anim')
      return
    }

    // Running Left
    if (this.LjustDown) {
      this.hero.play('hero_run_anim')
      return
    }

    // To check if speed.x decreased to 1 to 0
    if (this.checkNotMovingX()) {
      this.hero.play('hero_idle_anim')
      return
    }

    // to check if L or R is released from pressing both LR
    if (this.checkNotMovingX() == false) {
      this.hero.play('hero_run_anim')
      if (this.LisDown) {
        this.hero.scaleX = -1
      }
      if (this.RisDown) {
        this.hero.scaleX = 1
      }
    }

    // // Stop Running Right
    // if (RjustUp){
    //     this.hero.play("hero_idle_anim")
    // }

    // // Stop Running Left
    // if (LjustUp){
    //     this.hero.play("hero_idle_anim")
    // }
    // Running then Jumping

    // Running then Jumping
    if (
      (this.LisDown || this.RisDown) &&
      this.UjustDown &&
      this.isGravityEnabled()
    ) {
      this.heroSpeed.y -= 15
      this.hero.play('hero_jump_anim')
      this.hero.once('animationcomplete', () => {
        this.hero.play('hero_run_anim')
      })
    }

    // Standing then Jumping
    if (this.LisUp && this.RisUp && this.UjustDown && this.isGravityEnabled()) {
      this.heroSpeed.y -= 15
      this.hero.play('hero_jump_anim')
      this.hero.once('animationcomplete', () => {
        this.hero.play('hero_idle_anim')
      })
    }

    // Roll
    if (
      (this.LisDown || this.RisDown) &&
      this.DjustDown &&
      this.isGravityEnabled()
    ) {
      this.hero.play('hero_roll_anim')
      this.hero.once('animationcomplete', () => {
        this.hero.play('hero_run_anim')
      })
    }

    // if (SpacejustDown){
    //     this.hero.play("hero_attack_air_anim")
    //     this.hero.once('animationcomplete', ()=> {
    //         this.hero.play("hero_run_anim")
    //     })
    //     return
    // }

    // if (this.SpacejustDown){
    //    // if (this.hero.anims.getName()=='hero_attack_anim'){
    //         if (this.hero.anims.getProgress()!=1){
    //             return
    //         }
    //     }
    //     this.hero.play('hero_attack_anim')
    //     this.hero.once('animationcomplete', ()=> {
    //         this.hero.play("hero_idle_anim")
    //     })
    // }
  }

  checkNotMovingX () {
    if (Math.floor(Math.abs(this.heroSpeed.x)) == 1) {
      return true
    }
    if (Math.floor(Math.abs(this.heroSpeed.x)) == 2) {
      return false
    }
  }

  isGravityEnabled () {
    if (this.hero.y == this.landY + this.heroOffsetY) {
      return true
    }
    return false
  }

  // shootBeam(){
  //     var beam = new Beam(this)
  //     this.beamSound.play()
  // }

  spawnSkeleton () {
    if (Phaser.Math.Between(0, 1) == 0) {
      new Skeleton(this)
    } else {
      new Goblin(this)
    }
  }

  destroyObj (pointer, gameObject) {
    gameObject.setTexture('explosion')
    gameObject.play('explode')
  }

  // movePlayerManager(){
  //     this.player.setVelocity(0);
  //     if (this.cursorKeys.left.isDown){
  //         this.player.setVelocityX(-gameSettings.playerSpeed)
  //     } else if (this.cursorKeys.right.isDown){
  //         this.player.setVelocityX(gameSettings.playerSpeed)
  //     }

  //     if (this.cursorKeys.up.isDown){
  //         this.player.setVelocityY(-gameSettings.playerSpeed)
  //     } else if (this.cursorKeys.down.isDown){
  //         this.player.setVelocityY(gameSettings.playerSpeed)
  //     }
  // }

  zeroPad (number, size) {
    var stringNumber = String(number)
    while (stringNumber.length < size) {
      stringNumber = '0' + stringNumber
    }
    return stringNumber
  }
}
