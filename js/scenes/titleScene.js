/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Title scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})

    // the background is set to nothing 
    this.titleSceneBackgroundImage = null

    // the title scene text is set to nothing
    this.titleSceneText = null
  
    // the font is changed to look cleaner
    this.titleSceneTextStyle = { font: '200px Times', fill: '#90EE90', align: 'center' }
  }

  init (data) {
    // the main background is set to white
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
  
   // title scene is writtin in the console to keep track
   console.log('Title Scene')

   // the image frog image is loaded
   // https://www.freepik.com/premium-vector/cartoon-happy-frog-white_7112076.htm
   this.load.image('titleSceneBackground', 'assets/titleScene.jpg')
 }

  create(data) {
  
    // set scale multiplies the image size by 2.75
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)

    // centers the image in the x coordanite
    this.splashSceneBackgroundImage.x = 1920 / 2

    // centers the image in the y coordanite
    this.splashSceneBackgroundImage.y = 1080 / 2

    // writes the text, and put it in the bottom middle of the screen
    this.titleSceneText = this.add.text(1920 / 2, (1080 /2) + 350, 'Frogger',

    // sets the origin to point 0.5
    this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
  
   // program waits 6 seconds before switching scene
   if (time > 6000) {
    this.scene.switch('menuScene')
   }
  }
}

// this exports the title scene
export default TitleScene