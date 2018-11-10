import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
	{ path: 'addresses', component: AddressListComponent},
	{ path: '', redirectTo: '/addresses', pathMatch: 'full'},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
