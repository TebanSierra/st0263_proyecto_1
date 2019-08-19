import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts: Observable<Post>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts().subscribe(res => {
      console.log(res);
    });
  }

}
