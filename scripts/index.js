import { Phaser } from "./scripts/phaser.min";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', './assets/logo.png')
}

function create ()
{
    let logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
}