"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
}
const circle = new Circle(5);
console.log(`Area = ${circle.area()}`);
