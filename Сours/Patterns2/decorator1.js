
class ICoffee {
    productCoffee() {}
    price() {}
}

class Coffee extends ICoffee {

    constructor(){
        super();
        this.cost = 30;
    }
    
    productCoffee() {
        return 'Coffee'
    }

    price() {
        return this.cost
    }
}

class DecoratorMilkCoffee extends ICoffee {
  
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    productCoffee() {
        return this.coffee.productCoffee() + ', milk'
    }

    price() {
        return this.coffee.price() + 8
    }
}

class CreamCoffee extends ICoffee {

    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    productCoffee() {
        return this.coffee.productCoffee() + ', сream'
    }

    price() {
        return this.coffee.price() + 11
    }
}

class VanillaCoffee extends ICoffee {

    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    productCoffee() {
        return this.coffee.productCoffee() + ', vanilla'
    }

    price() {
        return this.coffee.price() + 6
    }
}

class DiscountCoffee extends ICoffee {

    constructor(coffee, percent) {
        super();
        this.coffee = coffee;
        this.percent = percent;
    }

    productCoffee() {
        return this.coffee.productCoffee() + `, with discount ${this.percent}%`
    }

    price() {
         return this.coffee.price() * ((100 - this.percent) / 100);
    }
}

let сoffee = new Coffee()
console.log(сoffee.productCoffee())
console.log("Price:" + сoffee.price())

let milkCoffee = new DecoratorMilkCoffee(сoffee)
console.log(milkCoffee.productCoffee())
console.log("Price:" + milkCoffee.price())

let сreamCoffee = new CreamCoffee(milkCoffee)
console.log(сreamCoffee.productCoffee())
console.log("Price:" + сreamCoffee.price())

let vanillaCoffee = new VanillaCoffee(сreamCoffee)
console.log(vanillaCoffee.productCoffee())
console.log("Price:" + vanillaCoffee.price())

let discountCoffee = new DiscountCoffee(vanillaCoffee, 20)
console.log(discountCoffee.productCoffee())
console.log("Price:" + discountCoffee.price())
