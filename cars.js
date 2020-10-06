/**
 * Exercise 3
 */

// Declares Vehicle Class
class Vehicle {
  // Constructor
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // Information Method
  Information() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Declares Cars Class and extends Vehicle Class
class Cars extends Vehicle {
  // Constructor
  constructor(make, model, year, doors) {
    // Invoke constructor from Vehicle Class
    super(make, model, year);
    this.doors = doors;
  }
  // Information Method
  Information() {
    // Invoke Information Method from Vehicle Class
    super.Information();
    console.log(`Doors: ${this.doors}`);
  }
}

// Instantiates a new instance of the Cars Class
let myCar = new Cars('VW', 'Golf', 2017, 5);

// Returns Make: VW, Model: Golf, Year: 2017, Doors: 5
myCar.Information();
