
class Scene1 extends Phaser.Scene{
    constructor(){  
        super('Bootgame');
    }

    preload(){
        this.load.image("bg_1", "static/assets/background/background/background_layer_1.png");
        this.load.image("bg_2", "static/assets/background/background/background_layer_2.png");
        this.load.image("bg_3", "static/assets/background/background/background_layer_3.png");
        this.load.image("soil", "static/assets/background/background/ground.png");
        
        this.load.spritesheet('hero_idle','static/assets/spritesheets/knight/Idle.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('hero_run','static/assets/spritesheets/knight/Run.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('hero_jump','static/assets/spritesheets/knight/Jump.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('miko','static/assets/spritesheets/miko.png',{
            frameWidth: 561,
            frameHeight: 1105   
        })

        this.load.spritesheet("ship1","static/assets/spritesheets/ship.png",{
            frameWidth: 16,
            frameHeight: 16
        })
        
        this.load.spritesheet("ship2","static/assets/spritesheets/ship2.png",{
            frameWidth: 32,
            frameHeight: 16
        })

        this.load.spritesheet("ship3","static/assets/spritesheets/ship3.png",{
            frameWidth: 32,
            frameHeight: 32
        })

        this.load.spritesheet("explosion","static/assets/spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.spritesheet("power-up","static/assets/spritesheets/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.spritesheet("player","static/assets/spritesheets/player.png",{
            frameWidth: 16,
            frameHeight: 24
        })

        this.load.spritesheet("beam","static/assets/spritesheets/beam.png",{
            frameWidth: 16,
            frameHeight: 16
        })
        
        this.load.bitmapFont("pixelFont","static/assets/font/font.png","static/assets/font/font.xml")

        // this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
        // this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
        // this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
        // this.load.audio("music", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"]);  
    
        this.load.audio("audio_beam", ["static/assets/sounds/beam.ogg", "static/assets/sounds/beam.mp3"]);
        this.load.audio("audio_explosion", ["static/assets/sounds/explosion.ogg", "static/assets/sounds/explosion.mp3"]);
        this.load.audio("audio_pickup", ["static/assets/sounds/pickup.ogg", "static/assets/sounds/pickup.mp3"]);
        this.load.audio("music", ["static/assets/sounds/sci-fi_platformer12.ogg", "static/assets/sounds/sci-fi_platformer12.mp3"]);
    }

    create(){
  
        this.add.text(20,20,"Loading Game...");
        this.scene.start("playGame");

        this.anims.create({
            key:"hero_idle_anim",
            frames: this.anims.generateFrameNumbers("hero_idle"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key:"hero_run_anim",
            frames: this.anims.generateFrameNumbers("hero_run"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key:"hero_jump_anim",
            frames: this.anims.generateFrameNumbers("hero_jump"),
            frameRate: 20,
            repeat: 0
        })
        
        this.anims.create({
            key:"miko_anim",
            frames: this.anims.generateFrameNumbers("miko"),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship1"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        })
        
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        })
                
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        })

    }
}
