

class AbstractBaseFactory1 {
    createInfantry(){
        return new AbstractInfantry1();
    }
    createTanker(){
        return new AbstractTanker1();
    };
}

class AbstractTanker1{
    attack() {
        return this.attack
    }
    defense() {
        return this.defense
    }
}

class AbstractInfantry1 {
    attack() {
        return this.attack
    }
    hide() {
        return this.hide
    }
}
class NecronsBaseFactory1 extends AbstractBaseFactory1 {
    createInfantry(){
        return new NecronsInfantry1();
    }
  
    createTanker(){
      return new NecronsTanker1();
    }
}
class NecronsTanker1 extends AbstractTanker1 {
    attack(){
      return 37;
    }
  
    defense(){
      return 25;
    }
}
class NecronsInfantry1 extends AbstractTanker1 {
    attack(){
      return 20;
    }
  
    hide(){
      return 15;
    }
}
class EldarsBaseFactory1 extends AbstractBaseFactory1 {
    createInfantry(){
        return new NecronsInfantry1();
    }
  
    createTanker(){
      return new NecronsTanker1();
    }
}
class EldarsInfantry1 extends AbstractTanker1 {
    attack(){
      return 45;
    }
  
    defense(){
      return 14;
    }
}
class EldarsTanker1 extends AbstractTanker1 {
    attack(){
      return 56;
    }
  
    hide(){
      return 10;
    }
}

const army = new NecronsTanker1().attack();

console.log(army)