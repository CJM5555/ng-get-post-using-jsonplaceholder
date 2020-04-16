import { User } from './data-interfaces/user';
import { Album } from './data-interfaces/album';
import { Comment } from './data-interfaces/comment';
import { Post } from './data-interfaces/post';
import { LogActionService } from './log-action.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient, private logService:LogActionService) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl).pipe(
      catchError(this.handleError<Post[]>('getPost',[])),
      tap(complete => this.logService.log("Posts fetched")));
  }

  getComments(postId : String):Observable<Comment[]>{
    this.logService.log("Fetching comments for postId " + postId + " from " + this.postsUrl + "/" + postId + "/comments");
    return this.http.get<Comment[]>(this.postsUrl + "/" + postId + "/comments").pipe(
      catchError(this.handleError<Comment[]>('getComment',[])),
      tap(_ => this.logService.log("Comments fetched")));
  }

  postComment(comment:Comment, postId : string):void{
    this.http.post<Comment>(this.postsUrl + postId + "/comments",comment).pipe(
      catchError(this.handleError<Comment[]>('postComment',[])),
      tap(_ => this.logService.log("Comment posted")));
  }

  getAlbums():Observable<Album[]>{
    this.logService.log("Fetching albums");
    return this.http.get<Album[]>(this.albumsUrl).pipe(
      catchError(this.handleError<Album[]>('getAlbum',[])),
      tap(_ => this.logService.log("Albums fetched")));
  }

  getUsers():Observable<User[]>{
    this.logService.log("Fetching users");
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('getUser',[])),
      tap(_ => this.logService.log("Users fetched")));
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
