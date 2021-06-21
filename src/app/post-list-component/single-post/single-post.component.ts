import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp; 
import { Post } from 'src/models/post.model';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!: Post;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.post = new Post('', '', 0, new Timestamp(0, 0));
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(+id).then(
      // @ts-ignore
      (post: Post) => {
        this.post = post;
      }
    );
    }

    onBack() {
      this.router.navigate(['/posts']);
    }

}
