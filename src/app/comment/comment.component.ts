import { Comment } from './../../comment';
import { CommentService } from './../comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  c:Comment[];

  constructor(private cs: CommentService) { }

  ngOnInit(): void {
    this.getComment();
  }

  getComment(): void{
    this.cs.getComments().subscribe(data => this.c = data);
  }
}
