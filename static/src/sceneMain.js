
// /** @type {import("../typings/phaser")} */

class Scene2 extends Phaser.Scene{
    constructor(){
        super('playGame');
    }

    create(){
        this.heroHealth = 100
        this.heroSpeed = new Phaser.Math.Vector2(0,0)

        this.beamSound = this.sound.add("audio_beam")
        this.explosionSound = this.sound.add("audio_explosion")
        this.pickupSound = this.sound.add("audio_pickup")
      
        this.music = this.sound.add('music')

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
        this.bg_1 = this.add.tileSprite(0,0,config.width,config.height,"bg_1")
        this.bg_1.setOrigin(0,0)
        this.bg_1.setScrollFactor(0);

        this.bg_2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg_2");
        this.bg_2.setOrigin(0, 0);
        this.bg_2.setScrollFactor(0);

        this.miko = this.physics.add.sprite(config.width/2 - 30, 130, "miko")
        this.miko.setScale(0.15)
        this.miko.play("miko_anim")

        this.bg_3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg_3");
        this.bg_3.setOrigin(0, 0);
        this.bg_3.setScrollFactor(0);


        this.hero = this.physics.add.sprite(config.width/2 - 8, 150, "hero_idle")
        this.hero.play("hero_idle_anim")
       // this.hero.setCollideWorldBounds(true)
        //this.sk = this.physics.add.sprite(config.width/2 - 8, 160, "skeleton_idle")
        //this.sk.play("skeleton_idle_anim")

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);
        this.myCam.startFollow(this.hero);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.ground = this.add.tileSprite(0, 0, game.config.width, 48, "soil");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);
        this.ground.y = 12 * 14

        this.hero.setDepth(2)
        this.miko.setDepth(1)
        this.ground.setDepth(3)

        // this.player =  this.physics.add.sprite(config.width/2 -8,config.height-64,"player")
        // this.player.play("thrust")
        // this.cursorKeys = this.input.keyboard.createCursorKeys()
        // this.player.setCollideWorldBounds(true)

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
//      this.projectiles = this.add.group()
        this.enemies = this.physics.add.group()

        this.keyObj = this.input.keyboard.addKey('W');  // Get key object
        
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
        //this.obj2.setScale(2)
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


        this.physics.add.overlap(this.hero, this.enemies, this.enemyAttack, null, this)

        // this.enemies = this.physics.add.group()
        // this.enemies.add(this.obj1)
        // this.enemies.add(this.obj2)
        // this.enemies.add(this.obj3)

        // this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this)
        // this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this)
    
        var graphics = this.add.graphics()
        graphics.fillStyle(0x0000000, 1)
        graphics.beginPath()
        graphics.moveTo(0,0) 
        graphics.lineTo(config.width, 0)
        graphics.lineTo(config.width, 20)
        graphics.lineTo(0,20)
        graphics.lineTo(0,0)
        graphics.closePath()
        graphics.fillPath()

             
        this.scorelabel = this.add.bitmapText(10,5,"pixelFont","HEALTH: ",16)


    }

    enemyAttack(hero, enemy){
        //enemy.attackAnim()
    }

    hitEnemy(projectile, enemy){
        //this.explosionSound.play()
        //projectile.destroy()
        //this.score += 15

        //var explosion = new Explosion(this, enemy.x, enemy.y)
        // this.explosion = this.add.sprite(enemy.x,enemy.y, 'explosion')
        // this.explosion.play('explode')
        // this.explosion.once('animationcomplete', ()=> 
        // {
        //     this.explosion.destroy()
        // })

        this.resetPos(enemy)
        projectile.destroy()
    }


    hurtPlayer(player,enemy){
        this.resetPos(enemy)

        if (this.player.alpha < 1){
            return
        }
        var explosion = new Explosion(this, player.x, player.y)
        player.disableBody(true, true)
        //this.resetPlayer()
        this.time.addEvent({
            delay: 1000,
            callback: this.resetPlayer,
            callbackScope: this,
            loop: false
        })
    }

    resetPlayer(){
        var x = config.width / 2 - 8
        var y = config.height + 64
        this.player.enableBody(true, x, y, true, true)
        this.player.alpha = 0.5

        var tween = this.tweens.add({
            targets: this.player,
            y: config.height - 64,
            ease: 'Power1',
            duration: 1500,
            repeat: 0,
            onComplete: function(){
                this.player.alpha = 1
            },
            callbackScope:this
        })
    }

    pickPowerUp(player, powerUp){
        this.pickupSound.play()
        powerUp.disableBody(true, true)
    }

    // move(obj, speed){
    //     obj.y += speed
    //     if (obj.y > config.height){
    //         this.resetPos(obj)
    //     }
    // }

    resetPos(obj){
        obj.y = 0
        var randomX = Phaser.Math.Between(0, config.width)
        obj.x = randomX
    }

    update(){
        var scoreFormatted = this.zeroPad(this.heroHealth, 2)

        this.scorelabel.text = "HEALTH: " + scoreFormatted

        for(var i = 0; i < this.enemies.getChildren().length; i++){
            var enemy = this.enemies.getChildren()[i];
            enemy.update(this);
        }
        var wDown = this.input.keyboard.checkDown(this.keyObj, 10);

        this.RjustUp = Phaser.Input.Keyboard.JustUp(this.cursors.right) 
        this.LjustUp = Phaser.Input.Keyboard.JustUp(this.cursors.left)
        
        this.RjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.right)
        this.LjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.left)
        this.UjustDown = Phaser.Input.Keyboard.JustDown(this.cursors.up)
        
        this.RisDown = this.cursors.right.isDown
        this.LisDown = this.cursors.left.isDown
        this.UisDown = this.cursors.up.isDown
        this.SpaceisDown = this.cursors.space.isDown
        
        this.RisUp = this.cursors.right.isUp
        this.LisUp = this.cursors.left.isUp

        this.SpacejustDown = Phaser.Input.Keyboard.JustDown(this.cursors.space)
        this.SpaceLimit = this.input.keyboard.checkDown(this.cursors.space, 1000);

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
        this.bg_1.tilePositionX = this.myCam.scrollX * .3
        this.bg_2.tilePositionX = this.myCam.scrollX * .6
        this.bg_3.tilePositionX = this.myCam.scrollX
        this.miko.tilePositionX = this.myCam.scrollX
        this.ground.tilePositionX = this.myCam.scrollX

    }

    gravitate(){
        this.hero.y += this.heroSpeed.y
        
        if (this.hero.y < 150){  
            this.heroSpeed.y += 1
        } else {
            this.heroSpeed.y = 0
        }

        // reduce hero x speed by 80% each frames
        if (Math.floor(Math.abs(this.heroSpeed.x))==0){
            this.heroSpeed.x = 0
            return
        } else {
            this.hero.x += this.heroSpeed.x
            this.heroSpeed.x = this.heroSpeed.x * 0.7
        }

    }

    moveHeroManager(){
        this.attackair = this.SpaceisDown

        if (this.SpacejustDown){
            this.spawnSkeleton()
        }

        if (this.cursors.up.getDuration() < 500){
            if (this.SpacejustDown && this.UisDown && this.isGravityEnabled){
                this.hero.play("hero_attack_air_anim")
                this.hero.once('animationcomplete', ()=> {
                this.hero.play("hero_run_anim")
                })
                return
            }
        }

        if (this.SpacejustDown){
            this.hero.play("hero_attack_anim")
            this.hero.once('animationcomplete',()=> {
                this.hero.play("hero_idle_anim")
            })
        }

        //console.log(this.cursors.space.getDuration())

        if (this.SpaceisDown && this.isGravityEnabled()){
            if (this.cursors.space.getDuration() < 500){
                this.heroSpeed.x = 0
                return
            } 
        }

        if (this.RisDown && this.LisUp && this.hero.x < game.config.width * 3) {
            this.heroSpeed.x += 1;
        }

        if (this.LisDown && this.RisUp && this.hero.x > 0) {
            this.heroSpeed.x -= 1;
        } 
        //console.log(this.heroSpeed.x)

        this.HeroSpriteChange()
        
        this.gravitate()

    }

    HeroSpriteChange(){
        // Running Right
        if (this.RjustDown){
            this.hero.play("hero_run_anim")
            return
        }

        // Running Left
        if (this.LjustDown){
            this.hero.play("hero_run_anim")
            return
        }
        
        // To check if speed.x decreased to 1 to 0
        if (this.checkNotMovingX()){
            this.hero.play("hero_idle_anim")
            return
        }

        // to check if L or R is released from pressing both LR
        if (this.checkNotMovingX() == false){
            this.hero.play("hero_run_anim")
            if (this.LisDown){
                this.hero.scaleX =  -1;
            }
            if (this.RisDown){
                this.hero.scaleX =  1;
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
        if ((this.LisDown || this.RisDown) && this.UjustDown && this.isGravityEnabled()){
            this.heroSpeed.y -=  15 
            this.hero.play("hero_jump_anim")
            this.hero.once('animationcomplete', ()=> {
                this.hero.play("hero_run_anim")
            })
        }

        // if (SpacejustDown){
        //     this.hero.play("hero_attack_air_anim")
        //     this.hero.once('animationcomplete', ()=> {
        //         this.hero.play("hero_run_anim")
        //     })
        //     return
        // }

        // Standing then Jumping
        if ((this.LisUp && this.RisUp) && this.UjustDown && this.isGravityEnabled()){
            this.heroSpeed.y -=  15
            this.hero.play("hero_jump_anim")
            this.hero.once('animationcomplete', ()=> {
                this.hero.play("hero_idle_anim")
            })
        }

        if (this.SpacejustDown){
            this.hero.play('hero_attack_anim')
            this.hero.once('animationcomplete', ()=> {
                this.hero.play("hero_idle_anim")
            })
        }
    }

    checkNotMovingX(){
        if (Math.floor(Math.abs(this.heroSpeed.x)) == 1){
            return true
        }
        if (Math.floor(Math.abs(this.heroSpeed.x)) == 2){
            return false
        }
    }

    isGravityEnabled(){
        if (this.hero.y == 150){
            return true
        }
        return false
    }

    shootBeam(){
        var beam = new Beam(this)
        this.beamSound.play()
    }

    spawnSkeleton(){
        var skeleton = new Skeleton(this)
    }

    destroyObj(pointer, gameObject){
        gameObject.setTexture("explosion")
        gameObject.play("explode")
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

    zeroPad(number, size){
        var stringNumber = String(number)
        while(stringNumber.length < (size)){
            stringNumber = "0" + stringNumber
        }
        return stringNumber
    }
}