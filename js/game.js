/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// this is the Phaser3 configuration file

// These are the class imports
// This is the splash scene import
import SplashScene from './scenes/splashScene.js'

// this is the title scene import
import TitleScene from './scenes/titleScene.js'

// this is the menu scene import
import MenuScene from './scenes/menuScene.js'

// this is the win scene import
import WinScene from './scenes/winScene.js'

// this is the end scene import
import EndScene from './scenes/endScene.js'

// this is the game scene import
import GameScene from './gameScene.js'

// These are the exports
// The mother teresa splash scene export
// export const splashScene
const splashScene = new SplashScene()

// The frogger image, with title export
// export const titleScene
const titleScene = new TitleScene()

// The other frog image, with click prompt export
// export const menuScene
const menuScene = new MenuScene()

// The main game scene with the frog, water, roads, cars, etc export.
// export const gameScene
const gameScene = new GameScene()

// The win Scene export
// export const winScene
const winScene = new WinScene()

// The lose Scene export
// export const endScene
const endScene = new EndScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920, 
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
    debug: false
    }
},
  // The background colour
  backgroundColor: 0xffffff,

  // the scale of the background
  scale: {
   mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  fps: {
    target: 60
  }
}

// the game configuration
const game = new Phaser.Game(config)

// loads the scenes
// Mother teresa splash scene
game.scene.add('splashScene', splashScene)

// frogger with title screen
game.scene.add('titleScene', titleScene)

// frog with click prompt scene
game.scene.add('menuScene', menuScene)

// the game scene with frog, cars, water, etc
game.scene.add('gameScene', gameScene)

// the win scene after winning
game.scene.add('winScene', winScene)

// the end scene after losing
game.scene.add('endScene', endScene)

// the start scene, which is the splash scene
game.scene.start('splashScene')
