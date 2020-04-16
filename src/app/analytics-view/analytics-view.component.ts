import { LogActionService } from './../log-action.service';
import { FetchDataService } from './../fetch-data.service';
import { User } from './../data-interfaces/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.css']
})
export class AnalyticsViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  source:User[];
  dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service:FetchDataService,private logService:LogActionService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => this.source = data,
      error => this.logService.log("Failed to get users"),
      () => this.dataSource = new MatTableDataSource(this.source)
      );

    this.dataSource.sort = this.sort;
    this.logService.log(this.source[0].name); //See if first element loaded
  }

  /*
  convertAnalytic(): Observable<Analytic[]>{
    let users: User[], analytic:Analytic[], i:string;
    this.service.getUsers().subscribe(data => users = data);
    this.logService.log(users[i].name);
    for (i in users){
      analytic[i].id = users[i].id;
      analytic[i].name = users[i].name;
      analytic[i].username = users[i].username;
      analytic[i].email = users[i].email;
    }
    return of(analytic);
  }*/
}

