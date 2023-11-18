
interface IFlyweightKilled {
    killed: number
}

class FlyweightKilled implements IFlyweightKilled {
    
    public killed: number

    constructor(killed: number) {
        this.killed = killed
    }
}

class FlyweightFactoryKilled {
  
    private static flyweights: { [id: number]: FlyweightKilled } = {}

    static killed(killed: number): FlyweightKilled {
        if (!(killed in FlyweightFactoryKilled.flyweights)) {
            FlyweightFactoryKilled.flyweights[killed] = new FlyweightKilled(killed)
        }
        return FlyweightFactoryKilled.flyweights[killed]
    }

    static cache(): number {
        return Object.keys(FlyweightFactoryKilled.flyweights).length
    }
}

class Killed {
    
    private killeds: number[] = []

    constructor(killeds: string) {
        for (let i = 0; i < killeds.length; i++) {
            this.killeds.push(killeds.charCodeAt(i))
        }
    }

    output() {
        let ret = ''
        this.killeds.forEach((k) => {
            ret =
                ret +
                String.fromCharCode(FlyweightFactoryKilled.killed(k).killed)
        })

        return ret
    }
}


const killed = new Killed('1,2,5,2,3,4,1,2,4,5,2')

console.log(killed.output())
console.log(`Killed: ${'1,2,5,2,3,4,1,2,4,5,2'.length}`)
console.log(`Flyweight killed: ${FlyweightFactoryKilled.cache()}`)
    
