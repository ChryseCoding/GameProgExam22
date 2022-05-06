let background;
let scoreText;
let score = 0;
let ship;
let gem;
let asteroid1;
let asteroid2;
let asteroid3;
let asteroid4;
let asteroid5;
let asteroid6;
let asteroid7;
let asteroid8;
let asteroid9;
let asteroid10;


class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'})
        this.score = 0
        this.gameOver = false
    }

    preload() {
        this.load.image('space', './assets/space.jpg')
        this.load.image('ship', './assets/ship.png')
        this.load.image('gem', './assets/gem.png')
        this.load.image('asteroid', './assets/asteroid.png')
    }

    create() {
        //// SPACE ////\
        background = this.add.tileSprite(0, 0, config.width, config.height, "space");
        background.setOrigin(0, 0);

        //// SHIP ////
        ship = this.physics.add.image(100, 300, 'ship');
        ship.body.setMaxSpeed(700);
        ship.body.collideWorldBounds=true;
        
        //// SHIP ////
        gem = this.physics.add.image(0, 0, 'gem');
        this.physics.add.collider(ship, gem, this.collectGem, null, this);

        //// ASTEROIDS ////
        asteroid1 = this.physics.add.image(0, 0, 'asteroid');
        asteroid2 = this.physics.add.image(0, 0, 'asteroid');
        asteroid3 = this.physics.add.image(0, 0, 'asteroid');
        asteroid4 = this.physics.add.image(0, 0, 'asteroid');
        asteroid5 = this.physics.add.image(0, 0, 'asteroid');
        asteroid7 = this.physics.add.image(0, 0, 'asteroid');
        asteroid8 = this.physics.add.image(0, 0, 'asteroid');
        asteroid9 = this.physics.add.image(0, 0, 'asteroid');
        asteroid10 = this.physics.add.image(0, 0, 'asteroid');

        this.physics.add.collider(ship, asteroid1, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid2, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid3, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid4, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid5, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid6, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid7, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid8, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid9, this.hitAsteroid, null, this);
        this.physics.add.collider(ship, asteroid10, this.hitAsteroid, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#ffffff' });
    }

    update() {
        background.tilePositionX += 2;
        this.move(gem);
        this.move(asteroid1);
        this.move(asteroid2);
        this.move(asteroid3);
        this.move(asteroid4);
        this.move(asteroid5);
        this.move(asteroid6);
        this.move(asteroid7);
        this.move(asteroid8);
        this.move(asteroid9);
        this.move(asteroid10);
        this.physics.world.wrap(ship, 100);

        //// CONTROLS ////
        if (this.cursors.left.isDown) {
            ship.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown) {
            ship.setVelocityX(160);
        }
        else {
            ship.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            ship.setVelocityY(-160);
        }
        else if (this.cursors.down.isDown) {
            ship.setVelocityY(160);
        } else {
            ship.setVelocityY(0);
        }
    }
    move(object) {
        console.log("move");
        object.angle += Math.random();
        object.x -= 5;
        if (object.x <= 0){
            this.spawn(object);
        }
    }

    spawn(object) {
        console.log("spawn");
        object.x = config.width + config.height*Math.random();
        object.y = Phaser.Math.Between(0, config.height)
        object.setScale(Math.random())
        if (object.x <= 0){
            this.spawn(object);
        }
    }

    collectGem() {
        gem.disableBody(true, true);
        score += 10;
        scoreText.setText('Score: ' + score);
        gem = this.physics.add.image(0, 0, 'gem');
        this.physics.add.collider(ship, gem, this.collectGem, null, this);
    }

    hitAsteroid() {
        score = 0;
        this.scene.start('GameoverScene');
    }
}

