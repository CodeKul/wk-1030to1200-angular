import { GpsListener } from './gps-listener';

export class Car implements GpsListener {

    private spd: number
    private bnd: string

    incSpd() {
        this.spd++
    }
    dscSpd() {
        this.spd--
    }

    prchDt() {
        return new Date()
    }
    location(): void {
    }
}

let cr: Car = new Car() // cr is ORV(Object Reference Variable)
cr.incSpd()

