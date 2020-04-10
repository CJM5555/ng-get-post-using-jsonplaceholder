import { LogActionService } from './log-action.service';
import { HttpClient} from '@angular/common/http';
import { Comment } from './data-interfaces/comment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _baseUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http:HttpClient, private logService:LogActionService) { }

  getComments(postId : String):Observable<Comment[]>{
    this.logService.log("Fetching comments for postId " + postId + " from " + this._baseUrl + postId + "/comments");
    return this.http.get<Comment[]>(this._baseUrl + postId + "/comments").pipe(
      catchError(this.handleError<Comment[]>('getComment',[])),
      tap(_ => this.logService.log("Comments fetched")));
  }

  postComment(comment:Comment, postId : string):void{
    this.http.post<Comment>(this._baseUrl + postId + "/comments",comment).pipe(
      catchError(this.handleError<Comment[]>('postComment',[])),
      tap(_ => this.logService.log("Comment posted")));
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
