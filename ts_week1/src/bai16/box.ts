export class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public setValue(value: T): void {
        this.value = value;
    }
}

let so = new Box<number>(75);
console.log("Box so:", so.getValue());

let chuoi = new Box<string>("Hoang anh");
console.log("Box chuoi:", chuoi.getValue());
