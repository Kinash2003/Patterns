
class Work {

    constructor(work_make) {
        this.work_make = work_make;
    }

    work() {
        this.work_make.make();
    }
    
}
class ToPaint extends Work{
    work(){
        console.log('They said to paint it')
        super.work();
    }
}

class ToBuild extends Work {
    work() {
      console.log('They said to build it')
      super.work();
    }
}

class Make {
    make(){};
}

class Fence extends Make{
    make() {
        console.log('Fence');
    }
}

class House extends Make{
    make() {
        console.log('House');
    }
}

const paint = new ToPaint(new Fence());
const build = new ToBuild(new House());
const paint1 = new ToBuild(new Fence());
const build1 = new ToPaint(new House());

paint.work();
console.log('////////////////////////////////////////');
build.work();
console.log('////////////////////////////////////////');
paint1.work();
console.log('////////////////////////////////////////');
build1.work();