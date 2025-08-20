"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(ten, age) {
        this.ten = ten;
        this.age = age;
    }
    displayInfo() {
        console.log(`Xin chao: ${this.ten}, tuoi cua ban: ${this.age} tuoi.`);
    }
}
exports.Person = Person;
// const person = new Person("Le Hoang Anh", 21);
// person.displayInfo();
