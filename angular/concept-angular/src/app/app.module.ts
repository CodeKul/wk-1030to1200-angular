import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SmallFirstComponent } from './first/small-first/small-first.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { MyAlComponent } from './bt-crd/my-al.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MxCrdComponent } from './mx-crd/mx-crd.component';
import { IntrComComponent } from './intr-com/intr-com.component';
import { PrgBrComponent } from './intr-com/prg-br.component';
import { BtnPnlComponent } from './intr-com/btn-pnl.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";
import { LoclRefComponent } from './locl-ref/locl-ref.component';
import { AlPrjComponent } from './locl-ref/al-prj.component';
import { DirectivesComponent } from './directives/directives.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SmallFirstComponent,
    BtCrdComponent,
    BtJumbComponent,
    MyAlComponent,
    DatabindingComponent,
    MxCrdComponent,
    IntrComComponent,
    PrgBrComponent,
    BtnPnlComponent,
    LoclRefComponent,
    AlPrjComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
