import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http.component';

@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MyHttpModule { }
