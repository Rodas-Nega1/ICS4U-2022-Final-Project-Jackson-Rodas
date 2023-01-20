/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

export default class Podium extends Phaser.GameObjects.Sprite {
  constructor (config) {
    // this supers all the needed information, the scene, the x, the y, the image, and data
    super(config.scene,config.x,config.y, "podium")
    // this adds the image to the scene
    config.scene.add.existing(this)
  }
}
