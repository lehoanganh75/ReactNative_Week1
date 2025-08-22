import { Appliance } from "./appliance";

class Air extends Appliance {
    turnOn(): void {
        console.log("May lanh dang bat");
    }
}

const ac: Appliance = new Air();
ac.turnOn();