import { Component, OnInit } from '@angular/core';
import { ADDRESSES } from '../addresses-mock';

import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
	addresses = ADDRESSES;

  constructor() { }

  ngOnInit() {
  }

}
