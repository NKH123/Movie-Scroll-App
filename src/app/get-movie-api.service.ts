import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetMovieApiService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get('../assets/movie.json');
  }
}
