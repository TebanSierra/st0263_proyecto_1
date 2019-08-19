import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(post: Post): Observable<any> {
    return this.http.post('localhost:8081/post', post);
  }

  getPosts(): Observable<Post[]> {
    console.log('Le estoy pegando al servicio de getPost del Front');
    const posts = this.http.get('localhost:8081/post');
    return posts;
  }
}
