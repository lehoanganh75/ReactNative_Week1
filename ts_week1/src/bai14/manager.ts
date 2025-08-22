import { Employee } from "./employee";

class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  public managerInfo(): void {
    console.log(`${this.getName()} la manager voi so luong la ${this.getSalary()}`);
  }
}

const manager = new Manager("Hoang anh", 752004);
manager.managerInfo();
