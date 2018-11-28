import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { TmpDrvnComponent } from './tmp-drvn/tmp-drvn.component';
import { DtDrvnComponent } from './dt-drvn/dt-drvn.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [TmpDrvnComponent, DtDrvnComponent, FormsComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyFormsModule { }
