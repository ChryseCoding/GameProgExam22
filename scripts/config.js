const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "black",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x:0, y:0}
        }
    },
    scene: [
        PreloadScene,
        GameScene,
        GameoverScene
    ],
    pixelArt: true,
    roundPixels: true
}

const game = new Phaser.Game(config);