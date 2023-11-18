
class Delivery_Of_Components{
    delivery_of_components() {
        console.log('Delivery of components');
    }
}

class Component_Parts{
    component_parts() {
        console.log('Unloading of component parts to the warehouse');
    }
}

class Сar_Assembly {
    сar_assembly() {
        console.log( 'Сar assembly');
    }
}

class Assembly_Work{
    assembly_work(color: string, hours: number) {
        console.log("Color: "+ color + ", " + "Hours: " + hours + ".");
    }
}

class Delivery_Store {
    delivery_store(){
        console.log('Delivery of the car to the store');
    }
}

class FacadeCar{

    private delivery: Delivery_Of_Components;
    private component: Component_Parts;
    private сar_assembly: Сar_Assembly;
    private assembly: Assembly_Work;
    private deliverystore: Delivery_Store;

    constructor(delivery: Delivery_Of_Components,component:Component_Parts,сar_assembly: Сar_Assembly,assembly: Assembly_Work,deliverystore: Delivery_Store){
        this.delivery = delivery;
        this.component = component;
        this.сar_assembly = сar_assembly;
        this.assembly = assembly;
        this.deliverystore = deliverystore;
    }

    public work() {
        this.delivery.delivery_of_components();
        this.component.component_parts();
        this.сar_assembly.сar_assembly();
        this.assembly.assembly_work('Red',48);
        this.deliverystore.delivery_store();
    }
}

const bluray = new Delivery_Of_Components;
const component = new Component_Parts();
const сar_assembly  = new Сar_Assembly;
const assembly = new Assembly_Work();
const deliverystoret = new Delivery_Store();

const facadecar = new FacadeCar(bluray,component,сar_assembly,assembly,deliverystoret);
facadecar.work();
