import { MyHttpModule } from './http/http.module';
import { MyFormsModule } from './forms/forms.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashModule } from './dash/dash.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashModule,
    MyFormsModule,
    MyHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
