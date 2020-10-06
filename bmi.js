/**
 * Exercise 2
 */

// Declares BMI Class
class BMI {
  // Constructor
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
  // calculateBMI Method
  calculateBMI() {
    let BMI = this.weight / this.height ** 2;
    return BMI;
  }
}

// Instantiates a new instance of the BMI Class
let myBMI = new BMI(2, 90);

// Invokes method "calculateBMI()"
let calculatedBMI = myBMI.calculateBMI();

// Returns 22.5
console.log(calculatedBMI);
