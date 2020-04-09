import { Post } from './data-interfaces/post';
import { LogActionService } from './log-action.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient, private logService:LogActionService) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this._url).pipe(
      catchError(this.handleError<Post[]>('getPost',[])),
      tap(_ => this.logService.log("Posts fetched")));
  }

  handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        //May show the error message for user consumption
        this.logService.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
  }

}
