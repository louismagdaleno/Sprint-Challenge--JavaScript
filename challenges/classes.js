// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// Create CuboidMaker class
class CuboidMakerClass {
    constructor(object) {
        this.length = object.length,
        this.width = object.width,
        this.height = object.height
    }
    // refactored prototype function volume
    volume () {
        return this.length * this.width * this.height;
    }
    // refactored prototype function surfaceArea
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

// Stretch Goal
class CubeMaker extends CuboidMakerClass {
    constructor (object) {
        super(object)
    }
    volume () {
        // cube volume = length^3
        // Math.pow(base, exponent)
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        // cube SA = 6a^2
        return 6 * (Math.pow(this.length, 2));
    }

}
  
  // Create new object cuboid using class CuboidMaker
  const cuboid2 = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid2.volume()); // 100
  console.log(cuboid2.surfaceArea()); // 130

  // Create new cube object using CubeMaker
  const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
  })

  // Test CubeMaker methods
  console.log(cube.volume()); // 64
  console.log(cube.surfaceArea()); // 96
  
  