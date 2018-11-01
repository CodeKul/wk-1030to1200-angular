import { EventEmitter } from "@angular/core";
import { DataService } from "./data.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private cntr : number = 0
  private em : EventEmitter<string> = new EventEmitter()

  constructor(
    private data :  DataService
  ) { }

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
