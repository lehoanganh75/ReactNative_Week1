"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
class Square extends shape_1.Shape {
    constructor(canh) {
        super();
        this.canh = canh;
    }
    area() {
        return this.canh * this.canh;
    }
}
const square = new Square(5);
console.log(`Area = ${square.area()}`);
