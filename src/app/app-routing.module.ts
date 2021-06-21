import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-list-component/post-form/post-form.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { SinglePostComponent } from './post-list-component/single-post/single-post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponentComponent},
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/view/:id', component: SinglePostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
