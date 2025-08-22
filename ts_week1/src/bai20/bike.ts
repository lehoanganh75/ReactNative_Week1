class Bike implements Vehicle {
  private speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  start(): void {
    console.log("Xe dap chay");
  }

  stop(): void {
    console.log("Xe dap dung");
  }

  getSpeed(): number {
    return this.speed;
  }
}

const myBike: Vehicle = new Bike(20);
myBike.start();
console.log("Toc do xe dap ", myBike.getSpeed());
myBike.stop();