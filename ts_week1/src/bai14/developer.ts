import { Employee } from "./employee";

class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  public devInfo(): void {
    console.log(`${this.getName()} dang lam viec voi luong ${this.getSalary()}.`);
  }
}

const developer = new Developer("Hoang anh", 2004);
developer.devInfo();
