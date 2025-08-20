"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangle = void 0;
class Retangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
exports.Retangle = Retangle;
const retangle = new Retangle(1234, 5678);
console.log(`Chu vi: ${retangle.calculateArea()}`);
console.log(`Dien tich: ${retangle.calculatePerimeter()}`);
