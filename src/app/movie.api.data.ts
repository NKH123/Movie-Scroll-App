import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable()
export class MovieData{
    constructor(private http: HttpClient){}

    fetchMovieData(url:string){
        return this.http.get(url)
    }
}