import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { AlbumsViewComponent } from './albums-view/albums-view.component';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component';


const routes: Routes = [
  { path: "", component: PostsViewComponent},
  { path: "posts", component: PostsViewComponent},
  { path: "posts/:id", component: PostsViewComponent},
  { path: "albums", component: AlbumsViewComponent},
  { path: "analytics", component: AnalyticsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
