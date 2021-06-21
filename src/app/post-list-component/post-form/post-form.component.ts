import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp; 
import { Post } from 'src/models/post.model';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title')?.value;
    const content = this.postForm.get('content')?.value;
    const loveIts = 0;
    const createdAt = Timestamp.now();
    const newPost = new Post(title, content, loveIts, createdAt);
    
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
