import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { IPost } from './post';


@Injectable()
export class PostService {
  private _postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) {
  }
  getPosts (): Observable<IPost[]> {
      return this._http.get(this._postsUrl)
                 .map((res: Response) => <IPost[]> res.json())
                 .do(data => console.log('All: ' +  JSON.stringify(data)))
                 .catch(this.handleError);
  }


  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
