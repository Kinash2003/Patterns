
class Animal {
    constructor(
      public name: string,
    ) {}
    makeSound(){
      console.log('Animal sound.');
    }
    run(): void {} 
  }
  
class Dog extends Animal {
  constructor(
    public name: string,
  ) {
    super(name);
  }
  makeSound(){
    console.log('Barks.');
  }
  run() {
    console.log('Run with my tail wagging.');
  }
}
  
class Cat extends Animal {
  constructor(
    public name: string,
  ) {
    super(name);
  }
  makeSound(){
    console.log('Meow.');
  }
  run() {
    console.log('Run.');
  }
}

class Lion extends Animal {
  constructor(
    public name: string,
  ) {
    super(name);
  }
}

function makeAnimalSound(animal:Animal){
  animal.makeSound();
  animal.run();
}

let animal_animal = new Animal('Animal');
let animal_dog = new Dog('Dog');
let animal_cat = new Cat('Cat');
let animal_lion = new Lion('Lion');

makeAnimalSound(animal_animal);
makeAnimalSound(animal_dog);
makeAnimalSound(animal_cat);
makeAnimalSound(animal_lion);