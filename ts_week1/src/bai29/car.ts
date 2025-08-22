class Car2 implements Movable {
    move(): void {
        console.log("Chiec xe dang di");
    }
}

const myCar2: Movable = new Car2();
myCar2.move();