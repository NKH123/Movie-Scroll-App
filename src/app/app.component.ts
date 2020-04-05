import { Component } from '@angular/core';
import MovieJson from '../assets/movie.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-listings';
  searchText;

  constructor() {
    var movie_json = this.httpGet("https://api.themoviedb.org/4/list/1?api_key=dea94f82d808e85759059b08ab481c70");
    var parsed_json = JSON.parse(movie_json)
  }

  httpGet(url)
  {
      var http = new XMLHttpRequest();
      http.open( "GET", url, false );
      http.send( null );
      return http.responseText;
  }

  ngOnInit(): void {
  }

}
