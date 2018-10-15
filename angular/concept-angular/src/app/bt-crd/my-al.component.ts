import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-al',
  template: `
  <p class="alert alert-primary" role="alert">
    {{msgMy}}
  </p>
  `,
  styles: []
})
export class MyAlComponent implements OnInit {

  @Input('msg')
  msgMy : string;

  constructor() { }

  ngOnInit() {
  }

}
