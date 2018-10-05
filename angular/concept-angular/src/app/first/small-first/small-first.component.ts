import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-first',
  template: `
    <p>
      small-first works!
    </p>
  `,
  styles: [
    `
    p {
      border : 3px solid blue;
    }
    `
  ]
})
export class SmallFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
