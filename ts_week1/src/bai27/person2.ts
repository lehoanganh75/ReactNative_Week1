export class Person2 {
    constructor(public name: string, public age: number) {}

    introduce(): string {
        return `Toi la ${this.name} nam nay toi ${this.age} tuoi.`;
    }
}