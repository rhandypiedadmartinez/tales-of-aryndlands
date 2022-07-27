
class Scene1 extends Phaser.Scene{
    constructor(){  
        super('Bootgame');
    }

    preload(){
        this.load.plugin('rexsliderplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js', true);

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

        this.load.spritesheet('hero_attack','static/assets/spritesheets/knight/Attacks.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('hero_attack_air','static/assets/spritesheets/knight/attack_from_air.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('hero_hurt','static/assets/spritesheets/knight/Hurt.png',{
            frameWidth: 128,
            frameHeight: 64
        })


        this.load.spritesheet('hero_death','static/assets/spritesheets/knight/Death.png',{
            frameWidth: 128,
            frameHeight: 64
        })

        this.load.spritesheet('skeleton_idle','static/assets/spritesheets/monsters/Skeleton/Idle.png',{
            frameWidth: 150,
            frameHeight: 150
        })

        this.load.spritesheet('skeleton_walk','static/assets/spritesheets/monsters/Skeleton/Walk.png',{
            frameWidth: 150,
            frameHeight: 150
        })

        this.load.spritesheet('skeleton_attack','static/assets/spritesheets/monsters/Skeleton/Attack.png',{
            frameWidth: 150,
            frameHeight: 150
        })

        this.load.spritesheet('skeleton_takehit','static/assets/spritesheets/monsters/Skeleton/Take Hit.png',{
            frameWidth: 150,
            frameHeight: 150
        })

        this.load.spritesheet('skeleton_death','static/assets/spritesheets/monsters/Skeleton/Death.png',{
            frameWidth: 150,
            frameHeight: 150
        })

        this.load.spritesheet('skeleton_block','static/assets/spritesheets/monsters/Skeleton/Shield.png',{
            frameWidth: 150,
            frameHeight: 150
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
        
        this.load.audio("swordlasharmor", ["static/assets/sounds/swords/sword-blade-lashes-chainmail-armor.wav"]);
        this.load.audio("swordcutarmor", ["static/assets/sounds/swords/sword-cuts-a-chainmail.wav"]);
        this.load.audio("hit-swoosh", ["static/assets/sounds/swords/metal-hit-woosh.wav"]);
    //     this.load.audio("sword-lash-armor",["static/assets/sounds/sword-blade-lashes-chainmail-armor.wav"]);
    //     this.load.audio("sword-cut-armor", ["static/assets/sounds/sword-cuts-a-chainmail.wav"]);
     }

    create(){
        this.add.text(20,20,"Loading Game...");
        this.scene.start("playGame");

        this.anims.create({
            key:"hero_idle_anim",
            frames: this.anims.generateFrameNumbers("hero_idle"),
            frameRate: 10,
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
            key:"hero_attack_anim",
            frames: this.anims.generateFrameNumbers("hero_attack",{
                start: 1,
                end: 19
            }),
            frameRate: 30,
            repeat: 1
        })

        this.anims.create({
            key:"hero_attack_air_anim",
            frames: this.anims.generateFrameNumbers("hero_attack_air",{
                start: 0,
                end: 6
            }),
            frameRate: 10,
            repeat: 0
        })

        this.anims.create({
            key:"hero_hurt_anim",
            frames: this.anims.generateFrameNumbers("hero_hurt",{
                start: 0,
                end: 2
            }),
            frameRate: 5,
            repeat: 1
        })

        this.anims.create({
            key:"hero_death_anim",
            frames: this.anims.generateFrameNumbers("hero_death",{
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: 0
        })

        this.anims.create({
            key:"skeleton_idle_anim",
            frames: this.anims.generateFrameNumbers("skeleton_idle",{
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1
        })


        this.anims.create({
            key:"skeleton_walk_anim",
            frames: this.anims.generateFrameNumbers("skeleton_walk",{
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key:"skeleton_attack_anim",
            frames: this.anims.generateFrameNumbers("skeleton_attack",{
                start: 1,
                end: 7
            }),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key:"skeleton_takehit_anim",
            frames: this.anims.generateFrameNumbers("skeleton_takehit",{
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: 0
        })

        this.anims.create({
            key:"skeleton_death_anim",
            frames: this.anims.generateFrameNumbers("skeleton_death",{
                start: 0,
                end: 2
            }),
            frameRate: 5,
            repeat: 0
        })


        this.anims.create({
            key:"skeleton_block_anim",
            frames: this.anims.generateFrameNumbers("skeleton_block",{
                start: 0,
                end: 3
            }),
            frameRate: 5,
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
