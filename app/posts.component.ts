import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import{ IPost } from './post'

@Component({
    selector: 'posts',
    template: `
      <h1>Posts</h1>
      <p>from the posts.component.ts</p>
      <div><code>{{response}}</code></div>
      <button (click)="this.getPosts()">Get Posts</button>
    `,
})
export class PostsComponent implements OnInit {

  errorMessage: string;
  posts: IPost[];

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {

  }

  getPosts(): void {
        this._postService.getPosts()
                .subscribe(posts => this.posts = posts,
                           error => this.errorMessage = <any>error);
    }
}
