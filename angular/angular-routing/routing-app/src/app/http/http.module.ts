import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http.component';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ]
})
export class MyHttpModule { }
