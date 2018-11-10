import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Address } from './address';
import { ADDRESSES } from './addresses-mock';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  getAddresses(): Observable<Address[]> {
    return of(ADDRESSES);
  }
}
