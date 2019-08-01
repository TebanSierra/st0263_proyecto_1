import { Component } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent {
    post: Post = new Post(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        null,
        new Date,
        []
    );
}
