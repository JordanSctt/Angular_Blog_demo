import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/models/post.model';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts!: Post[];
  postsSubscription!: Subscription;
  
  constructor(private postsService: PostsService,
              private router: Router) { }
                
  ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(post: Post) {
    if (confirm('Etes vous sur de vouloir supprimer ce post ?')) {
      this.postsService.removePost(post);
    }
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  onLike(post: Post) {
    this.postsService.likePost(post);
  }
  onDontLike(post: Post) {
    this.postsService.dontLikePost(post);
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
