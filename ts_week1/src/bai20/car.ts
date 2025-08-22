class Car implements Vehicle {
  private speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  start(): void {
    console.log("Xe o to bat dau chay");
  }

  stop(): void {
    console.log("Xe o to dung");
  }

  getSpeed(): number {
    return this.speed;
  }
}

const myCar: Vehicle = new Car(60);
myCar.start();
console.log("Toc do xe o to ", myCar.getSpeed());
myCar.stop();
