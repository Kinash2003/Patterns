"use strict";
class Сolors {
    constructor() {
        this.colorRed = ["red"];
        this.colorGreen = ["green"];
    }
    colorRedCar() {
        return this.colorRed;
    }
    colorGreenCar() {
        return this.colorGreen;
    }
}
class ProxySpecies {
    constructor() {
        this.colorRed = [];
        this.species = new Сolors();
    }
    colorRedCar() {
        if (this.colorRed.length === 0) {
            console.log("Car:");
            this.colorRed = this.species.colorRedCar();
            return this.colorRed;
        }
        else {
            console.log("House:");
            this.colorRed = this.species.colorGreenCar();
            return this.colorRed;
        }
    }
    colorGreenCar() {
        return this.species;
    }
}
const species = new ProxySpecies();
console.log(species.colorRedCar());
console.log("///////////////////////////");
console.log(species.colorRedCar());
console.log("///////////////////////////");
console.log(species.colorRedCar());
//# sourceMappingURL=proxy.js.map