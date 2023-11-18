"use strict";
class Coffee {
    constructor() {
        this.cost = 30;
    }
    productCoffee() {
        return 'Coffee';
    }
    price() {
        return this.cost;
    }
}
class DecoratorMilkCoffee {
    constructor(coffee) {
        this._coffee = coffee;
    }
    productCoffee() {
        return this._coffee.productCoffee() + ', milk';
    }
    price() {
        return this._coffee.price() + 8;
    }
}
class CreamCoffee {
    constructor(coffee) {
        this._coffee = coffee;
    }
    productCoffee() {
        return this._coffee.productCoffee() + ', сream';
    }
    price() {
        return this._coffee.price() + 11;
    }
}
class VanillaCoffee {
    constructor(coffee) {
        this._coffee = coffee;
    }
    productCoffee() {
        return this._coffee.productCoffee() + ', vanilla';
    }
    price() {
        return this._coffee.price() + 6;
    }
}
class DiscountCoffee {
    constructor(coffee, percent) {
        this._coffee = coffee;
        this.percent = percent;
    }
    productCoffee() {
        return this._coffee.productCoffee() + `, with discount ${this.percent}%`;
    }
    price() {
        return this._coffee.price() * ((100 - this.percent) / 100);
    }
}
let сoffee = new Coffee();
console.log(сoffee.productCoffee());
console.log("Price:" + сoffee.price());
let milkCoffee = new DecoratorMilkCoffee(сoffee);
console.log(milkCoffee.productCoffee());
console.log("Price:" + milkCoffee.price());
let сreamCoffee = new CreamCoffee(milkCoffee);
console.log(сreamCoffee.productCoffee());
console.log("Price:" + сreamCoffee.price());
let vanillaCoffee = new VanillaCoffee(сreamCoffee);
console.log(vanillaCoffee.productCoffee());
console.log("Price:" + vanillaCoffee.price());
let discountCoffee = new DiscountCoffee(vanillaCoffee, 20);
console.log(discountCoffee.productCoffee());
console.log("Price:" + discountCoffee.price());
//# sourceMappingURL=decorator.js.map