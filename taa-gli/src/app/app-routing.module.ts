import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddressListComponent} from './address-list/address-list.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
	{ path: 'addresses', component: AddressListComponent},
  { path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
