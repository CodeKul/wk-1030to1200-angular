import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SmallFirstComponent } from './first/small-first/small-first.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { MyAlComponent } from './bt-crd/my-al.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SmallFirstComponent,
    BtCrdComponent,
    BtJumbComponent,
    MyAlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
