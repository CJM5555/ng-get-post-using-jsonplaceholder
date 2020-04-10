import { LogActionService } from './../log-action.service';
import { Comment } from '../data-interfaces/comment';
import { CommentService } from './../comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  c:Comment[];
  postId:string;
  constructor(private route: ActivatedRoute, private router: Router, private cs: CommentService, private logService:LogActionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.postId = params.get('id'),
      this.getComment(this.postId); 
    });
  }

  getComment(postId:string): void{
    this.cs.getComments(postId).subscribe(data => this.c = data);
  }

  postComment(text:String):void{
    let input = { postId : parseInt(this.postId), id : 2, name : "Jia Min", email : "jiamin55555@live.com", body : text}; //Really HARD code here :P
    this.cs.postComment(input,this.postId);
    this.c.push(input);
  }
}
