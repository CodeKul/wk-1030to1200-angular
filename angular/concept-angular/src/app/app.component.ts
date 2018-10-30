import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept-angular';
  isVs = true

  onClk() {
    //this.isVs = !this.isVs
    this.title = `${this.title}-${new Date().getTime()}`
  }
}
