"use strict";
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`Con ${this.name} dang boi`);
    }
}
const ca = new Fish("ca chep");
ca.swim();
