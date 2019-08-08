import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public posts: Array<Post>;

    constructor() {
        this.posts = new Array<Post>();
    }

    onSubmit(form: NgForm) {
        console.log('Buscando! ' + form.value);
    }
}
