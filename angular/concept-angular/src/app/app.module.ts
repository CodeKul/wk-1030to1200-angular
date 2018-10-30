import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';

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
import { SampleDirective } from './directives/sample.directive';
import { LogsrnComponent } from './logsrn/logsrn.component';
import { ZoomComponent } from './zoom/zoom.component';
import { SampDirective } from './zoom/samp.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



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
    SampleDirective,
    LogsrnComponent,
    ZoomComponent,
    SampDirective,
    UnlessDirective,
    LifecycleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BarRatingModule,
    NgxImageZoomModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
