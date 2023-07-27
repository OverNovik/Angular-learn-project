import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput') inputRef!: ElementRef;

  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      }

      this.onAdd.emit(post);
      this.title = this.text = '';
      this.inputRef.nativeElement.focus();
    }
  }
}
