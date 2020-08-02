import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FooComponent } from './foo/foo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AcsBindingsComponent } from './acs-bindings/acs-bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';

import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { DriverComponent } from './driver/driver.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //FooComponent,
    NavBarComponent,
    AcsBindingsComponent,
    DirectivesComponent,
    ChildComponent,
    EventsComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostComponent,
    PostsComponent,
    DriverComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
