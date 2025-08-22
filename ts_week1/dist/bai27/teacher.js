"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person2_1 = require("./person2");
class Teacher extends person2_1.Person2 {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        return `Toi la ${this.name} nam nay toi ${this.age} tuoi toi day mon ${this.subject}`;
    }
}
const teacher = new Teacher("Hoang anh", 21, "Lap trinh di dong");
console.log(teacher.introduce());
