"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Developer extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    devInfo() {
        console.log(`${this.getName()} dang lam viec voi luong ${this.getSalary()}.`);
    }
}
const developer = new Developer("Hoang anh", 2004);
developer.devInfo();
