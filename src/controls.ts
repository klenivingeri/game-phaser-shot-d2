export const createControls = (scene: Phaser.Scene): Phaser.Types.Input.Keyboard.CursorKeys => {
  return scene.input.keyboard.createCursorKeys()
};

export const configControls = (
  player,
  controls: Phaser.Types.Input.Keyboard.CursorKeys,
  scene: Phaser.Scene
): void => {
  player.setVelocityX(0)
  player.setVelocityY(0)

  if (controls.right.isDown) {
    moveRight(player);
    return;
  }
  if (controls.left.isDown) {
    moveLeft(player);
    return;
  }
  if (controls.up.isDown) {
    moveUp(player);
    return;
  }
  if (controls.down.isDown) {
    moveDown(player)
    return
  }

  if (controls.space.isDown) {
    attack(player);
    return;
  }

  player.anims.play('player_idle', true)
};

const defaultVelocity = 200; //velocidade personagem
const moveRight = (player): void => {
  player.setFlipX(false);
  player.anims.play('player_walk', true);
  player.setVelocityX(defaultVelocity);
}

const moveLeft = (player): void => {
  player.setFlipX(true);
  player.anims.play('player_walk', true);
  player.setVelocityX(-defaultVelocity);
}

const moveUp = (player):void => {
  player.anims.play('player_walk', true);
  player.setVelocityY(-defaultVelocity)
}

const moveDown = (player): void => {
  player.anims.play('player_walk', true)
  player.setVelocityY(defaultVelocity)
}

const attack = (player): void => {
  player.anims.play('player_attack', true)
}