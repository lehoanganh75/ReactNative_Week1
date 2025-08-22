export class Teacher2 {
    constructor(public name: string, public subject: string) {}
    
    getInfo(): string {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}