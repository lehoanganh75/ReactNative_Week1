import { Animal2 } from "./animal2";

class Dog extends Animal2{
    constructor(name: string){
        super(name);
    }

    bark(): void{
        console.log(`Con ${this.name} keu gau gau.`);
    }
}

var dog = new Dog("Cho");
dog.bark();