import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostsService } from 'src/services/posts.service';
import { PostFormComponent } from './post-list-component/post-form/post-form.component';
import { SinglePostComponent } from './post-list-component/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostFormComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
