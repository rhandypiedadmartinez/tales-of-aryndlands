class Skeleton extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.hero.x + 200
        var y = 160
        super(scene,x,y,"skeleton_walk")

        scene.add.existing(this);

        this.health = 5
        this.play("skeleton_walk_anim");

        this.scaleX =  -1;
        this.setDepth(1)
        scene.physics.world.enableBody(this);
        this.body.velocity.x = -15;
        //this.body.setCollideWorldBounds(true)
//        scene.projectiles.add(this)
    }

    update(){
       // if (this.)
        if (this.y < 32){
            this.destroy()
        }        
    }
}