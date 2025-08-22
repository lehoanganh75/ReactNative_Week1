"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person2 = void 0;
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Toi la ${this.name} nam nay toi ${this.age} tuoi.`;
    }
}
exports.Person2 = Person2;
