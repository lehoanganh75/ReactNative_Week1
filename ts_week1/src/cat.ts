import { Animal2 } from "./animal2";

class Cat extends Animal2{
    constructor(name: string){
        super(name);
    }

    meow(): void{
        console.log(`Con ${this.name} keu meo meo.`);
    }
}

var meo = new Cat("meo");
meo.meow();