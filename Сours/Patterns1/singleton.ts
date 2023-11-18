
class Singleton {

    private static instance: Singleton;

    public name: string;
    public age: number;
    public id: number;
    
    private constructor(name: string, age: number,id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    public static getInstance(name: string, age:number,id: number): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name,age,id);
        }

        return Singleton.instance;
    }

    public singletonAge():number {
        return this.age;
    }
    public singletonAgeLogic(): void {
        this.age++;
    }
}

const data1 = Singleton.getInstance("Roman", 27, 8612125945624);
data1.singletonAgeLogic();
console.log(data1);

const data2 = Singleton.getInstance("Ivan", 24, 7419825345734);
console.log(data2);

console.log(data1 === data2);

