"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student2 = void 0;
class Student2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
}
exports.Student2 = Student2;
