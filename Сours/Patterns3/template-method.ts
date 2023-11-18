
abstract class Barracks {

	abstract getWarriorSpirit(level:number): string
	abstract prepareWarrior(): void 
    abstract getDescription(): void 
    abstract warriorTrainComplited(): void 

    barracks(){
		this.getWarriorSpirit(2);
		this.prepareWarrior();
		this.getDescription();
		this.warriorTrainComplited();
	}
};

class BarracksPikemen extends Barracks {

	private damage: string;
    private range: number;
    private speed: number;
	private defense: number;
	private weremade: boolean;
	
	constructor() {
		super();
		this.damage = "232";
		this.range = 5;
		this.speed = 25;
		this.defense = 30;
		this.weremade = true;
	}

	getWarriorSpirit(level:number):string{
		return "3434";
	}

	prepareWarrior() :void{
		console.log("Will be made Pikemen: "+ (Math.floor(Math.random() * 100)));
		console.log("Викликаю дух воєна:"+ this.getWarriorSpirit(2));
	}
	
	getDescription():void {
		console.log("Description Pikemen:");
		console.log("Damage: " + this.damage,"Range: " + this.range,"Speed: " + this.speed,"Defense: " + this.defense);
	}

	warriorTrainComplited():void {

	}

}

class BarracksArcher extends Barracks {

	private damage: number;
    private range: number;
    private speed: number;
	private crete: number;
	private weremade: boolean;

	constructor() {
		super();
		this.damage = 40;
		this.range = 70;
		this.speed = 50;
		this.crete = 10;
		this.weremade = true;
	}

	getWarriorSpirit():string {

		return"Warrior Archer:"+ this.getWarriorSpirit();
	}
	
	prepareWarrior():void {
		console.log("Will be made Archer: "+ (Math.floor(Math.random() * 100)));
	}

	getDescription():void{
		console.log("Description Archer:");
		console.log("Damage: " + this.damage,"Range: " + this.range,"Speed: " + this.speed,"Crete: " + this.crete);
	}

	warriorTrainComplited():void{
		console.log("Were made Archer: "+ this.weremade);
	}
	
}

const pikemen = new BarracksPikemen();
const archer = new BarracksArcher();
pikemen.barracks();
console.log("/////////////////////////");
archer.barracks();