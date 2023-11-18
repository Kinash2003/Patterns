// public, private, protected
class Data {
    #name
    _id;
    constructor(name,id,age){
        this.#name = name,
        this._id = id
        this.age = age
    }
    #privateInfo() {
        return 'Roman'
    }
    Info() {
        return this.#privateInfo()
    }
  }
  
  class Data_economist extends Data {
    constructor(name,id,age){
        super(name,id,age);
        this._id = id
        this.age = age
    }
  }
  
  const data = new Data("Igor",9912465945624,27);
  console.log(data.Info());
  console.log(data);
  const data_economist = new Data_economist("Paul",8235285205325,24);
  console.log(data_economist);
  
  