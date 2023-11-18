"use strict";
class FlyweightKilled {
    constructor(killed) {
        this.killed = killed;
    }
}
class FlyweightFactoryKilled {
    static killed(killed) {
        if (!(killed in FlyweightFactoryKilled.flyweights)) {
            FlyweightFactoryKilled.flyweights[killed] = new FlyweightKilled(killed);
        }
        return FlyweightFactoryKilled.flyweights[killed];
    }
    static cache() {
        return Object.keys(FlyweightFactoryKilled.flyweights).length;
    }
}
FlyweightFactoryKilled.flyweights = {};
class Killed {
    constructor(killeds) {
        this.killeds = [];
        for (let i = 0; i < killeds.length; i++) {
            this.killeds.push(killeds.charCodeAt(i));
        }
    }
    output() {
        let ret = '';
        this.killeds.forEach((k) => {
            ret =
                ret +
                    String.fromCharCode(FlyweightFactoryKilled.killed(k).killed);
        });
        return ret;
    }
}
const killed = new Killed('1,2,5,2,3,4,1,2,4,5,2');
console.log(killed.output());
console.log(`Killed: ${'1,2,5,2,3,4,1,2,4,5,2'.length}`);
console.log(`Flyweight killed: ${FlyweightFactoryKilled.cache()}`);
//# sourceMappingURL=flyweight.js.map