import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AcsBindingsComponent } from './acs-bindings/acs-bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventsComponent } from './events/events.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acs', component: AcsBindingsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'driver', component: DriverComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
