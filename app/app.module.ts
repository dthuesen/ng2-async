import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { PostsComponent } from './posts.component';
import { PostService } from './post.service'


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule ],
  declarations: [ AppComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PostService ]
})
export class AppModule { }
