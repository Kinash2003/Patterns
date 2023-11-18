class Barracks {

    warrior() {}
    willBeMade() {}
    description() {}
    wereMade() {}

    barracks() {
        this.warrior();
        this.willBeMade();
        this.description();
        this.wereMade();
    }
}

class BarracksPikemen extends Barracks {

    constructor() {
        super();
        this.damage = 120;
        this.range = 5;
        this.speed = 25;
        this.defense = 30;
        this.weremade = true;
    }

    warrior() {
        console.log("Warrior Pikemen");
    }

    willBeMade() {
        console.log("Will be made Pikemen: " + (Math.floor(Math.random() * 100)));
    }

    description() {
        console.log("Description Pikemen:");
        console.log("Damage: " + this.damage, "Range: " + this.range, "Speed: " + this.speed, "Defense: " + this.defense);
    }

    wereMade() {
        console.log("Were made Pikemen: " + this.weremade);
    }
}
class BarracksArcher extends Barracks {

    constructor() {
        super();
        this.damage = 40;
        this.range = 70;
        this.speed = 50;
        this.crete = 10;
        this.weremade = true;
    }

    warrior() {
        console.log("Warrior Archer");
    }
    willBeMade() {
        console.log("Will be made Archer: " + (Math.floor(Math.random() * 100)));
    }

    description() {
        console.log("Description Archer:");
        console.log("Damage: " + this.damage, "Range: " + this.range, "Speed: " + this.speed, "Crete: " + this.crete);
    }

    wereMade() {
        console.log("Were made Archer: " + this.weremade);
    }
}
const pikemen = new BarracksPikemen();
const archer = new BarracksArcher();
pikemen.barracks();
console.log("/////////////////////////");
archer.barracks();