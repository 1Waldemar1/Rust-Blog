import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public GetPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(environment.apiUrl + 'get-posts');
  }

  public CreatePost(post: Post): Observable<boolean> {
    return this._httpClient.post<boolean>(environment.apiUrl + 'create-post', post);
  }
}
