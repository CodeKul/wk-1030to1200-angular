import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intr-com',
  templateUrl: './intr-com.component.html',
  styleUrls: ['./intr-com.component.css']
})
export class IntrComComponent implements OnInit {

  prg : number = 0
  prgStr : string

  constructor(  ) { }

  ngOnInit() {
  }

  onBtnClicked(btn : number) {
    if(btn === 1) {
      this.prgStr = `${this.prg++}%`
      console.log(this.prgStr)
    }
    if(btn === 2) {
      this.prgStr = `${--this.prg}%`
      console.log(this.prgStr)
    }
  }
}
