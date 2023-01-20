/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Menu scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})

    // the main menu scene image
    this.menuSceneBackgroundImage = null

    // the small start button
    this.startButton = null
  }

  init (data) {
    // the camera colour
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
  
    // where we are in the console
    console.log('Menu Scene')

    // https://www.istockphoto.com/vector/colorful-tropical-tree-frog-on-a-branch-gm1249150786-363982342
    // this loads the menu scene background image
    this.load.image('menuSceneBackground', 'assets/menuScene.jpg')

    // the start button png
    this.load.image('startButton', 'assets/start.png')

    // this loads the start menu music
    this.load.audio('startMenuMusic', 'assets/startMenuMusic.mp3')
 }

  create(data) {
  
    // the background image, and setting the scale to proper size
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(2.75)

    // the x, to make the image in the center of the screen
    this.menuSceneBackgroundImage.x = 1920 / 2
  
    // the y, to make the image in the center of the screen
    this.menuSceneBackgroundImage.y = 1080 / 2

    // the sprite to make it in the center of the screen
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')

    // the interaction used to clikc the start button
    this.startButton.setInteractive({ useHandCursor: true })

    // the functon called to start the game, and switch to the game scene
    this.startButton.on('pointerdown', () => this.clickButton())

    // this starts the start menu music
    this.sound.play('startMenuMusic')

    // this adjusts the music volume
    this.sound.setVolume(0.5);
  }


  clickButton() {

    // when the button is clicked it will change to this game scene
    this.scene.start('gameScene')

    // This stops all the audio when the scene switches
    this.sound.stopAll()
    
  }
}

// This exports the menu scene
export default MenuScene