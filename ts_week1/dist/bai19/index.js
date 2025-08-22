"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal2_1 = require("./animal2");
const cat2_1 = require("./cat2");
const dog2_1 = require("./dog2");
const animals = [new animal2_1.Animal2(), new dog2_1.Dog2(), new cat2_1.Cat2()];
for (const a of animals) {
    a.speak();
}
