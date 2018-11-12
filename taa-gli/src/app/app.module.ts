import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AddressListComponent} from './address-list/address-list.component';
import {MapsComponent} from './maps/maps.component';
import {AddEnterpriseComponent} from './add-enterprise/add-enterprise.component';
import {LoginComponent} from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    MapsComponent,
    AddEnterpriseComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEnterpriseComponent]
})
export class AppModule { }
