import { Animal2 } from "./animal2";

export class Cat2 extends Animal2 {
  protected makeSound(): string {
        return "Meow meow";
    }
}


const cat = new Cat2();
cat.speak();