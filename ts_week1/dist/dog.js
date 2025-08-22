"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal2_1 = require("./animal2");
class Dog extends animal2_1.Animal2 {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`Con ${this.name} keu gau gau.`);
    }
}
var dog = new Dog("Cho");
dog.bark();
