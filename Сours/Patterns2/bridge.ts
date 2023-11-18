
class Work {
    private work_make: Make;
  
    constructor(work_make: Make) {
      this.work_make = work_make;
    }
  
    work(): void {
      this.work_make.make();
    }
}
  
class ToPaint extends Work {
    work(): void {
      console.log('They said to paint it')
      super.work();
    }
}
  
  class ToBuild extends Work {
    work(): void {
      console.log('They said to build it')
      super.work();
    }
  }
  
  interface Make {
    make(): void;
  }
  
  class Fence implements Make {
    make(): void {
      console.log('Fence');
    }
  }
  
  class House implements Make {
    make(): void {
      console.log('House');
    }
  }
  

const paint= new ToPaint(new Fence());
const build = new ToBuild(new House());
const paint1= new ToBuild(new Fence());
const build1 = new ToPaint(new House());

paint.work();
console.log('////////////////////////////////////////');
build.work();
console.log('////////////////////////////////////////');
paint1.work();
console.log('////////////////////////////////////////');
build1.work();