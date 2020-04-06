import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleBarComponent } from './app-title-bar/app-title-bar.component';
import { AppMovieCardComponent } from './app-movie-card/app-movie-card.component';
import { AppMovieCardListComponent } from './app-movie-card-list/app-movie-card-list.component';
import { NgbdPaginationBasic } from './pagination-basic';
import { NgxPaginationModule } from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
    AppTitleBarComponent,
    AppMovieCardComponent,
    AppMovieCardListComponent,
    NgbdPaginationBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxPaginationModule
  ],
  exports: [NgbdPaginationBasic],
  providers: [],
  bootstrap: [AppComponent, NgbdPaginationBasic]
})
export class AppModule { }
