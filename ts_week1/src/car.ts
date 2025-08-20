export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;

    }

    carInfo(): void {
        console.log(`Brand: ${this.brand}, model: ${this.model} && year: ${this.year}.`);
    }
}

const car = new Car("Hoang Anh", "Lambogrini", 2004);
car.carInfo();
