import { LogActionService } from './../log-action.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-action',
  templateUrl: './log-action.component.html',
  styleUrls: ['./log-action.component.css']
})
export class LogActionComponent implements OnInit {

  logs:String[] = [];
  constructor(private logService:LogActionService) { }

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
  }


}
