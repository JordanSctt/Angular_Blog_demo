import { Injectable } from "@angular/core";
import firebase from "firebase";
import { Subject } from "rxjs";
import { Post } from "src/models/post.model";

@Injectable({
    providedIn: 'root'
  })

  export class PostsService {
      
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();
  
    constructor() {
      this.getPosts();
     }
  
    emitPosts() {
      this.postsSubject.next(this.posts);
    }
  
    savePosts() {
      firebase.database().ref('/posts').set(this.posts);
    }
  
    getPosts() {
      firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
    }
  
    getSinglePost(id: number) {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/posts/' + id).once('value').then(
            (data) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }
  
    createNewPost(newPost: Post) {
      this.posts.push(newPost);
      this.savePosts();
      this.emitPosts();
    }
  
    removePost(post: Post) {
      const postIndexToRemove = this.posts.findIndex(
        (postEl) => {
          if(postEl === post) {
            return true;
          } else {
            return false;
          }
        }
      );
      this.posts.splice(postIndexToRemove, 1);
      this.savePosts();
      this.emitPosts();
    }

    likePost(post: Post) {
       this.posts.findIndex(
           (postEl) => {
               if(postEl === post) {
                   postEl.loveIts += 1;
               }
           }
       );
        this.savePosts();
        this.emitPosts();
    }

    dontLikePost(post: Post) {
        this.posts.findIndex(
            (postEl) => {
                if(postEl === post) {
                    postEl.loveIts -= 1;
                }
            }
        );
         this.savePosts();
         this.emitPosts();
    }

  }