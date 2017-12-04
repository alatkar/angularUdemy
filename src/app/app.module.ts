import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavComponent } from './fav/fav.component';
import { TitleCasePipe } from './title-case.pipe';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostService } from 'app/services/post.service';
import { HttpModule } from '@angular/http';
import { AppErrorHandle } from 'app/common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostsComponent } from 'app/posts/posts.component';
import { GithubFollowersComponent } from 'app/github-followers/github-followers.component';
import { GithubFollowersService } from 'app/services/github-followers.service';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    CoursesComponent,
    FavComponent,
    TitleCasePipe,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent,
    GithubFollowersComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandle}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
