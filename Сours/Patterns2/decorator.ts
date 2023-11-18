
interface ICoffee {
  productCoffee(): string
  price(): number
}

class Coffee implements ICoffee {

  private cost: number;

  constructor(){
    this.cost = 30;
  }

  productCoffee() {
      return 'Coffee'
  }
  
  price() {
      return this.cost
  }
}

class DecoratorMilkCoffee implements ICoffee {
  private _coffee: ICoffee;

  constructor(coffee: ICoffee) {
      this._coffee = coffee;
  }

  productCoffee() {
      return this._coffee.productCoffee() + ', milk'
  }

  price() {
      return this._coffee.price() + 8
  }
}

class CreamCoffee implements ICoffee {

  private _coffee: ICoffee;

  constructor(coffee: ICoffee) {
      this._coffee = coffee
  }

  productCoffee() {
      return this._coffee.productCoffee() + ', сream'
  }

  price() {
      return this._coffee.price() + 11
  }
}

class VanillaCoffee implements ICoffee {

  private _coffee: ICoffee;

  constructor(coffee: ICoffee) {
      this._coffee = coffee
  }

  productCoffee() {
      return this._coffee.productCoffee() + ', vanilla'
  }

  price() {
      return this._coffee.price() + 6
  }
}

class DiscountCoffee implements ICoffee {

  private _coffee: ICoffee;
  private percent: number;

  constructor(coffee: ICoffee, percent : number) {
      this._coffee = coffee;
      this.percent = percent;
  }

  productCoffee() {
      return this._coffee.productCoffee() + `, with discount ${this.percent}%`
  }

  price() {
       return this._coffee.price() * ((100 - this.percent) / 100);
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
