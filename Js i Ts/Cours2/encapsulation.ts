// public, private, protected
class Data {
    public isEconomist: boolean;
  
    constructor(
      protected name: string,
      public id: number,
      public age: number,
      //private salary: number,
    ) {
      this.isEconomist = true;
    }
  
    getInfo() {
      console.log('name', this.name);
      console.log('salary', this.id);
      console.log('name', this.age);
      //console.log('salary', this.salary);
    }
  }
  
  class Data_economist extends Data {
    constructor(
      protected name: string,
      public id: number,
      public age: number,
     // private salary: number,
    ) {
      super(name,id,age);
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  const data = new Data_economist('Misha',9912465945624,30);
  console.log('Name', data.getName());
  console.log(data);
  
  