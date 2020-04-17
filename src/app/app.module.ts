import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { LogActionComponent } from './log-action/log-action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { AlbumsViewComponent } from './albums-view/albums-view.component';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    LogActionComponent,
    PostsViewComponent,
    AlbumsViewComponent,
    AnalyticsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
