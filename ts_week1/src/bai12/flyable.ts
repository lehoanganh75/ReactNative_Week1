class Bird implements Flyable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): void {
    console.log(`Con ${this.name} dang bay`);
  }
}

const bird = new Bird("Vet");
bird.fly();