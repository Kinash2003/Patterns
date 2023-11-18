   
class IProductTransport {
  constructor(){
    this.name = '';
    this.color = '';
    this.price = 0;
    }
}

class TransportProduct extends IProductTransport {
  constructor(){
    super();
  }
  
  getTransport() {
      return {
          name: this.name,
          color: this.color,
          price: this.price,
      }
  }
}
class TransportShip extends TransportProduct {
  constructor() {
      super()
      this.name = 'Ship'
      this.price = 80000
      this.color = 'Green'
  }
}

class TransportPlane extends TransportProduct {
  constructor() {
      super()
      this.name = 'Plane'
      this.price = 1000000
      this.color = 'Blue'
  }
}

class TransportCar extends TransportProduct {
  constructor() {
      super()
      this.name = 'Car'
      this.price = 400000
      this.color = 'Red'
  }
}

class Transport  {
  static getTransport(transport){
      if (transport == 'Ship') {
          return new TransportShip()
      } else if (transport == 'Plane') {
          return new TransportPlane()
      } else{
          return new TransportCar()
      } 
  }
}

const product = Transport.getTransport('Plane');
const product1 = Transport.getTransport('Ship');
const product2 = Transport.getTransport('');

console.log(product.getTransport());
console.log(product1.getTransport()); 
console.log(product2.getTransport());   
