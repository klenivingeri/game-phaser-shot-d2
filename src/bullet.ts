export const loadBulletSprites = (scene):void => {
 scene.load.image('bullet', './assets/bullet/bulletBlue.png')
}

export const createBullet = (player, scene) => {
  const x = player.flipX ? player.x - 40 : player.x + 40;
  const y = player.y - 18;

  const bullet = scene.physics.add.image(x, y, 'bullet').setScale(0.1)

  if (player.flipX) {
    bullet.setVelocityX(-700)
    bullet.setFlipX(true)
  } else {
    bullet.setVelocityX(+700)
    bullet.setFlipX(false)
  }
  
}