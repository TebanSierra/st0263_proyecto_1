import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>('127.0.0.1:8081/post', post);
  }

  getPosts(): Observable<Post[]> {
    console.log('Le estoy pegando al servicio de getPost del Front');
    return this.http.get<Post[]>('127.0.0.1:8081/post');
  }
}
