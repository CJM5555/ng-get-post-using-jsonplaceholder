import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'An Angular Project by CJM';
  headerTitle:string = 'Posts';

  public setHeader(choice: Number): void{
    switch(choice){
      case 1:this.headerTitle = "Posts"; break;
      case 2:this.headerTitle = "Albums"; break;
      case 3:this.headerTitle = "User Analytics"; break;
      default: console.log("What have u clicked?!");
    }
  }
}


