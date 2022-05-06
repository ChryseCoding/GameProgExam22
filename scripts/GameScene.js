class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'})

        this.score = 0
        this.gameOver = false
    }

    preload() {
        this.load.image('logo', './assets/logo.png')
        this.load.image('obs1', './assets/asteroid1.png')
        this.load.image('obs2', './assets/asteroid2.png')
        this.load.image('obs3', './assets/asteroid3.png')
        this.load.spritesheet('ship', './assets/ship.png', { frameWidth:32, frameHeight:48})

    }

    create() {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }

    update() {
        
    }
}

