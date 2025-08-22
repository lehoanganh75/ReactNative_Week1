"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`Dang lam ${this.name}`);
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
