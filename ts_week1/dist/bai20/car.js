"use strict";
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    start() {
        console.log("Xe o to bat dau chay");
    }
    stop() {
        console.log("Xe o to dung");
    }
    getSpeed() {
        return this.speed;
    }
}
const myCar = new Car(60);
myCar.start();
console.log("Toc do xe o to ", myCar.getSpeed());
myCar.stop();
