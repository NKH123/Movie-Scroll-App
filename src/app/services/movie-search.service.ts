import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) {   }
   getData(appendData):Observable<any>{
    const url="https://api.themoviedb.org/3/search/movie?api_key=235bcca18e1469c3306d1564edf3f661&language=en-US&query="+appendData;
    return this.http.get<any>(url)
    }
}

