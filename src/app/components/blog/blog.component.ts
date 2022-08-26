import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  constructor(
    private _postService: PostService
  ) { }

    

  ngOnInit(): void {
    this._postService.GetPosts().subscribe({next: postsArray => this.posts = postsArray,
    error: err => console.log(`Error: ${err.message} was happened`)})
  }

}

