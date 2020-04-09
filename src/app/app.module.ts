import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { LogActionComponent } from './log-action/log-action.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    NavigationBarComponent,
    PostComponent,
    UserComponent,
    LogActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
