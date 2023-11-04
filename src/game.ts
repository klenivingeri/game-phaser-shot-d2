import * as Phaser from 'phaser';
import { createPlayer, loadPlayerSprites } from './player'
import { configControls, createControls } from './controls'
import { loadBulletSprites } from './bullet'
import { createEnemyAnimations, loadEnemySprites, createEnemy } from './enemy'

export default class Demo extends Phaser.Scene
{
    player;
    controls;
    water;
    bullet;
    enemy;
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('tiles', './assets/map/grass.png');
        this.load.image('border', './assets/map/water.png');
        this.load.tilemapTiledJSON('map','./assets/map/map.json')
        loadPlayerSprites(this);
        loadBulletSprites(this);
        loadEnemySprites(this);
    }

    create ()
    {
        const map = this.make.tilemap({key: 'map'})
        const tileSetGrass = map.addTilesetImage('grass', 'tiles');
        const tileSetWater = map.addTilesetImage('water', 'border');
        const ground = map.createLayer('glass', tileSetGrass, 0,0);
        this.water = map.createLayer('water', tileSetWater, 0,0);

        this.water.setCollisionByProperty({collider:true})
        
        this.player = createPlayer(this);
        this.player.anims.play('player_idle', true)
        this.physics.add.collider(this.player, this.water)

        this.controls = createControls(this);
        createEnemyAnimations(this);
        createEnemy(this);
    }

    update() { 
        configControls(this.player, this.controls, this);
    }
}

const config = {
    pixelArt: true,
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 640,
    scene: Demo,
    physics: {
       default: 'arcade',
       arcade: {
        gravity: {
            y:0
        }
       } 
    }
};

const game = new Phaser.Game(config);
