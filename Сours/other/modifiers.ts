
class Passport {
    public name:string;
    protected email:string;
    private id :number;

    constructor(){
        this.name = "Roman"
        this.email = "kinash0226@gmail.com"
        this.id = 4553784235784
    }
    Passport1(){
        return this.name
    }
    Passport2(){
        return this.email
    }
    Passport3(){
        return this.id
    }
}

class ExployeePassport extends Passport{
    
   
    Passport1(){
        return this.name
    }
    Passport2(){
        return this.email
    }
 //  Passport3(){
    //    return this.id
    //}
}

let roman1 = new ExployeePassport();
let roman2 = new Passport();

console.log(roman1.name);
//console.log(roman1.email);
//console.log(roman1.id);

console.log(roman1.name);
//console.log(roman2.email);
//console.log(roman2.id);