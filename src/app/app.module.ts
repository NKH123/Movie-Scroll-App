import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleBarComponent } from './app-title-bar/app-title-bar.component';
import { AppMovieCardComponent } from './app-movie-card/app-movie-card.component';
import { MovieData } from './movie.api.data';
@NgModule({
  declarations: [
    AppComponent,
    AppTitleBarComponent,
    AppMovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ MovieData ],
  bootstrap: [AppComponent]
})
export class AppModule { }
