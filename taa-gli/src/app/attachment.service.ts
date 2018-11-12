import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Attachment } from './attachment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
    attachmentUrl = 'http://localhost:8080/attachment';

    constructor(
      private http: HttpClient
    ) { }

    getAttachments(page: number): Observable<Attachment[]> {
      const url = `${this.attachmentUrl}/?page=${page}`;

      return this.http.get<Attachment[]>(url)
        .pipe(
          tap(_ => `fetched attachments at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getAttachment(id: number): Observable<Attachment> {
      const url = `${this.attachmentUrl}/${id}`;

      return this.http.get<Attachment>(url)
        .pipe(
          tap(_ => `fetched attachment id=${id}`),
          catchError(this.handleError<Attachment>())
        );
    }

    addAttachment(attachment: Attachment): Observable<Attachment> {
      return this.http.post<Attachment>(this.attachmentUrl, attachment, httpOptions)
        .pipe(
          tap(_ => console.log(`Added attachment w/ id=${attachment.id}`)),
          catchError(this.handleError<Attachment>())
        );
    }

    updateAttachment(attachment: Attachment): Observable<any> {
      return this.http.put<any>(this.attachmentUrl, attachment, httpOptions)
        .pipe(
          tap(_ => console.log(`updated attachment id=${attachment.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteAttachment(attachment: Attachment): Observable<Attachment> {
      const id = attachment.id;
      const url = `${this.attachmentUrl}/${id}`;

      return this.http.delete<Attachment>(url, httpOptions)
        .pipe(
          tap(_ => console.log(`delete attachment id=${id}`)),
          catchError(this.handleError<Attachment>())
        );
    }

    private handleError<T>(result?: T) {
       return (error: any): Observable<T> => {
         console.error(error);

         return of(result as T);
       }
     }
}
