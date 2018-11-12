import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Deplacement } from './deplacement';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeplacementService {
    deplacementUrl = 'http://localhost:8080/deplacement';

    constructor(
      private http: HttpClient
    ) { }

    getDeplacements(page: number): Observable<Deplacement[]> {
      const url = `${this.deplacementUrl}/?page=${page}`;

      return this.http.get<Deplacement[]>(url)
        .pipe(
          tap(_ => `fetched deplacements at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getDeplacement(id: number): Observable<Deplacement> {
      const url = `${this.deplacementUrl}/${id}`;

      return this.http.get<Deplacement>(url)
        .pipe(
          tap(_ => `fetched deplacement id=${id}`),
          catchError(this.handleError<Deplacement>())
        );
    }

    addDeplacement(deplacement: Deplacement): Observable<Deplacement> {
      return this.http.post<Deplacement>(this.deplacementUrl, deplacement, httpOptions)
        .pipe(
          tap(_ => console.log(`Added deplacement w/ id=${deplacement.id}`)),
          catchError(this.handleError<Deplacement>())
        );
    }

    updateDeplacement(deplacement: Deplacement): Observable<any> {
      return this.http.put<any>(this.deplacementUrl, deplacement, httpOptions)
        .pipe(
          tap(_ => console.log(`updated deplacement id=${deplacement.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteDeplacement(deplacement: Deplacement): Observable<Deplacement> {
      const id = deplacement.id;
      const url = `${this.deplacementUrl}/${id}`;

      return this.http.delete<Deplacement>(url, httpOptions)
        .pipe(
          tap(_ => console.log(`delete deplacement id=${id}`)),
          catchError(this.handleError<Deplacement>())
        );
    }

    private handleError<T>(result?: T) {
       return (error: any): Observable<T> => {
         console.error(error);

         return of(result as T);
       }
     }
}
