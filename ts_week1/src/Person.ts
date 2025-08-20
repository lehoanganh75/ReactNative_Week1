class Person {
    ten:string;
    age:number;

    constructor(ten:string, age:number) {
        this.ten = ten;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Xin chao: ${this.ten}, tuoi cua ban: ${this.age} tuoi.`);
    }
}

const person = new Person("Le Hoang Anh", 21);
person.displayInfo();
