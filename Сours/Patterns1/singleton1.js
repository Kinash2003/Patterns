
class Singleton1 {
	
	constructor(name,age,id) {
		this.name = name;
        this.age = age;
        this.id = id;
	}
  
	static getInstance(name,age,id) {
	  if (!this.instance) {
		this.instance = new Singleton1(name,age,id);
	  }
  
	  return this.instance;
	}

	singletonAge(){
        return this.age;
    }

    singletonAgeLogic(){
        this.age++;
    }

  }
  
  const data3 = Singleton1.getInstance('Roman', 27, 8612125945624);
  const data4 = Singleton1.getInstance('Ivan', 24, 7419825345734);
  data3.singletonAgeLogic();
  
  console.log("Singleton1:" + data3.name + " " + data3.age + " " + data3.id);
  console.log("Singleton2:" + data4.name + " " + data4.age + " " + data4.id);

  console.log(data3 === data4);

