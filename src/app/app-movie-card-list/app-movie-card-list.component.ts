import { Component,  OnInit, Input, ChangeDetectionStrategy, HostListener  } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { MovieSearchService } from '../services/movie-search.service';
@Component({
  selector: 'app-app-movie-card-list',
  templateUrl: './app-movie-card-list.component.html',
  styleUrls: ['./app-movie-card-list.component.css']
})
export class AppMovieCardListComponent implements OnInit {
  searchText;
  isCollapsed = true;
  movies: Array<any>
  totalRecords="10"
 
  public innerWidth: any;
  numberyo=innerWidth/300;

  page="1"

  constructor(private dataService: MovieDataService, private dataService1: MovieSearchService) {
    this.movies=new Array<any>()
   }
    
  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.dataService.getData().subscribe((data)=>{
      console.log(data);
      this.movies = data.results;
      this.totalRecords=data.results.length
    })  
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
  
}
searchOnClick(){
  this.dataService1.getData(this.searchText).subscribe((data)=>{
    console.log(data);
    this.movies = data.results;
    this.totalRecords=data.results.length
  })  
}

}
