import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTitleBarComponent } from './app-title-bar/app-title-bar.component';
import { AppMovieCardComponent } from './app-movie-card/app-movie-card.component';


const routes: Routes = [
  {
    path:'',
    component: AppTitleBarComponent
  },
  {
    path:'',
    component: AppMovieCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
