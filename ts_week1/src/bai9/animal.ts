interface Animal{
    name:string;
    sound():void;
}

class Cat implements Animal {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    sound(): void {
        console.log(`Tieng cua con ${this.name} keu: Meo meo`);
    }
}

const animal = new Cat("Meo");

animal.sound();