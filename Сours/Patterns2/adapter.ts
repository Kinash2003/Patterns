
interface ІPowerBank{
    connection: boolean
    skilki_vіdsotkіv: number
    сonnectionPowerBank: Function
}

interface IRosette{
    connection: boolean
    сonnectionRosette: Function
}

class PowerBank implements ІPowerBank {

    public connection: boolean
    public skilki_vіdsotkіv: number
    
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

class Rosette implements IRosette {

    public connection: boolean;
    
    constructor() {
        this.connection = false;
    }

    сonnectionRosette() {
        console.log('Rosette');
        console.log(`Connected a fork: ${this.connection}`);
    }
}


class AdapterRosette implements IRosette {
    
    private phoneDevice: ІPowerBank
    public connection: boolean

    constructor(phone:ІPowerBank,connection: boolean) {
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