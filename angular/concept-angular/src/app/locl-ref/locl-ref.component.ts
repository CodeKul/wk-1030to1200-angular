import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-locl-ref',
  templateUrl: './locl-ref.component.html',
  styleUrls: ['./locl-ref.component.css']
})
export class LoclRefComponent implements OnInit {

  @ViewChild('nm')
  nm : ElementRef

  val : string

  constructor() { }

  ngOnInit() {
  }

  btnClk(val : string) {
    //this.val = val
    console.log(this.nm)
    this.val = this.nm.nativeElement.value
  }
}
