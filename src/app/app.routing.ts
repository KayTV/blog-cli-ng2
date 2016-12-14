import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewPostComponent } from './components/newpost/newpost.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
