import { Component } from '@angular/core';
import MovieJson from '../assets/movie.json'
// import { MovieData } from './movie.api.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-scroll';
  movie$;
  // constructor(private movieService: MovieData){}

  // fetchMovies(){
  //   this.movie$=this.movieService.fetchMovieData();
  // }
  constructor() {
    console.log('Reading local json files');
    console.log(MovieJson);
   }

}
