"use strict";
class AnimalsLeaf {
    constructor(name) {
        this.animal = undefined;
        this.name = name;
    }
    indent(indent) {
        console.log(`${indent}<> ${this.name}`);
    }
}
class AnimalsComposite {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    indent(indent) {
        console.log(`${indent}<> ${this.name}`);
        this.components.forEach((component) => {
            component.indent(indent + '_ _ ');
        });
    }
    attach(component) {
        component.animal = this;
        this.components.push(component);
    }
}
const animals = new AnimalsComposite('Animals');
const pets = new AnimalsComposite('Pets');
const mammals = new AnimalsComposite('Mammals');
const woodpecker = new AnimalsLeaf('Woodpecker');
const pike = new AnimalsLeaf('Pike');
const dog = new AnimalsLeaf('Dog');
const lion = new AnimalsLeaf('Lion');
animals.attach(pike);
animals.attach(woodpecker);
animals.attach(pets);
pets.attach(dog);
mammals.attach(lion);
animals.attach(mammals);
animals.indent('');
console.log();
mammals.attach(pets);
animals.indent('');
//# sourceMappingURL=composite.js.map