/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

// importing frog class
import Frog from './ThingsThatMove/frogClass.js'

// importing car class
import Car from './ThingsThatMove/carClass.js'

// importing podium fromgs
import Podium from './StationaryObjects/podiumFrog.js'

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    // what the background is
    this.background = null

    // what the frog starts as
    this.frog = null

    // what the cars start as
    this.cars = []

    this.counting = 0

    this.timer = 0

  }

  init (data) {
    // The colour
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
  
    // the game scene
    console.log('Game Scene')
  
    // images
    // The background with water, frog, lakes, etc
    this.load.image('frogger-background', 'assets/new-frogger-background.png')

    // the playable frog charactor
    this.load.image('frog', 'assets/frog.png')

    // the playable frog charactor
    this.load.image('podium', 'assets/frogEnd.png')

    // the car charactor
    this.load.image('car', 'assets/car.png')

    // Background Audio that plays during the game
    this.load.audio('BackgroundAudio', 'assets/BackgroundMusic.wav')

    // Destruction Audio that plays when the frog gets hit
    this.load.audio('Destruction', 'assets/SquashMusic.wav')

    // Noise everytime the frog hops in any direction
    this.load.audio('frogNoise', 'assets/frogHop.wav')

    // Noise everytime the frog crosses the finish line
    this.load.audio('madeItNoise', 'assets/madeItNoise.mp3')
  }

  create(data) {
    
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')
  
    // the origin of the background
    this.background.setOrigin(0,0)

    // Background Audio starts
    this.sound.play('BackgroundAudio')

    // this adjusts the music volume
    this.sound.setVolume(0.5);

    // calling and setting the frog
    const frog = new Frog({scene:this,x:1920/2,y:2080/2}).setScale(0.175)

    // letting the frog = this.frog
    this.frog = frog

    // the individual cars x and y coordinates
    // actually y since x does not change
    let carProperties = [960, 870, 780, 700, 620, 460, 370, 290, 200, 120]

    // loop that creates the cars, if there is not as many cars
    // that are in the car properties array
    for (let counter = 0; counter < carProperties.length; counter++) {
      this.cars[counter] = new Car({scene:this,x:1880,y:carProperties[counter]}).setScale(2)
    }
  
    // the physics that detects if a car, and a frog collide
    this.physics.add.collider(this.frog, this.cars, function(frogCollide, carsCollide) {
  
    // if the frog and a car collide, the frog gets destroyed
      this.frog.destroy()

      if (!this.frog.destroy()) {
        this.counting = 0
        // the game scene audio stops playing
        this.sound.stopAll()
    
        // the destruction audio when the frog dies playes
        this.sound.play('Destruction')
    
        // the scene switches to the end scene
        this.scene.switch('endScene')
      }
  }.bind(this))
  }

  update(time, delta) {

    // this lets the W key have a value
    // this allows the W input
    let keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

    // this lets the A key have a value
    // this allows the A input
    let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)

    // this lets the S key have a value
    // this allows the S input
    let keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    
    // this lets the D key have a value
    // this allows the D input
    let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    // if the W key is down, you move up
    this.timer += delta
    console.log(this.timer)
    if (keyW.isDown) {
     this.timer += delta
      if (this.timer > 425) {
      this.timer = 0
      this.frog.frogUp() * delta
      this.sound.play('frogNoise')
      this.sound.setVolume(0.5)
      this.frog.angle = 0
      // console.log("Up")
      }
      
    // if the A key is down, you move left
    } else if (keyA.isDown){
      this.timer += delta
      if (this.timer > 425) {
        this.timer = 0
        this.frog.frogLeft() * delta
        this.sound.play('frogNoise')
        this.sound.setVolume(0.5)
        this.frog.angle = 270
        // console.log("Left")
      }

    // if the S key is down, you move down
    } else if(keyS.isDown) {
      this.timer += delta
      if (this.timer > 425) {
        this.timer = 0
        this.frog.frogDown() * delta
        this.sound.play('frogNoise')
        this.sound.setVolume(0.5)
        this.frog.angle = 180
      // console.log("Down")
      }

    // if the D key is down, you move right
    } else if(keyD.isDown) {
        this.timer += delta
        if (this.timer > 425) {
        this.timer = 0
        this.frog.frogRight() * delta
        this.sound.play('frogNoise')
        this.sound.setVolume(0.5)
        this.frog.angle = 90
        //console.log("Right")
        }
    }

    // if the frog is at the end
    // the scene switches to the 
    // win scene
    if (this.frog.y < 60) {
      this.counting += 1
      this.frog.y = 1030

      // Plays this sound at half volume everytime the frog
      // makes it to the end
      this.sound.play('madeItNoise')
      this.sound.setVolume(0.5)
  
      if (this.counting == 1) {
        // frog one is 1070/2
        let podium1 = new Podium({scene:this,x:1070/2,y:80/2}).setScale(0.175)
        console.log("madeItOnce")
      }
  
      else if (this.counting == 2) {
        // frog two is 1550/2
        let podium2 = new Podium({scene:this,x:1550/2,y:80/2}).setScale(0.175)
        console.log("madeItTwice")
      }
  
      else if (this.counting == 3) {
        // frog three is 2260/2 
        let podium2 = new Podium({scene:this,x:2260/2,y:80/2}).setScale(0.175)
        console.log("madeItThree")
      }
      else {
        // frog four is 2760/2
        let podium2 = new Podium({scene:this,x:2760/2,y:80/2}).setScale(0.175)
        console.log("madeItFour") 
        this.sound.stopAll()
        this.scene.switch('winScene')
      }
    }

    // the car movement is updating
    // for all of the cars in the scene
    for (let counter = 0; counter < this.cars.length; counter++) {
      this.cars[counter].update()  * delta
    }
  }
}

// this exports the game scene
export default GameScene