import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Address } from './address';
import { ADDRESSES } from './addresses-mock';
import { URLS } from './urls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(
    private http: HttpClient
  ) { }

  getAddresses(page: number): Observable<Address[]> {
    const url = `${URLS.addressUrl}/?page=${page}`;

    return this.http.get<Object>(url)
    .pipe(
      map((response: any) => response._embedded.address),
      tap(_ => console.log(`fetched addresses at page=${page}`)),
      catchError(this.handleError([]))
    );
  }

  getAddressesEnterprise(id: number): Observable<Address[]> {
    const url = `${URLS.enterpriseUrl}/${id}/addresses`;

    return this.http.get<Object>(url)
      .pipe(
        map((response: any) => response._embedded.address),
        tap(_ => console.log(`fetched addresses enterprise id=${id}`)),
        catchError(this.handleError([]))
      );
  }

  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(URLS.addressUrl, address, httpOptions)
    .pipe(
      tap(_ => console.log(`Added address w/ id=${address.id}`)),
      catchError(this.handleError<Address>())
    );
  }

  getAddress(id: number): Observable<Address> {
    const url = `${URLS.addressUrl}/${id}`;

    return this.http.get<Address>(url)
    .pipe(
      tap(_ => `fetched address id=${id}`),
      catchError(this.handleError<Address>())
    );
  }

  getAddressDeplacement(id: number): Observable<Address> {
    const url = `${URLS.deplacementUrl}/${id}/address`;

    return this.http.get<Address>(url)
    .pipe(
      tap(_ => `fetched address id=${id}`),
      catchError(this.handleError<Address>())
    );
  }

  updateAddress(address: Address): Observable<any> {
    return this.http.put<any>(URLS.addressUrl, address, httpOptions)
    .pipe(
      tap(_ => console.log(`updated address id=${address.id}`)),
      catchError(this.handleError<any>())
    )
  }

  deleteAddress(address: Address): Observable<Address> {
    const id = address.id;
    const url = `${URLS.addressUrl}/${id}`;

    return this.http.delete<Address>(url, httpOptions)
    .pipe(
      tap(_ => console.log(`delete address id=${id}`)),
      catchError(this.handleError<Address>())
    );
  }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
