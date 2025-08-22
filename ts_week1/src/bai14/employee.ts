export class Employee {
  private name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public work(): void {
    console.log(`Dang lam ${this.name}`);
  }

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }
}