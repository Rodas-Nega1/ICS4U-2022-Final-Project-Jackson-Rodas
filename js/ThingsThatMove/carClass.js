/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Car class

export default class Car extends Phaser.GameObjects.Sprite {
  constructor(config) {

    // this supers all the needed information, the scene, the x, the y, the image, and data
    super(config.scene, config.x, config.y, "car")

    // this is a reference we used to find the physics
    // https://www.html5gamedevs.com/topic/37607-add-matter-physics-body-to-gameobjectssprite/
    // this enables physics for the car
    config.scene.physics.world.enable(this)

    // this adds the image to the scene
    config.scene.add.existing(this)

    // Random Speed for each of the cars
    this.speed = Phaser.Math.Between(5, 15)
    this.random = Phaser.Math.Between(1, 2)
  }

  update(time, delta) {

    // this sets the x at the speed, and makes sure the cars
    // do not go out of bounds, and when they hit the minimum x 
    // coordanite, they reset to the far left of the screen

    if (this.random === 2) {
      this.x -= this.speed;
      if (this.x < 60) {
        this.x = 1920;
      }
    }
    if (this.random === 1) {
      this.x += this.speed;
      this.angle = 180
      if (this.x > 1920) {
        this.x = 60;
      }
    }
  }
}