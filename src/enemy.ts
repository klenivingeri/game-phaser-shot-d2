export const loadEnemySprites = (scene: Phaser.Scene): void => {
  scene.load.spritesheet('slime_idle', './assets/enemy/slime_idle.png', {
    frameWidth: 20,
    frameHeight: 17,
    spacing: 0
  })
}

export const createEnemyAnimations = (scene: Phaser.Scene): void => {
  scene.anims.create({
    key: 'slime_idle',
    frames: scene.anims.generateFrameNames('slime_idle',{
      start: 0,
      end: 6,
    }),
    frameRate: 8,
    repeat: -1,
  })
}

export const createEnemy = (scene: Phaser.Scene) => {
  const slime = scene.physics.add.sprite(400, 200, 'slime_idle').setScale(2)
  slime.setFlipX(true)
  slime.anims.play('slime_idle', true)
}