class Fish implements Swimmable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log(`Con ${this.name} dang boi`);
  }
}

const ca = new Fish("ca chep");
ca.swim();
