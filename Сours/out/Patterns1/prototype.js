"use strict";
class Transport {
    constructor(color, price, autopilot) {
        this.color = color;
        this.price = price;
        this.autopilot = autopilot;
    }
    clone() {
        return new Transport(this.color, this.price, this.autopilot);
    }
}
class Car extends Transport {
    constructor(color, price, autopilot, wheels) {
        super(color, price, autopilot);
        this.wheels = wheels;
    }
    clone() {
        return new Car(this.color, this.price, this.autopilot, this.wheels);
    }
}
class Boat extends Transport {
    constructor(color, price, autopilot, sail) {
        super(color, price, autopilot);
        this.sail = sail;
    }
    clone() {
        return new Boat(this.color, this.price, this.autopilot, this.sail);
    }
}
const car = new Car('black', 300000, true, 4);
const car1 = car.clone();
const car2 = car.clone();
car2.color = 'red';
car2.price = 310000;
console.log(car1.clone());
console.log(car2.clone());
const boat = new Boat('white', 1000000, false, true);
const boat1 = boat.clone();
const boat2 = boat.clone();
boat2.autopilot = true;
boat2.price = 1200000;
console.log(boat1.clone());
console.log(boat2.clone());
//# sourceMappingURL=prototype.js.map