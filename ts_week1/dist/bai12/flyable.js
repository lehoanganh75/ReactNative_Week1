"use strict";
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`Con ${this.name} dang bay`);
    }
}
const bird = new Bird("Vet");
bird.fly();
