class Skeleton extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.hero.x + 200
        var y = 160
        super(scene,x,y,"skeleton_walk")

        scene.add.existing(this);

        this.health = 5
        this.play("skeleton_walk_anim");

        scene.enemies.add(this)
        
        this.scaleX =  -1;
        this.setDepth(2)
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -15;
        //this.body.setCollideWorldBounds(true)
//        scene.projectiles.add(this)
    }

    update(scene){
        //
        ///console.log(scene.hero.x)
        // if (this.)
        // if (Math.floor(this.x) == Math.floor(scene.hero.x) + 100){
        //     this.play("skeleton_attack_anim");
        // } 
        var direction = this.getDirection(scene.hero.x,this.x)
        this.scaleX = this.getFacing(scene.hero.x,this.x)
        this.body.velocity.x = direction * 30
        if (this.y < 32){
            this.destroy()
        }        
    }

    updateAnim(){
        // if (this.body.velocity.X == 0){
        //     this.play
        // }
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
            return 0
        }
        if (thisX + 200 < heroX){
            return 0
        }

        if (thisX > heroX){
            if (thisX - 50 < heroX){
                return 0
            }
            return -1
        }
        if (thisX < heroX){
            if (thisX + 50 > heroX){
                return 0
            }
            return 1
        }
    }

}