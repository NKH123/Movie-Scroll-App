import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe }from './filter.pipe.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleBarComponent } from './app-title-bar/app-title-bar.component';
import { AppMovieCardComponent } from './app-movie-card/app-movie-card.component';
import { MovieData } from './movie.api.data';
import { AppMovieCardListComponent } from './app-movie-card-list/app-movie-card-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AppTitleBarComponent,
    AppMovieCardComponent,
    AppMovieCardListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ MovieData ],
  bootstrap: [AppComponent]
})
export class AppModule { }
