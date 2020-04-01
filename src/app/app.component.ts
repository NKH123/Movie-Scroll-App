import { Component } from '@angular/core';
import MovieJson from '../assets/movie.json'
import { FilterPipe } from './filter.pipe.service'

// import { MovieData } from './movie.api.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'movie-scroll';
  // movie$;
  // // constructor(private movieService: MovieData){}

  // // fetchMovies(){
  // //   this.movie$=this.movieService.fetchMovieData();
  // // }
  // constructor() {
  //   console.log('Reading local json files');
  //   console.log(MovieJson);
  //  }
  title = 'movie-listings';
  searchText;

  constructor() {
    var movie_json = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
    var parsed_json = JSON.parse(movie_json)
    // console.log(results.results[0].title);
    // var searchText = document.getElementById("input1");
    // var searchText=document.getElementById("input1").nodeValue;
  }

  httpGet(url)
  {
      var http = new XMLHttpRequest();
      http.open( "GET", url, false ); // false for synchronous request
      http.send( null );
      return http.responseText;
  }

  ngOnInit(): void {
  }

}
