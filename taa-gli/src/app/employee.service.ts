import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    enterpriseUrl = 'http://localhost:8080/enterprise';

    constructor(
      private http: HttpClient
    ) { }

    getEmployees(page: number): Observable<Employee[]> {
      const url = `${this.enterpriseUrl}/?page=${page}`;

      return this.http.get<Employee[]>(url)
        .pipe(
          tap(_ => `fetched enterprises at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getEmployee(id: number): Observable<Employee> {
      const url = `${this.enterpriseUrl}/${id}`;

      return this.http.get<Employee>(url)
        .pipe(
          tap(_ => `fetched enterprise id=${id}`),
          catchError(this.handleError<Employee>())
        );
    }

    addEmployee(enterprise: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.enterpriseUrl, enterprise, httpOptions)
        .pipe(
          tap(_ => console.log(`Added enterprise w/ id=${enterprise.id}`)),
          catchError(this.handleError<Employee>())
        );
    }

    updateEmployee(enterprise: Employee): Observable<any> {
      return this.http.put<any>(this.enterpriseUrl, enterprise, httpOptions)
        .pipe(
          tap(_ => console.log(`updated enterprise id=${enterprise.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteEmployee(enterprise: Employee): Observable<Employee> {
      const id = enterprise.id;
      const url = `${this.enterpriseUrl}/${id}`;

      return this.http.delete<Employee>(url, httpOptions)
        .pipe(
          tap(_ => console.log(`delete enterprise id=${id}`)),
          catchError(this.handleError<Employee>())
        );
    }

    private handleError<T>(result?: T) {
       return (error: any): Observable<T> => {
         console.error(error);

         return of(result as T);
       }
     }
}
