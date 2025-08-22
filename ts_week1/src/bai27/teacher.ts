import { Person2 } from "./person2";

class Teacher extends Person2 {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): string {
        return `Toi la ${this.name} nam nay toi ${this.age} tuoi toi day mon ${this.subject}`;
    }
}

const teacher = new Teacher("Hoang anh", 21, "Lap trinh di dong");
console.log(teacher.introduce());