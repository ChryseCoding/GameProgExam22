import { Scene } from 'phaser'

class GameScene extends Scene {
    constructor() {
        super('game')

        this.score = 0
        this.gameOver = false
    }

    preload() {
        this.load.image('obs1', './assets/asteroid1.png')
        this.load.image('obs2', './assets/asteroid2.png')
        this.load.image('obs3', './assets/asteroid3.png')
        this.load.spritesheet('ship', './assets/ship.png', { frameWidth:32, frameHeight:48})

    }

    create() {

    }

    update() {
        
    }
}