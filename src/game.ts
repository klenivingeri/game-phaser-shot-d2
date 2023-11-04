import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('tiles', './assets/map/grass.png');
        this.load.image('border', './assets/map/water.png');
        this.load.tilemapTiledJSON('map','./assets/map/map.json')
    }

    create ()
    {
        const map = this.make.tilemap({key: 'map'})
        const tileSetGrass =  map.addTilesetImage('grass', 'tiles');
        const tileSetWater =  map.addTilesetImage('water', 'border');

        const ground =  map.createLayer('glass', tileSetGrass, 0,0);
        const water =  map.createLayer('water', tileSetWater, 0,0);

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 640,
    scene: Demo
};

const game = new Phaser.Game(config);
