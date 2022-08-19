import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private _postService: PostService
  ) { }

  public get getPosts(): Post[]  {
    return this._postService.GetPosts()
}
  ngOnInit(): void {

  }

}
