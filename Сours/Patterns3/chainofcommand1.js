
class ICossacks {
    cossacksSuccessor() {}
    cossacks() {}
}

class CossacksCavalry extends ICossacks {
    
    #successor = ICossacks | undefined

    cossacksSuccessor(successor){
        this.#successor = successor
    }

    cossacks(amountGold){
        if (amountGold >= 12) {
            const num = Math.floor(amountGold / 12)
            const remainder = amountGold % 12
            console.log(`Cossacks cavalry ${num} hired.`)
            if (remainder !== 0) {
                this.#successor.cossacks(remainder)
            }
        } else {
                this.#successor.cossacks(amountGold)
        }
    }
}

class CossacksArcher extends ICossacks {
   
    #successor = ICossacks | undefined

    cossacksSuccessor(successor){
       this.successor = successor
    }

    cossacks(amountGold){
        if (amountGold >= 5) {
            const num = Math.floor(amountGold / 5)
            const remainder = amountGold % 5
            console.log(`Cossacks archer ${num} hired.`)
            if (remainder !== 0) {
                this.successor.cossacks(remainder)
            }
        } else {
                this.successor.cossacks(amountGold)
        }
    }
}

class CossacksPikemen extends ICossacks {
    
    #successor = ICossacks | undefined

    cossacksSuccessor(successor){
       this.successor = successor
    }

    cossacks(amountGold){
        if (amountGold >= 1) {
            const num = Math.floor(amountGold / 1)
            const remainder = amountGold % 1
            console.log(`Cossacks pikemen ${num} hired.`)
            if (remainder !== 0) {
                this.successor.cossacks(remainder)
            }
        } else {
                this.successor.cossacks(amountGold)
        }
    }
}

class Cossacks {
    cavalry = CossacksCavalry
    #archer = CossacksArcher
    #pikemen = CossacksPikemen

    constructor() {
        this.cavalry = new CossacksCavalry()
        this.archer = new CossacksArcher()
        this.pikemen = new CossacksPikemen()
        this.cavalry.cossacksSuccessor(this.archer)
        this.archer.cossacksSuccessor(this.pikemen)
    }
}

const cossacks = new Cossacks()
console.log('Enter amount gold:')
process.stdin.on('data', (data) => {
    if (parseInt(data)) {
        const amountGold = parseInt(data)
        cossacks.cavalry.cossacks(amountGold)
        console.log('No gold.')
        process.exit()
    }else {
        console.log('Please enter a amount gold:')
    }    
})