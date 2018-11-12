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
    employeeUrl = 'http://localhost:8080/employee';

    constructor(
      private http: HttpClient
    ) { }

    getEmployees(page: number): Observable<Employee[]> {
      const url = `${this.employeeUrl}/?page=${page}`;

      return this.http.get<Employee[]>(url)
        .pipe(
          tap(_ => `fetched employees at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getEmployee(id: number): Observable<Employee> {
      const url = `${this.employeeUrl}/${id}`;

      return this.http.get<Employee>(url)
        .pipe(
          tap(_ => `fetched employee id=${id}`),
          catchError(this.handleError<Employee>())
        );
    }

    addEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.employeeUrl, employee, httpOptions)
        .pipe(
          tap(_ => console.log(`Added employee w/ id=${employee.id}`)),
          catchError(this.handleError<Employee>())
        );
    }

    updateEmployee(employee: Employee): Observable<any> {
      return this.http.put<any>(this.employeeUrl, employee, httpOptions)
        .pipe(
          tap(_ => console.log(`updated employee id=${employee.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteEmployee(employee: Employee): Observable<Employee> {
      const id = employee.id;
      const url = `${this.employeeUrl}/${id}`;

      return this.http.delete<Employee>(url, httpOptions)
        .pipe(
          tap(_ => console.log(`delete employee id=${id}`)),
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
