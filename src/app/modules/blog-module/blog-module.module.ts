import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { MainPageComponent } from './components/main-page/main-page.component';



@NgModule({
  declarations: [
    PostEditorComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModuleModule { }
