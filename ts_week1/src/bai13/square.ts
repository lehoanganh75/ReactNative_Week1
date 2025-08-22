import {Shape} from "./shape"

class Square extends Shape {
  canh: number;

  constructor(canh: number) {
    super();
    this.canh = canh;
  }

  area(): number {
    return this.canh * this.canh;
  }
}

const square = new Square(5);
console.log(`Area = ${square.area()}`);