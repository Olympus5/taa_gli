import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ADDRESSES } from '../addresses-mock';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
	bsModalRef: BsModalRef;
	addresses = ADDRESSES;
  disabledUpdate: boolean = true;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal() {
  	this.bsModalRef = this.modalService.show(AddAddressComponent, {class: 'modal-lg'});
  }

  toggleUpdate() {
    this.disabledUpdate = !this.disabledUpdate;
  }
}
