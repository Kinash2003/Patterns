    
interface Car {
    color: string;
}

interface NumberPlate {
    plateNumber:number;
}
interface NumberPlate {
    Fuel_consumption:number;
}
interface Audi extends Car, NumberPlate {
    seatCapacity: number;
    name?: string;
   
}

const bmw: Audi = {
    color: 'blue',
    plateNumber: 1234,
    seatCapacity: 5,
    Fuel_consumption: 6,
};

let audi = {} as Audi;
console.log(audi.color = "blue");
audi.plateNumber = 1234;
audi.seatCapacity = 5;
audi.Fuel_consumption = 6;
console.log(audi);

interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}

class User implements IUser{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}

let julia = new User(9912462945624, "Julia", 24);
console.log(julia);
console.log(julia.getFullName("Shevchenko"));

   
    