import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  nm = 'codekul.com'
  amt = 100
  typ = 'button'
  cls = 'btn btn-primary'
  constructor() {
  }

  ngOnInit() {
  }

  clickMe(ev: MouseEvent) {
    console.log('Clicked')
    console.log(ev)
  }
}
