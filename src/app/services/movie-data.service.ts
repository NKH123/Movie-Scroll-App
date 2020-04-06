import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) {   }
   getData():Observable<any>{
    const url="https://api.themoviedb.org/3/discover/movie?api_key=235bcca18e1469c3306d1564edf3f661&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=500";
    return this.http.get<any>(url)
    }
  }

