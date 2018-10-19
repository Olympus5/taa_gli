import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressListComponent } from './address-list/address-list.component';
import { MapsComponent } from './maps/maps.component';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    MapsComponent,
    AddAddressComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
