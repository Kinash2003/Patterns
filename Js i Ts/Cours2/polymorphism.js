"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('Animal sound.');
    };
    Animal.prototype.run = function () { };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Barks.');
    };
    Dog.prototype.run = function () {
        console.log('Run with my tail wagging.');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow.');
    };
    Cat.prototype.run = function () {
        console.log('Run.');
    };
    return Cat;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    return Lion;
}(Animal));
function makeAnimalSound(animal) {
    animal.makeSound();
    animal.run();
}
var animal_animal = new Animal('Animal');
var animal_dog = new Dog('Dog');
var animal_cat = new Cat('Cat');
var animal_lion = new Lion('Lion');
makeAnimalSound(animal_animal);
makeAnimalSound(animal_dog);
makeAnimalSound(animal_cat);
makeAnimalSound(animal_lion);
