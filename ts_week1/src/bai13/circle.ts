import { Shape } from "./shape";

class Circle extends Shape {
  r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  area(): number {
    return Math.PI * this.r * this.r;
  }
}

const circle = new Circle(5);
console.log(`Area = ${circle.area()}`);