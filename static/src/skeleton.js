class Skeleton extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.hero.x + Math.random() * 300 + 200
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
        this.manageSound(scene)

        if (scene.heroHealth <= 0){
            if (this.anims.getName() != 'skeleton_walk_anim'){
                this.play('skeleton_walk_anim')
            }
            this.body.velocity.x = this.scaleX * (40 * Math.random() + 10)
            return
        }
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
        
        // if (this.health == 0){
        //     this.destroy()
        // }        

        this.isAttackHitHero(scene)
    }

    manageSound(scene){
        //scene.hitswoosh.play()
        //     }
        // if (this.anims.getName() == 'skeleton_walk_anim'){
        //     if (!scene.hitswoosh.isPlaying){
        //         scene.hitswoosh.play()
        //     }
        //     return
        // } 
        
        // if (scene.hitswoosh.isPlaying){
        //     scene.hitswoosh.stop()
        // }

        if (this.anims.getName() == 'skeleton_attack_anim'){
            if (!scene.hitswoosh2.isPlaying){
                scene.hitswoosh2.play()
            }
        }
    }

    updateAnim(scene, newDirection){
        //console.log(this.anims.getName())
        //console.log(this.anims.duration)
        if (this.direction != newDirection){
            if (newDirection == 0){
                if (this.goAttack){
                    this.play('skeleton_attack_anim')
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
        // function heroNormalAttack(){
        //     if (scene.hero.anims.getName() == 'hero_attack_anim'){
        //         return true
        //     }
        //     if (scene.hero.anims.getName() == 'hero_attack_air_anim'){
        //         return true
        //     }
        //     return false
        // } 
        if (this.goAttack && ((scene.hero.anims.getName() == 'hero_attack_anim'))){ 
            if (this.anims.getProgress()>0.5){
                if(scene.hero.scaleX != this.scaleX){
                    console.log(this.health)
                    if (this.health > 0){
                        this.health -= 2
                        this.play('skeleton_takehit_anim')
                        this.once('animationcomplete',()=>{
                            this.play('skeleton_attack_anim')
                        })
                        return
                    }
                    this.callDeath(scene)
                }
            }
         }

         if (this.goAttack && ((scene.hero.anims.getName() == 'hero_attack_air_anim'))){ 
            if (this.anims.getProgress()>0.7){    
                console.log(this.health)
                if (this.health > 0){
                    this.health -= 5
                    this.play('skeleton_takehit_anim')
                    this.once('animationcomplete',()=>{
                        this.play('skeleton_attack_anim')
                    })
                    return
                }
                this.callDeath(scene)
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

    callDeath(scene){
        if (scene.heroHealth <= 0){
            this.play('skeleton_death_anim')
            this.once('animationcomplete',()=>{
                this.destroy()
            })
            return
        }
        if (this.anims.getName() == 'skeleton_death_anim'){
            return
        }
        if (this.health <= 0){
            this.play('skeleton_death_anim')
            this.once('animationcomplete',()=>{
                this.destroy()
            })
            //this.death()
            return
        }
    //     this.once('animationcomplete',()=>{
    //         this.play('skeleton_death_anim')
    //         try{
    //             this.once('animationcomplete',()=>{
    //                 this.destroy()
    //             }) 
    //         } catch(err) {
    //             document.getElementById("demo").innerHTML = err.message;
    //         }
    //         console.log('RRRR')
    //     })
    }
    
    isHeroTakeHit(scene){
        // // console.log(scene.hero.anims.getName())
        // // //hero hurt skeleton
        // if (scene.hero.anims.getName() == 'hero_attack_anim'){
        //   //  console.log()
        //     console.log(this.health)
        //     this.health -= 1
        //     this.play('skeleton_takehit_anim')
        //     this.once('animationcomplete',()=>{
        //         this.play('skeleton_attack_anim')
        //     })
        //  }
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
        if (this.anims.getName() == 'skeleton_takehit_anim'){
            return 0
        }

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