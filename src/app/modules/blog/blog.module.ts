import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { PostComponent } from './components/post/post.component';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PostEditorComponent,
    PostComponent,
    BlogComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
