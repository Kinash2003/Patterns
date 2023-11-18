

abstract class AbstractBaseFactory {
    abstract createTanker(): AbstractTanker;
    abstract createInfantry(): AbstractInfantry;
}

abstract class AbstractTanker {
    abstract attack(): number;
    abstract defense(): number;
}

abstract class AbstractInfantry {
    abstract attack(): number;
    abstract hide(): number;
}

class NecronsBaseFactory extends AbstractBaseFactory {
    createInfantry(): AbstractInfantry {
      return new NecronsInfantry();
    }
  
    createTanker(): AbstractTanker {
      return new NecronsTanker();
    }
}

class EldarsBaseFactory extends AbstractBaseFactory {
    createInfantry(): AbstractInfantry {
      return new EldarsInfantry();
    }
  
    createTanker(): AbstractTanker {
      return new EldarsTanker();
    }
}
class EldarsTanker extends AbstractTanker {
    attack(): number {
      return 23;
    }
    defense(): number {
      return 42;
    }
}

class EldarsInfantry extends AbstractInfantry {
    attack(): number {
      return 9;
    }
  
    hide(): number {
      return 50;
    }
}

class NecronsTanker extends AbstractTanker {
    attack(): number {
      return 37;
    }
  
    defense(): number {
      return 25;
    }
}
  
class NecronsInfantry extends AbstractInfantry {
    attack(): number {
      return 21;
    }
  
    hide(): number {
      return 20;
    }
}
class Game {
    constructor(public baseFactory: AbstractBaseFactory) {}
  
    factory1() {
      const group: (AbstractInfantry | AbstractTanker)[] = [];
  
      group.push(this.baseFactory.createTanker());
      group.push(this.baseFactory.createTanker());
      group.push(this.baseFactory.createTanker());
      group.push(this.baseFactory.createInfantry());
      group.push(this.baseFactory.createInfantry());
  
      console.log(
        "Attack:",
        group.reduce((acc, unit) => acc + unit.attack(), 0)
      );
    }
    factory2() {
      const group: (AbstractInfantry)[] = [];
        group.push(this.baseFactory.createInfantry());
        group.push(this.baseFactory.createInfantry());
  
      console.log(
        "Hide:",
        group.reduce((acc, unit) => acc + unit.hide(), 0)
      );
    }
    factory3() {
      const group: (AbstractTanker)[] = [];
  
      group.push(this.baseFactory.createTanker());
      group.push(this.baseFactory.createTanker());
      group.push(this.baseFactory.createTanker());
      
      console.log(
        "Defense:",
        group.reduce((acc, unit) => acc + unit.defense(), 0)
      );
    }
}

const necronsGame: Game = new Game(new NecronsBaseFactory());
console.log("Necrons:");
necronsGame.factory1();
necronsGame.factory2();
necronsGame.factory3();

const eldarsGame: Game = new Game(new EldarsBaseFactory());
console.log("Eldars:");
eldarsGame.factory1();
eldarsGame.factory2();
eldarsGame.factory3();
