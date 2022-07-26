class Skeleton extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.hero.x + 300
        var y = 160
        super(scene,x,y,"skeleton_walk")

        scene.add.existing(this);

        this.health = 5
        this.play("skeleton_walk_anim");
        this.goAttack = false

        scene.enemies.add(this)
        
        this.scaleX =  -1;
        this.setDepth(2)
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -15;
        //this.body.setCollideWorldBounds(true)
        //scene.projectiles.add(this)
    }

    update(scene){
        //
        ///console.log(scene.hero.x)
        // if (this.)
        // if (Math.floor(this.x) == Math.floor(scene.hero.x) + 100){
        //     this.play("skeleton_attack_anim");
        // } 
        var newDirection = this.getDirection(scene.hero.x,this.x)

        this.updateAnim(scene, newDirection)

        this.direction = this.getDirection(scene.hero.x,this.x)
        this.scaleX = this.getFacing(scene.hero.x,this.x)
        this.body.velocity.x = this.direction * 100
        
        if (this.health == 0){
            this.destroy()
        }        

        this.isAttackHitHero(scene)
        this.isHeroTakeHit(scene)
    }

    updateAnim(scene, newDirection){
        //console.log(this.anims.getName())
        //console.log(this.anims.duration)
        if (this.direction != newDirection){
            if (newDirection == 0){
                if (this.goAttack){
                    //this.play('skeleton_attack_anim')
                    return
                }
                this.play('skeleton_idle_anim')        
            } else {
                this.play('skeleton_walk_anim')
            }
        }
    }

    isAttackHitHero(scene){
        // skeleton hurt hero
        if (this.anims.getName() == 'skeleton_attack_anim'){
            // attack animation complete
            if (this.anims.getProgress()==1){
                scene.hero.playAfterDelay('hero_hurt_anim',80)
                scene.hero.once('animationcomplete',()=>{
                    scene.hero.play('hero_run_anim')
                })
                scene.heroHealth -= 1
            }
        }
            // if (this.anims.currentFrame.index == 2){
            //     scene.hero.playAfterDelay('hero_hurt_anim',150)
            //     scene.heroHealth -= 1
            // }
            //     //    console.log(this.anims.getName())
            // console.log(this.anims.currentFrame.index)
            // //this.anims.pause()

        var thisX = this.x
        var heroX = scene.hero.x
        if (thisX + 40 > heroX){  
            this.goAttack = true
        }
        if (thisX - 40 < heroX){
 
            this.goAttack = true
        }
    }
    
    isHeroTakeHit(scene){
        // console.log(scene.hero.anims.getName())
        // //hero hurt skeleton
        if (scene.hero.anims.getName() == 'hero_attack_anim'){
        
            //     console.log(this.health)
        //     this.health -= 1
        //     this.play('skeleton_takehit_anim')
        //     this.onc`e('animationcomplete',()=>{
        //         this.play('skeleton_attack_anim')
        //     })
         }
    }

    getFacing(heroX,thisX ){
        if (thisX > heroX){
            return -1
        }
        if (thisX < heroX){
            return 1
        }
    }

    getDirection(heroX, thisX){
        // within enemy's range
        if (thisX - 200 > heroX){
            this.goAttack = false
            return 0
        }

        if (thisX + 200 < heroX){
            this.goAttack = false
            return 0
        }

        if (thisX > heroX){
            if (thisX - 40 < heroX){
                this.goAttack = true
                return 0
            }
            return -1
        }

        if (thisX < heroX){
            if (thisX + 40 > heroX){
                this.goAttack = true
                return 0
            }
            return 1
        }
    }

}