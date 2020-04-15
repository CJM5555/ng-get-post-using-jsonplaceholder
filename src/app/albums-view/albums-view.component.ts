import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-albums-view',
  templateUrl: './albums-view.component.html',
  styleUrls: ['./albums-view.component.css']
})
export class AlbumsViewComponent implements OnInit {

  albums:String[] = ["1","2","3","1","2","3","1","2","3"];
  constructor() { }

  ngOnInit(): void {
  }

}
