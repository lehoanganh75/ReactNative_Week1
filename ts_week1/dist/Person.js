"use strict";
class Person {
    constructor(ten, age) {
        this.ten = ten;
        this.age = age;
    }
    displayInfo() {
        console.log(`Xin chao: ${this.ten}, tuoi cua ban: ${this.age} tuoi.`);
    }
}
const person = new Person("Lê Hoàng Anh", 21);
person.displayInfo();
