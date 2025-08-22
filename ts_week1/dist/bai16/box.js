"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Box = Box;
let so = new Box(75);
console.log("Box so:", so.getValue());
let chuoi = new Box("Hoang anh");
console.log("Box chuoi:", chuoi.getValue());
