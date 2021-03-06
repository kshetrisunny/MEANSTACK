import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { AppConstants } from './app.constants';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(private http: HttpClient, private appConstants: AppConstants) { }

    /**
     * @package Services
     * @method extractData
     * @description A method to return data from the response received
     * @param res JSON/ String response received from the requesting service
     * @returns A JSON array with requested data
     */
    public extractData(res: Response): any {
        const body = res;
        return body || {};
    }

    /**
     * @package Services
     * @method handleError
     * @description A method to return human readable errors
     * @param operation service method that requested a resource
     * @param result usually an error response from a server
     * @returns An observable of error response
     */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /* RESTFULL API  */

    getPersonData() {
        return this.http.get(this.appConstants.PersonCrudUrl).pipe(
            map(this.extractData),
            catchError(this.handleError<any>('getPersonData')),
        );
    }

    insertPerson(data: Object) {
        return this.http.post(this.appConstants.PersonCrudUrl, data).pipe(
            map(this.extractData),
            tap((response) => console.log(`add item response: ${response.status}`)),
            catchError(this.handleError<any>('insertPerson')),
        );
    }

    updatePerson(data: Object): Observable<any> {
        return this.http.put(this.appConstants.PersonCrudUrl, data).pipe(
            map(this.extractData),
            tap((response) => console.log(`update item response: ${response.status}`)),
            catchError(this.handleError<any>('updatePerson')),
        );
    }

    deletePerson(personId: string): Observable<Response> {
        return this.http.delete(this.appConstants.PersonCrudUrl + '?id=' + personId).pipe(
            map(this.extractData),
            tap((response) => console.log(`delete client response: ${response.status}`)),
            catchError(this.handleError<any>('deletePerson')),
        );
    }



}
