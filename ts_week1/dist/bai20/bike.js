"use strict";
class Bike {
    constructor(speed) {
        this.speed = speed;
    }
    start() {
        console.log("Xe dap chay");
    }
    stop() {
        console.log("Xe dap dung");
    }
    getSpeed() {
        return this.speed;
    }
}
const myBike = new Bike(20);
myBike.start();
console.log("Toc do xe dap ", myBike.getSpeed());
myBike.stop();
