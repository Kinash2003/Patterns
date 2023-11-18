
class Product_sofas_1 {
    parts_sofas_1: string[] = []
}

class Product_sofas_2 {
    parts_sofas_2: string[] = []
}

interface Sofas {
    reset(): this
    buildPillows(): this
    buildArmrests(): this
    buildSimple_Corner(): this
}

class Sofas_builder_1 implements Sofas {
   
    private product_1: Product_sofas_1

    constructor() {
        this.product_1 = new Product_sofas_1()
    }

    reset() {
        this.product_1 = new Product_sofas_1();
        return this
    }

    buildPillows() {
        this.product_1.parts_sofas_1.push('There are pillows')
        return this
    }

    buildArmrests() {
        this.product_1.parts_sofas_1.push('armrests are wooden')
        return this
    }

    buildSimple_Corner() {
        this.product_1.parts_sofas_1.push('corner sofa')
        return this
    }

    getResult(): Product_sofas_1 {
        return this.product_1
    }
}

class Sofas_builder_2 implements Sofas {
    
    private product_2: Product_sofas_2;

    constructor() {
        this.product_2 = new Product_sofas_2()
    }
    
    reset() {
        this.product_2 = new Product_sofas_2();
        return this
    }
   
    buildPillows() {
        this.product_2.parts_sofas_2.push('There are no pillows');
        return this;
    }

    buildArmrests() {
        this.product_2.parts_sofas_2.push('armrests are soft');
        return this;
    }

    buildSimple_Corner() {
        this.product_2.parts_sofas_2.push('a simple sofa');
        return this;
    }

    getResult(): Product_sofas_2 {
        return this.product_2;
    }
}

class Director_sofas {
    public Sofa_1(): Product_sofas_1 {
        return new Sofas_builder_1()
        .reset()
        .buildPillows()
        .buildArmrests()
        .buildSimple_Corner()
        .getResult();
    }
    public Sofa_2(): Product_sofas_2 {
        return new Sofas_builder_2()
        .reset()
        .buildPillows()
        .buildArmrests()
        .buildSimple_Corner()
        .getResult();
    }
}

const director = new Director_sofas();
console.log(director.Sofa_1());
console.log(director.Sofa_2());

