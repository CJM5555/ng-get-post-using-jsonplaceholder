import { LogActionService } from './../log-action.service';
import { FetchDataService } from './../fetch-data.service';
import { Album } from './../data-interfaces/album';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-albums-view',
  templateUrl: './albums-view.component.html',
  styleUrls: ['./albums-view.component.css']
})
export class AlbumsViewComponent implements OnInit {

  albums:Album[];

  constructor(private service:FetchDataService, private logService:LogActionService) { }

  ngOnInit(): void {
    this.service.getAlbums().subscribe(data => this.albums = data,
      error => this.logService.log("Failed to fetch albums"),
      //() => this.logService.log("Fetched albums")
    ) 
  }

}
