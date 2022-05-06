class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: 'PreloadScene'})
    }

    preload() {
        this.load.image('logo', './assets/logo.png')
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
        
        this.input.on('pointerdown', () => this.scene.start('GameScene'))

        this.title = this.add.text(this.game.config.width * 0.5, 128, "ASTEROIDS", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5, 2);


        this.title = this.add.text(this.game.config.width * 0.5, 128, "CLICK TO PLAY", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5, -8);
    }
}