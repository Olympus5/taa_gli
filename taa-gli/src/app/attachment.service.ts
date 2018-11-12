import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Attachment } from './attachment';
import { URLS } from './urls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicationt/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
    constructor(
      private http: HttpClient
    ) { }

    getAttachments(page: number): Observable<Attachment[]> {
      const url = `${URLS.attachmentUrl}/?page=${page}`;

      return this.http.get<Attachment[]>(url)
        .pipe(
          tap(_ => `fetched attachments at page=${page}`),
          catchError(this.handleError([]))
        );
    }

    getAttachmentsAddress(id: number): Observable<Attachment[]> {
      const url = `${URLS.addressUrl}/${id}/attachments`;

      return this.http.get<Attachment[]>(url)
        .pipe(
          tap(_ => `fetched attachments address id=${id}`),
          catchError(this.handleError([]))
        );
    }

    getAttachmentsEnterprise(id: number): Observable<Attachment[]> {
      const url = `${URLS.enterpriseUrl}/${id}/attachments`;

      return this.http.get<Attachment[]>(url)
        .pipe(
          tap(_ => `fetched attachments enterprise id=${id}`),
          catchError(this.handleError([]))
        );
    }

    getAttachment(id: number): Observable<Attachment> {
      const url = `${URLS.attachmentUrl}/${id}`;

      return this.http.get<Attachment>(url)
        .pipe(
          tap(_ => `fetched attachment id=${id}`),
          catchError(this.handleError<Attachment>())
        );
    }

    addAttachment(attachment: Attachment): Observable<Attachment> {
      return this.http.post<Attachment>(URLS.attachmentUrl, attachment, httpOptions)
        .pipe(
          tap(_ => console.log(`Added attachment w/ id=${attachment.id}`)),
          catchError(this.handleError<Attachment>())
        );
    }

    updateAttachment(attachment: Attachment): Observable<any> {
      return this.http.put<any>(URLS.attachmentUrl, attachment, httpOptions)
        .pipe(
          tap(_ => console.log(`updated attachment id=${attachment.id}`)),
          catchError(this.handleError<any>())
        )
    }

    deleteAttachment(attachment: Attachment): Observable<Attachment> {
      const id = attachment.id;
      const url = `${URLS.attachmentUrl}/${id}`;

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
