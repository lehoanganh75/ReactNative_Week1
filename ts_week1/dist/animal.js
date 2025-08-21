"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`Tieng cua con ${this.name} keu: Meo meo`);
    }
}
const animal = new Cat("Meo");
animal.sound();
