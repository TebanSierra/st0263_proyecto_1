import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MomentModule } from 'angular2-moment';
import 'hammerjs';

// Componentes App
import { AppComponent } from './app.component';
import { TopicDetailComponent } from './topic/topic-detail.component';
import { PostFormComponent } from './post/post-form.component';
import { PostDetailComponent } from './post/post-detail.component';
import { HomeComponent } from './home/home.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TopicDetailComponent,
    PostFormComponent,
    PostDetailComponent,
    HomeComponent,
    SignupScreenComponent,
    SigninScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
