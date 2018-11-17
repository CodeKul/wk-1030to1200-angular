import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './dash/orders/orders.component';

const dashRoutes = [
  {path : 'orders', component : OrdersComponent}
]
const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'dash/:usNm', component : DashComponent, children : dashRoutes},
  {path : 'dash', redirectTo : 'dash/ano'},
  {path : '', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
