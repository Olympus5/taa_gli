import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import { MapsComponent } from './maps/maps.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { LoginComponent } from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    MapsComponent,
    AddAddressComponent,
    LoginComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddAddressComponent]
})
export class AppModule { }
