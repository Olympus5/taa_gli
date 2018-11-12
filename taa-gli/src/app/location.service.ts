import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Location } from './location';
import { URLS } from './urls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(
    private http: HttpClient
  ) { }

   getLocations(page: number): Observable<Location[]> {
     const url = `${URLS.locationUrl}/?page=${page}`;

     return this.http.get<Location[]>(url)
       .pipe(
         tap(_ => `fetched locations at page=${page}`),
         catchError(this.handleError([]))
       );
   }

   getLocation(id: number): Observable<Location> {
     const url = `${URLS.locationUrl}/${id}`;

     return this.http.get<Location>(url)
       .pipe(
         tap(_ => `fetched location id=${id}`),
         catchError(this.handleError<Location>())
       );
   }

   addLocation(location: Location): Observable<Location> {
     return this.http.post<Location>(URLS.locationUrl, location, httpOptions)
       .pipe(
         tap(_ => console.log(`Added location w/ id=${location.id}`)),
         catchError(this.handleError<Location>())
       );
   }

   updateLocation(location: Location): Observable<any> {
     return this.http.put<any>(URLS.locationUrl, location, httpOptions)
       .pipe(
         tap(_ => console.log(`updated location id=${location.id}`)),
         catchError(this.handleError<any>())
       )
   }

   deleteLocation(location: Location): Observable<Location> {
     const id = location.id;
     const url = `${URLS.locationUrl}/${id}`;

     return this.http.delete<Location>(url, httpOptions)
       .pipe(
         tap(_ => console.log(`delete location id=${id}`)),
         catchError(this.handleError<Location>())
       );
   }

   private handleError<T>(result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);

        return of(result as T);
      }
    }
}
