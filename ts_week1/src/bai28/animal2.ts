export class Animal2 {
    protected makeSound(): string {
        return "Some generic sound";
    }

    public speak(): void {
        console.log(this.makeSound());
    }
}