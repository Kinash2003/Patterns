class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 5;
    }
  
    _run(speed ) {
      this.speed = speed;
      console.log(`${this.name} runs at speed ${this.speed} km/h.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands motionless.`);
    }
  
}
  
class Dog extends Animal {

  constructor(name) {
      super(name);
      this.age = "Age";
    }
    hide() {
      console.log(`${this.name} is hiding.`);
    }
  
    stop() {
      super.stop(); 
      this.hide(); 
    }
}
let dog = new Dog("Dog");
console.log(dog);
dog.run(10); 
dog.stop(); 