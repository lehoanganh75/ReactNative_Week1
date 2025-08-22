"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("../bai1/person");
class Student extends person_1.Person {
    constructor(ten, age, grade) {
        super(ten, age);
        this.grade = grade;
    }
    displayAllInfo() {
        this.displayInfo();
        console.log(`Diem cua ban la: ${this.grade} diem`);
    }
}
const student = new Student("Le Hoang Anh", 21, 9);
student.displayAllInfo();
