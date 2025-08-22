class Robot implements Movable {
    move(): void {
        console.log("Robot dang phat trien");
    }
}

const myRobot: Movable = new Robot();
myRobot.move();