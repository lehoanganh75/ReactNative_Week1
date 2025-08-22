"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Manager extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    managerInfo() {
        console.log(`${this.getName()} la manager voi so luong la ${this.getSalary()}`);
    }
}
const manager = new Manager("Hoang anh", 752004);
manager.managerInfo();
