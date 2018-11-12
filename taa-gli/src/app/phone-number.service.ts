import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { PhoneNumber } from './phone-number';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
    phoneNumberUrl = 'http://localhost:8080/phoneNumber';

    constructor(
    private http: HttpClient
    ) { }

    getPhoneNumbers(page: number): Observable<PhoneNumber[]> {
    const url = `${this.phoneNumberUrl}/?page=${page}`;

    return this.http.get<PhoneNumber[]>(url)
    .pipe(
      tap(_ => `fetched phoneNumbers at page=${page}`),
      catchError(this.handleError([]))
    );
    }

    getPhoneNumber(id: number): Observable<PhoneNumber> {
    const url = `${this.phoneNumberUrl}/${id}`;

    return this.http.get<PhoneNumber>(url)
    .pipe(
      tap(_ => `fetched phoneNumber id=${id}`),
      catchError(this.handleError<PhoneNumber>())
    );
    }

    addPhoneNumber(phoneNumber: PhoneNumber): Observable<PhoneNumber> {
      return this.http.post<PhoneNumber>(this.phoneNumberUrl, phoneNumber, httpOptions)
      .pipe(
        tap(_ => console.log(`Added phoneNumber w/ id=${phoneNumber.id}`)),
        catchError(this.handleError<PhoneNumber>())
      );
    }

    updatePhoneNumber(phoneNumber: PhoneNumber): Observable<any> {
      return this.http.put<any>(this.phoneNumberUrl, phoneNumber, httpOptions)
      .pipe(
        tap(_ => console.log(`updated phoneNumber id=${phoneNumber.id}`)),
        catchError(this.handleError<any>())
      )
    }

    deletePhoneNumber(phoneNumber: PhoneNumber): Observable<PhoneNumber> {
      const id = phoneNumber.id;
      const url = `${this.phoneNumberUrl}/${id}`;

      return this.http.delete<PhoneNumber>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`delete phoneNumber id=${id}`)),
        catchError(this.handleError<PhoneNumber>())
      );
    }

    private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
     console.error(error);

     return of(result as T);
    }
    }
}
