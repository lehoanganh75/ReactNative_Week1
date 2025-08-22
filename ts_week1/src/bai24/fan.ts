import { Appliance } from "./appliance";

class Fan extends Appliance {
    turnOn(): void {
        console.log("Quat dang quay");
    }
}

const fan: Appliance = new Fan();
fan.turnOn();

