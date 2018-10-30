import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isLoggedIn = false
  pStl = {
    border: '1px solid red'
  }

  mobs = [
    {nm : 'HTC One', pz : 12},
    {nm : 'Galaxy', pz : 18},
    {nm : 'iPhone', pz : 1},
    {nm : 'Pixel', pz : 60},
    {nm : 'Moto', pz : 15},
  ]

  constructor() { }

  ngOnInit() {
  }

  makeLogin(usNm: string, pass: string) {
    this.isLoggedIn = (usNm === 'codekul') && (pass === 'codekul')
  }
}
