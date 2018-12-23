import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MyHttpModule { }
