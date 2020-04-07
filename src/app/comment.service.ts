import { HttpClient} from '@angular/common/http';
import { Comment } from './../comment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this._url);
  }

}
