import { EventEmitter } from "@angular/core";

export class SampleService {

  private cntr : number = 0
  private em : EventEmitter<string> = new EventEmitter()

  constructor() { }

  plus() {
    return this.cntr++
  }

  send(str : string) {
    this.em.emit(str)
  }

  receive( onRc : (str : string) => void ) {
    this.em.subscribe( str => onRc(str))
  }
}
