class GameoverScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameoverScene'})
    }

    create() {
        this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5, -3);

        this.title = this.add.text(this.game.config.width * 0.5, 128, "CLICK TO TRY AGAIN", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5, -8);

        this.input.on('pointerdown', () => this.scene.start('PreloadScene'))
    }
}