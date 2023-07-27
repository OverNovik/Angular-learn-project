import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want lern angular', text: '!!!', id: 1},
    {title: 'I want lern angular2121', text: '222', id: 2},
  ]

  updatePost(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id);
  }
}
