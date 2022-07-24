var gameSettings = {
    playerSpeed: 200
}

var config = {
    width: 500, //1080, //252,
    height: 200,//1920, //272,
    backgroundColor: 0x2F4F4F,
    scene: [Scene1, Scene2],
    pixelart: true,
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

var game = new Phaser.Game(config)
