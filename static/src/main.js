var config = {
    type: Phaser.AUTO,
    parent: 'parentMain',
    scale: {
        zoom: 2,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    width: 540, //1080, //252,
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

var gameSettings = {
    playerSpeed: 200,
    fullWidth: config.width * 3
}


var game = new Phaser.Game(config)
