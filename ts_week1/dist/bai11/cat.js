"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal2_1 = require("./animal2");
class Cat extends animal2_1.Animal2 {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`Con ${this.name} keu meo meo.`);
    }
}
var meo = new Cat("meo");
meo.meow();
