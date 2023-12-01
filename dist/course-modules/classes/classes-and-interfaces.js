"use strict";
// Classes are able to implement interfaces.
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    ;
    printColor() {
        console.log(`${this.color}`);
    }
}
const bike1 = new Bike("green");
const jacket1 = new Jacket("blue", "Table");
console.log(jacket1.printColor());
