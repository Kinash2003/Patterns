 class Description {
   public Employee: boolean;

   constructor(
        public name: string,
        public  age: number,
    ){
        this.Employee = true;
    }
    getInfo() {
        console.log('name', this.name);
        console.log('age', this.age);
    }
}

 class Doctor extends Description {
   constructor(
        public name: string,
        public age: number,
        public salary: number,
    ){
        super(name, age);
    }

    teachDevs(): void {
        console.log(`${this.name} works as a doctor.`);
   }
   getInfo() {
        console.log('name', this.name);
        console.log('age', this.age);
        console.log('salary', this.salary);
    }
}

 const doctor = new Doctor('Andriy',27,50000);
 console.log(doctor.Employee);
 console.log(doctor);
 doctor.getInfo();
 doctor.teachDevs();
