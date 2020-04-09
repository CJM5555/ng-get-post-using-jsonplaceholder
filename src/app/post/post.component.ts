import { CommentComponent } from './../comment/comment.component';
import { LogActionService } from './../log-action.service';
import { Post } from './../data-interfaces/post';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  constructor(private postService:PostService, private logService:LogActionService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

  selectPost(id:String): void{
    this.logService.log("Post with id " + id + " selected");
  }
}
