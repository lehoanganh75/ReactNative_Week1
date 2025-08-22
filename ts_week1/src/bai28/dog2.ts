import { Animal2 } from "./animal2";

export class Dog2 extends Animal2 {
    protected makeSound(): string {
        return "keu gau gau";
    }
}
const dog = new Dog2();
dog.speak(); 