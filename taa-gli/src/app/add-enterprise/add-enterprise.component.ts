import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Enterprise } from '../enterprise';
import { Address } from '../address';
import { EnterpriseService } from '../enterprise.service';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.css']
})
export class AddEnterpriseComponent implements OnInit {

  @Input() addresses: Address[];
  enterprise = new Enterprise();

  constructor(
    public bsModalRef: BsModalRef,
    private enterpriseService: EnterpriseService,
    private addressService: AddressService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.enterpriseService.addEnterprise(this.enterprise)
      .subscribe(
        enterprise => {
          this.addressService.getAddressesEnterprise(enterprise.id)
            .subscribe(
              addresses => this.addresses = this.addresses.concat(addresses)
            );
        }
      );
  }
}
