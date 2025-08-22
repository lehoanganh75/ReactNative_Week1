"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appliance_1 = require("./appliance");
class Air extends appliance_1.Appliance {
    turnOn() {
        console.log("May lanh dang bat");
    }
}
const ac = new Air();
ac.turnOn();
