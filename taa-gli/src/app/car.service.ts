import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Car } from './car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
    carUrl = 'http://localhost:8080/car';

    constructor(
      private http: HttpClient
    ) { }

    getCars(page: number): Observable<Car[]> {
      const url = `${this.carUrl}/?page=${page}`;

      return this.http.get<Car[]>(url)
        .pipe(
          tap(_ => `fetched cars at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getCar(id: number): Observable<Car> {
      const url = `${this.carUrl}/${id}`;

      return this.http.get<Car>(url)
        .pipe(
          tap(_ => `fetched car id=${id}`),
          catchError(this.handleError<Car>())
        );
    }

    addCar(car: Car): Observable<Car> {
      return this.http.post<Car>(this.carUrl, car, httpOptions)
        .pipe(
          tap(_ => console.log(`Added car w/ id=${car.id}`)),
          catchError(this.handleError<Car>())
        );
    }

    updateCar(car: Car): Observable<any> {
      return this.http.put<any>(this.carUrl, car, httpOptions)
        .pipe(
          tap(_ => console.log(`updated car id=${car.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteCar(car: Car): Observable<Car> {
      const id = car.id;
      const url = `${this.carUrl}/${id}`;

      return this.http.delete<Car>(url, httpOptions)
        .pipe(
          tap(_ => console.log(`delete car id=${id}`)),
          catchError(this.handleError<Car>())
        );
    }

    private handleError<T>(result?: T) {
       return (error: any): Observable<T> => {
         console.error(error);

         return of(result as T);
       }
     }
}
