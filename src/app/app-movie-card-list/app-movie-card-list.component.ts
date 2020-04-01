import { Component,  OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';
import { GetMovieApiService } from '../get-movie-api.service';
@Component({
  selector: 'app-app-movie-card-list',
  templateUrl: './app-movie-card-list.component.html',
  styleUrls: ['./app-movie-card-list.component.css']
})
export class AppMovieCardListComponent implements OnInit {
  searchText;

  movies = [];

  constructor(private dataService: GetMovieApiService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.movies = data;
    })  
  }



}
