class Skeleton extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.hero.x
        var y = scene.hero.y + 10
        super(scene,x,y,"skeleton")

        scene.add.existing(this);

        this.play("skeleton_idle_anim");

        this.scaleX =  -1;
        this.setDepth(1)
        scene.physics.world.enableBody(this);
//        this.body.velocity.y = -250;

//        scene.projectiles.add(this)
    }

    update(){
        if (this.y < 32){
            this.destroy()
        }        
    }
}