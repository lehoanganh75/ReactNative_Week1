import { Animal2 } from "./animal2";
import { Cat2 } from "./cat2";
import { Dog2 } from "./dog2";

const animals: Animal2[] = [new Animal2(), new Dog2(), new Cat2()];

for (const a of animals) {
    a.speak();
}