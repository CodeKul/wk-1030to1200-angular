import { HttpComponent } from './http/http.component';
import { DtDrvnComponent } from './forms/dt-drvn/dt-drvn.component';
import { FormsComponent } from './forms/forms/forms.component';
import { DashGuard } from './dash/dash.guard';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './dash/orders/orders.component';
import { TmpDrvnComponent } from './forms/tmp-drvn/tmp-drvn.component';

const dashRoutes = [
  {path : 'orders', component : OrdersComponent}
]

const formsRoutes = [
  {path : 'data', component : DtDrvnComponent},
  {path : 'tmp', component : TmpDrvnComponent}
]
const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'dash/:usNm', component : DashComponent, children : dashRoutes, canActivate : [DashGuard] },
  {path : 'dash', redirectTo : 'dash/ano'},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'forms', component : FormsComponent, children : formsRoutes},
  {path:'http', component : HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
