import { Student2 } from "./student";
import { Teacher2 } from "./teacher";

class School {
    private students: Student2[] = [];
    private teachers: Teacher2[] = [];

    addStudent(student: Student2): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher2): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("Students:");
        this.students.forEach(s => console.log(s.getInfo()));
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(t.getInfo()));
    }
}

const school = new School();

school.addStudent(new Student2("Hoang Anh", 21));

school.addTeacher(new Teacher2("Thay Tien", "React Native"));

school.displayInfo();