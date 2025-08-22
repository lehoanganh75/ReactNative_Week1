"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const teacher_1 = require("./teacher");
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("Students:");
        this.students.forEach(s => console.log(s.getInfo()));
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(t.getInfo()));
    }
}
const school = new School();
school.addStudent(new student_1.Student2("Hoang Anh", 21));
school.addTeacher(new teacher_1.Teacher2("Thay Tien", "React Native"));
school.displayInfo();
