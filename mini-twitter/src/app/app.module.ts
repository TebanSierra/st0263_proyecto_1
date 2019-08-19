import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { FilterComponent } from './screens/home/components/filter/filter.component';
import { NewPostComponent } from './screens/home/components/new-post/new-post.component';
import { FeedComponent } from './screens/home/components/feed/feed.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './screens/home/components/feed/components/post/post.component';
import { SignupComponent } from './screens/signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SigninComponent } from './components/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FilterComponent,
    NewPostComponent,
    FeedComponent,
    PostComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SigninComponent]
})
export class AppModule { }
