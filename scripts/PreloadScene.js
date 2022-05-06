class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: 'PreloadScene'})
    }


    preload() {
        this.load.image('logo', './assets/logo.png')
    }

    create() {
        
        this.input.on('pointerdown', () => this.scene.start('GameScene'))

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

