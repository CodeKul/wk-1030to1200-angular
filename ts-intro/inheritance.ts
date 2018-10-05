class Animal {
    private date: Date // has A -> containment 
    run() {
        console.log(`animal running`)
    }
}
class Tiger extends Animal {
    isAfrican() {
        return true
    }
} // is A


let an = new Animal()
an.run()

let tg: Tiger = new Tiger()
tg.run()
tg.isAfrican()


export class Circuit {

}

export class Machine {
    constructor(
        private cir: Circuit
    ) {

    }
}

let cr = new Circuit()
let mcn = new Machine(cr)