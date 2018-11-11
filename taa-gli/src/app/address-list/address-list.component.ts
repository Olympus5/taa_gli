import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Address } from '../address';
import { AddAddressComponent } from '../add-address/add-address.component';
import { AddressService } from '../address.service';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
    bsModalRef: BsModalRef;
    state: string[];
    addresses: Address[];
    disabledUpdate: boolean = true;

    constructor(
        private modalService: BsModalService,
        private addressService: AddressService
    ) { }

    ngOnInit() {
        this.getAddresses();
    }

    getAddresses() {
        this.addressService.getAddresses()
            .subscribe(addresses => {
                this.addresses = addresses;
                this.state = Array(addresses.length).fill(null)
                this.addresses.map((value, index) => this.state[index] = value.enterprise);
            });
    }

    openModal(): void {
        this.bsModalRef = this.modalService.show(AddAddressComponent, {class: 'modal-lg'});
    }

    onUpdate(): void {
        this.disabledUpdate = this.addresses.every((value, index) => value.enterprise.trim() === this.state[index].trim());
    }
}
