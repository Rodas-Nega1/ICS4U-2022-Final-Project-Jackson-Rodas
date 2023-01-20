/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

export default class Frog extends Phaser.GameObjects.Sprite {
  #speed
  constructor (config) {

    // this supers all the needed information, the scene, the x, the y, the image, and data
    super(config.scene,config.x,config.y, "frog")
    
    // this is a reference we used to find the physics
    // https://www.html5gamedevs.com/topic/37607-add-matter-physics-body-to-gameobjectssprite/
    // this enables physics for the frog
    config.scene.physics.world.enable(this)

    // this adds the image to the scene
    config.scene.add.existing(this)

    // Speed for the frog
    // original speed is 10
    // speed for testing is 100
    // speed for gridlock is 83.5
    // let speed = 83.5
    this.#speed = 83.5
  }

  
  frogUp() {

    // this adds the maximum movement for the frog going up
    if (this.y < 50) {
      this.y = 50
    }

    // this adds the speed in the up direction
    this.y -= this.#speed
  }

  frogDown() {

    // this adds the minimum movement for the frog going down
    if (this.y > 956.5)
      this.y = 956.5

    // this adds the speed in the down direction
    this.y += this.#speed
  }

  frogLeft() {
  
    // this adds the minimum movement for the frog going left
    if (this.x < 130) {
      this.x = 130
    }
  
    // this adds the speed in the left direction
    this.x -= this.#speed
  }

  frogRight() {
  
    // this adds the maximum movement for the frog going right
    if (this.x > 1800) {
      this.x = 1800
    }
    
    // this adds the speed in the right direction
    this.x += this.#speed
  } 
}       