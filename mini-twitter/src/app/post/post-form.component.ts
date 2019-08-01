import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../models/post.model';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
    onSubmit(form: NgForm) {
        const post = new Post(
            form.value.comment,
            null,
            new Date(),
            this.getTopics(form.value.comment)
        );

        console.log(post);
        form.reset();
    }

    getTopics(comment: string) {
        const topics = [];
        const comment_parts = comment.split(' ');
        for (const part of comment_parts) {
            if (part.startsWith('#')) {
                topics.push(part);
            }

        }

        return topics;
    }
}
