import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogActionService {

  logs:String[] = [];
  constructor() { }

  log(message:String):void{
    this.logs.push(message);
  }

  getLogs():String[]{
    return this.logs;
  }
}
