"use strict";
class Product_sofas_1 {
    constructor() {
        this.parts_sofas_1 = [];
    }
}
class Product_sofas_2 {
    constructor() {
        this.parts_sofas_2 = [];
    }
}
class Sofas_builder_1 {
    constructor() {
        this.product_1 = new Product_sofas_1();
    }
    reset() {
        this.product_1 = new Product_sofas_1();
        return this;
    }
    buildPillows() {
        this.product_1.parts_sofas_1.push('There are pillows');
        return this;
    }
    buildArmrests() {
        this.product_1.parts_sofas_1.push('armrests are wooden');
        return this;
    }
    buildSimple_Corner() {
        this.product_1.parts_sofas_1.push('corner sofa');
        return this;
    }
    getResult() {
        return this.product_1;
    }
}
class Sofas_builder_2 {
    constructor() {
        this.product_2 = new Product_sofas_2();
    }
    reset() {
        this.product_2 = new Product_sofas_2();
        return this;
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
    getResult() {
        return this.product_2;
    }
}
class Director_sofas {
    Sofa_1() {
        return new Sofas_builder_1()
            .reset()
            .buildPillows()
            .buildArmrests()
            .buildSimple_Corner()
            .getResult();
    }
    Sofa_2() {
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
//# sourceMappingURL=builder.js.map