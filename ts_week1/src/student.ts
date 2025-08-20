import { Person } from './person';

class Student extends Person {
    grade:number;

    constructor(ten:string, age:number, grade:number) {
        super(ten, age);
        this.grade = grade;
    }

    displayAllInfo(): void {
        this.displayInfo();
        console.log(`Diem cua ban la: ${this.grade} diem`);
    }
}

const student = new Student("Le Hoang Anh", 21, 9);
student.displayAllInfo();
