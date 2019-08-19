import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getTopics(comment: string) {
    const topics = new Array<string>();

    const commentParts = comment.split(' ');

    for (const part of commentParts) {
      if (part.startsWith('#')) {
        const topic = part.substring(1);
        topics.push(topic);
      }
    }

    return topics;
  }

  onSubmit(form: NgForm) {
    const post = new Post(
      null,
      form.value.comment,
      this.getTopics(form.value.comment)
    );
    this.postService.newPost(post).subscribe(res => {

    },
    err => {
      console.log(err); // Mirar status y que mostrar
    });
  }
}
