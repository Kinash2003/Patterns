"use strict";
class PowerBank {
    constructor() {
        this.connection = true;
        this.skilki_vіdsotkіv = 70;
    }
    сonnectionPowerBank() {
        console.log('PowerBank');
        console.log(`Connected a USB: ${this.connection}`);
        console.log(`Skilki vіdsotkіv: ${this.skilki_vіdsotkіv} %`);
    }
}
class Rosette {
    constructor() {
        this.connection = false;
    }
    сonnectionRosette() {
        console.log('Rosette');
        console.log(`Connected a fork: ${this.connection}`);
    }
}
class AdapterRosette {
    constructor(phone, connection) {
        this.phoneDevice = phone;
        this.connection = connection;
    }
    сonnectionRosette() {
        console.log("I want to charge the phone through");
        this.phoneDevice.сonnectionPowerBank();
    }
}
let phone = new PowerBank();
let connectionAdaptor = new AdapterRosette(phone, true);
connectionAdaptor.сonnectionRosette();
//# sourceMappingURL=adapter.js.map