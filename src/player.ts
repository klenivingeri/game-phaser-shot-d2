export const createPlayer= (scene:  Phaser.Scene) => {
  const player = scene.physics.add.sprite(200,200, 'player_idle')
  createAnimations(scene);
  return player
}


export const loadSprites = (scene: Phaser.Scene): void => {
 scene.load.spritesheet('player_idle', './assets/char/idle.png', {
  frameWidth: 83,
  frameHeight: 64,
  spacing:45,
 });

 scene.load.spritesheet('player_walk', './assets/char/walk.png', {
  frameWidth: 83,
  frameHeight: 64,
  spacing:45,
 })

 scene.load.spritesheet('player_attack', './assets/char/attack.png', {
  frameWidth: 83,
  frameHeight: 64,
  spacing:45,
 })
}


export const createAnimations = (scene: Phaser.Scene) :void => {
 scene.anims.create({
  key: 'player_idle',
  frames: scene.anims.generateFrameNames('player_idle', {
    start:0,
    end: 7,
  }),
  frameRate: 8, //toda é execução é feita em 8 frames
  repeat: -1, // repete infinitamente
  yoyo: true ,// faz ele ir e voltar
 })

 scene.anims.create({
  key: 'player_walk',
  frames: scene.anims.generateFrameNames('player_walk', {
    start:0,
    end: 6,
  }),
  frameRate: 8,
  repeat: -1,
 })


 scene.anims.create({
  key: 'player_attack',
  frames: scene.anims.generateFrameNames('player_attack', {
    start:0,
    end: 3,
  }),
  frameRate: 12, 
  repeat: 0, 
 })
}