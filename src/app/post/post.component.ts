import { LogActionService } from './../log-action.service';
import { Post } from './../data-interfaces/post';
import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  fetchingPosts:Boolean;
  posts: Post[];
  constructor(private fetchService:FetchDataService, private logService:LogActionService) { }

  ngOnInit(): void {
    this.fetchingPosts = true;
    this.fetchService.getPosts().subscribe(data => this.posts = data,null,() => this.fetchingPosts = false);
  }

  selectPost(id:String): void{
    this.logService.log("Post with id " + id + " selected");
    //this.fetchService.getComments(id);  //comments component already subscribe with the service
  }
}
