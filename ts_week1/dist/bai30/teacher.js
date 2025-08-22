"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher2 = void 0;
class Teacher2 {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    getInfo() {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}
exports.Teacher2 = Teacher2;
