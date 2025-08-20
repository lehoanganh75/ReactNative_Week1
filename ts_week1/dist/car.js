"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    carInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model} && year: ${this.year}.`);
    }
}
exports.Car = Car;
const car = new Car("Hoang Anh", "Lambogrini", 2004);
car.carInfo();
