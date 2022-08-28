import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {   
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  AboutComponent,
  LoginComponent,
  RegisterComponent,
  NotFoundComponent,
  ButtonExitComponent
} from './components'

import { AuthLayoutComponent, SiteLayoutComponent } from './shared/layouts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    NotFoundComponent,
    ButtonExitComponent,
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