export class Retangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

     calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}

const retangle = new Retangle(1234, 5678);
console.log(`Chu vi: ${retangle.calculateArea()}`);
console.log(`Dien tich: ${retangle.calculatePerimeter()}`);

