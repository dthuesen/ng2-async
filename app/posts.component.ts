import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { IPost } from './post';

@Component({
    selector: 'posts',
    template: `
      <h1>Posts</h1>
      <div *ngIf="isLoading">
        <i class="fa fa-circle-o-notch fa-spin fa-3x"></i>
      </div>
      <p>Data from the posts.component.ts</p>
      <div *ngFor="let post of posts">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr />
      </div>
      
      <button (click)="this.getPosts()">Get Posts</button>
    `,
})
export class PostsComponent implements OnInit {

  errorMessage: string;
  posts: IPost[];
  isLoading: boolean = true;

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

  getPosts(): void {
        this.isLoading = true;
        // this.isLoading = true;
        this._postService.getPosts()
                .subscribe(posts => {
                  this.isLoading = false;
                  this.posts = posts;
                },
                error => this.errorMessage = <any>error);
    }
}
