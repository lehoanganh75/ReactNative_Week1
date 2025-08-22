"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appliance_1 = require("./appliance");
class Fan extends appliance_1.Appliance {
    turnOn() {
        console.log("Quat dang quay");
    }
}
const fan = new Fan();
fan.turnOn();
