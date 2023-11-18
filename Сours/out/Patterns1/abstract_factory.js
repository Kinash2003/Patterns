"use strict";
class AbstractBaseFactory {
}
class AbstractTanker {
}
class AbstractInfantry {
}
class NecronsBaseFactory extends AbstractBaseFactory {
    createInfantry() {
        return new NecronsInfantry();
    }
    createTanker() {
        return new NecronsTanker();
    }
}
class EldarsBaseFactory extends AbstractBaseFactory {
    createInfantry() {
        return new EldarsInfantry();
    }
    createTanker() {
        return new EldarsTanker();
    }
}
class EldarsTanker extends AbstractTanker {
    attack() {
        return 23;
    }
    defense() {
        return 42;
    }
}
class EldarsInfantry extends AbstractInfantry {
    attack() {
        return 9;
    }
    hide() {
        return 50;
    }
}
class NecronsTanker extends AbstractTanker {
    attack() {
        return 37;
    }
    defense() {
        return 25;
    }
}
class NecronsInfantry extends AbstractInfantry {
    attack() {
        return 21;
    }
    hide() {
        return 20;
    }
}
class Game {
    constructor(baseFactory) {
        this.baseFactory = baseFactory;
    }
    factory1() {
        const group = [];
        group.push(this.baseFactory.createTanker());
        group.push(this.baseFactory.createTanker());
        group.push(this.baseFactory.createTanker());
        group.push(this.baseFactory.createInfantry());
        group.push(this.baseFactory.createInfantry());
        console.log("Attack:", group.reduce((acc, unit) => acc + unit.attack(), 0));
    }
    factory2() {
        const group = [];
        group.push(this.baseFactory.createInfantry());
        group.push(this.baseFactory.createInfantry());
        console.log("Hide:", group.reduce((acc, unit) => acc + unit.hide(), 0));
    }
    factory3() {
        const group = [];
        group.push(this.baseFactory.createTanker());
        group.push(this.baseFactory.createTanker());
        group.push(this.baseFactory.createTanker());
        console.log("Defense:", group.reduce((acc, unit) => acc + unit.defense(), 0));
    }
}
const necronsGame = new Game(new NecronsBaseFactory());
console.log("Necrons:");
necronsGame.factory1();
necronsGame.factory2();
necronsGame.factory3();
const eldarsGame = new Game(new EldarsBaseFactory());
console.log("Eldars:");
eldarsGame.factory1();
eldarsGame.factory2();
eldarsGame.factory3();
//# sourceMappingURL=abstract_factory.js.map