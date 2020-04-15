import { User } from './../data-interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.css']
})
export class AnalyticsViewComponent implements OnInit {

  dataSource:User[] = [
    {id: 1 ,name:"halo", username:"someone",email:"email",address:{street:"a",suite:"a",city:"a",zipcode:"a",geo:{lat:"a",lng:"a"}}}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
