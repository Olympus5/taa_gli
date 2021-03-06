import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Enterprise } from './enterprise';
import { URLS } from './urls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  constructor(
    private http: HttpClient
  ) { }

  getEnterprises(page: number): Observable<Enterprise[]> {
    const url = `${URLS.enterpriseUrl}/?page=${page}`;

    return this.http.get<Enterprise[]>(url)
      .pipe(
        tap(_ => `fetched enterprises at page=${page}`),
        catchError(this.handleError([]))
      );
  }

  getEnterprise(id: number): Observable<Enterprise> {
    const url = `${URLS.enterpriseUrl}/${id}`;

    return this.http.get<Enterprise>(url)
      .pipe(
        tap(_ => `fetched enterprise id=${id}`),
        catchError(this.handleError<Enterprise>())
      );
  }

  addEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    return this.http.post<Enterprise>(URLS.enterpriseUrl, enterprise, httpOptions)
      .pipe(
        tap(_ => console.log(`Added enterprise w/ id=${enterprise.id}`)),
        catchError(this.handleError<Enterprise>())
      );
  }

  updateEnterprise(enterprise: Enterprise): Observable<any> {
    return this.http.put<any>(URLS.enterpriseUrl, enterprise, httpOptions)
      .pipe(
        tap(_ => console.log(`updated enterprise id=${enterprise.id}`)),
        catchError(this.handleError<any>())
      )
  }

  deleteEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    const id = enterprise.id;
    const url = `${URLS.enterpriseUrl}/${id}`;

    return this.http.delete<Enterprise>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`delete enterprise id=${id}`)),
        catchError(this.handleError<Enterprise>())
      );
  }

  private handleError<T>(result?: T) {
     return (error: any): Observable<T> => {
       console.error(error);

       return of(result as T);
     }
   }
}
