import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {   
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  BlogComponent,
  AboutComponent,
  LoginComponent,
  RegisterComponent,
  PostComponent,
  NotFoundComponent,
  ButtonExitComponent,
  PostsFilterComponent
} from './components'

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    PostComponent,
    NotFoundComponent,
    ButtonExitComponent,
    PostsFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }