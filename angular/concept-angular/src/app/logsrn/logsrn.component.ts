import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logsrn',
  templateUrl: './logsrn.component.html',
  styleUrls: ['./logsrn.component.css']
})
export class LogsrnComponent implements OnInit {

  @ViewChild('sv')
  sv: ElementRef
  
  @ViewChild('nm')
  nm:ElementRef

  val: string
  pass:string
  constructor() { }

  ngOnInit() {
  }
  
  btnClk(val:string, pass:string) {
    console.log(this.sv)
    console.log(this.nm)
    this.val=this.sv.nativeElement.value
    this.pass=this.nm.nativeElement.value
  }
  
}
