/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Win scene

class WinScene extends Phaser.Scene {
  constructor () {
    super({key: 'winScene'})

    // this sets the you win background
    this.youWinSceneBackgroundImage = null

    // this sets the start button
    this.startButton = null

  }

  init (data) {
    // the set colour of the background
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {

    // writes the splash scene in the console
    console.log('Win Scene')
  
    // the splash scene background image
    this.load.image('youWinSceneBackground', './assets/YouWin.png')

    // this loads the start image 
    this.load.image('menuButton', 'assets/menuButton.png')

    // this loads the win music
    this.load.audio('youWinMusic', './assets/youWinMusic.mp3')
  }

  create(data) {

    // gets the image sprite
    this.youWinSceneBackgroundImage = this.add.sprite(0, 0, 'youWinSceneBackground').setScale(1)

    // centers the sprite in the x coordanite
    this.youWinSceneBackgroundImage.x = 1920 / 2

    // centers the sprite in the y coordanite
    this.youWinSceneBackgroundImage.y = 1080 / 2

    // the sprite to make it in the center of the screen
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2)  + 300, 'menuButton')

    // the interaction used to click the start button
    this.startButton.setInteractive({ useHandCursor: true })

    // the functon called to start the game, and switch to the game scene
    this.startButton.on('pointerdown', () => this.clickButton())

    // this is the win music playing
    this.sound.play('youWinMusic')

    // this adjusts the music volume
    this.sound.setVolume(0.5);
  }
  
  clickButton() {

    // when the button is clicked it will change to this game scene
    this.scene.start('menuScene')

    // this stops the audio
    this.sound.stopAll()

    // Resets Game
    ResetGame()
    
  }
}

// this exports the win scene
export default WinScene