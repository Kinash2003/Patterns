class ІPowerBank{
    constructor(connection,skilki_vіdsotkіv){
        this.connection = connection;
        this.skilki_vіdsotkіv = skilki_vіdsotkіv;
    }
    сonnectionPowerBank(){};
}

class IRosette{
    constructor(connection){
        this.connection = connection;
    }
    сonnectionRosette() {};
}

class PowerBank extends ІPowerBank {

    constructor() {
        super();
        this.connection = true;
        this.skilki_vіdsotkіv = 70;
    }

    сonnectionPowerBank() {
        console.log('PowerBank');
        console.log(`Connection a USB: ${this.connection}`);
        console.log(`Skilki vіdsotkіv: ${this.skilki_vіdsotkіv} %`);
    }
}

class Rosette extends IRosette {

    constructor() {
        super();
        this.connection = false;
    }

    сonnectionRosette() {
        console.log('Rosette');
        console.log(`Connectiona a fork: ${this.connection}`);
    }
}

class AdapterRosette extends IRosette {
    
    constructor(connection) {
        super();
        this.phoneDevice = phone;
        this.connection = connection;
    }

    сonnectionRosette() {
        console.log("I want to charge the phone through");
        this.phoneDevice.сonnectionPowerBank();
    }
}

let phone = new PowerBank();
let connectionAdaptor = new AdapterRosette(phone,true);

connectionAdaptor.сonnectionRosette();