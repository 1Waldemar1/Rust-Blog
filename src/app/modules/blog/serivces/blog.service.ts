import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  controllerUrl: string = "post-controller/"

  constructor(
    private _httpClient: HttpClient,
  ) { }
 
  public GetPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(this.controllerUrl+  'get-all');
  }

  public CreatePost(post: Post): Observable<boolean> {
    return this._httpClient.post<boolean>('create-post', post);
  }
}
