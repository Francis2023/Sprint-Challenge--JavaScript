// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attrs){
    this.length = attrs.length
    this.width = attrs.width;
    this.height = attrs.height;
    }
    volume(){
        let volume = this.length * this.width * this.height;
        return volume;
    }
    surfaceArea(){
        let n = this.length * this.width + this.length * this.height + this.width * this.height;
        let surfaceArea = 2 * n;
        return surfaceArea;
    }
  }
  
  
  
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  class cuboid extends CuboidMaker{
      constructor(attrs){
          super(attrs);
      }
  }
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.