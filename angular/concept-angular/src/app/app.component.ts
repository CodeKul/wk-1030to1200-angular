import { Component } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept-angular';
  isVs = true

  constructor(
    private sample :  SampleService
  ) {

  }
  onClk() {
    //this.isVs = !this.isVs
    this.title = `${this.title}-${new Date().getTime()}`
  }
}
