"use strict";
class Singleton {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    static getInstance(name, age, id) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name, age, id);
        }
        return Singleton.instance;
    }
    singletonAge() {
        return this.age;
    }
    singletonAgeLogic() {
        this.age++;
    }
}
const data1 = Singleton.getInstance("Roman", 27, 8612125945624);
data1.singletonAgeLogic();
console.log(data1);
const data2 = Singleton.getInstance("Ivan", 24, 7419825345734);
console.log(data2);
console.log(data1 === data2);
//# sourceMappingURL=singleton.js.map