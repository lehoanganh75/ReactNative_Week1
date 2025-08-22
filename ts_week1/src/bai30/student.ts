export class Student2 {
    constructor(public name: string, public age: number) {}
    
    getInfo(): string {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
}